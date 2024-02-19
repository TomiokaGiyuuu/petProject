import './Sidebar.css'
import {RssFeed, Chat, People, AccountCircle, Audiotrack} from "@mui/icons-material";
import Online from "../online/Online";
import {Users} from "../../fakeData";
import {
    Link
} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";


const Sidebar = () => {
    const {user} = useContext(AuthContext);
    const currentUser = `/profile/${user.username}`;

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <Link to = {currentUser}>
                        <li className="sidebarItem">
                            <AccountCircle className="sidebarIcon"/>
                            <span className="sidebarItemText">My Profile</span>
                        </li>
                    </Link>
                    <Link to="/">
                        <li className="sidebarItem">
                            <RssFeed className="sidebarIcon"/>
                            <span className="sidebarItemText">News</span>
                        </li>
                    </Link>
                    <Link to="/chat">
                        <li className="sidebarItem">
                            <Chat className="sidebarIcon"/>
                            <span className="sidebarItemText">Chat</span>
                        </li>
                    </Link>
                    <Link to="/friends">
                        <li className="sidebarItem">
                            <People className="sidebarIcon"/>
                            <span className="sidebarItemText">Friends</span>
                        </li>
                    </Link>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarForFriends">
                    <li className="sidebarOnlineFriendsText">Online Friends:</li>
                    <li className="sidebarFriends">
                        {Users.map(u => (
                            <Online key={u.id} user={u}/>
                        ))}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;