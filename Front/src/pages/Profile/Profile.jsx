import './profile.css'
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import Statistics from "../../components/statistics/Statistics";

const Profile = () => {
    const PF = "/assets/humans";
    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/user?username=${username}`);
            setUser(res.data);
        }
        fetchUser();
    }, [])

    return (
        <div>
            <Topbar/>
            <div className="profileWrapper">
                <div className="profilePage">
                    <div className="profileContainer">
                        <div className="profileTop">
                            <img src = { user.coverPicture
                                ? `${PF}/${user.coverPicture}`
                                : `${PF}/commonBackground.jpg`} className="backgroundImg"/>
                            <div className="profileImgContainer">
                                <img src = {`${PF}/no-avatar.png`} className="profileImg"/>
                            </div>
                            <div className="profileInformation">
                                <div className="profileInformationItems">
                                    <div className="profileUsername">
                                        {user.username}
                                    </div>
                                </div>
                                <div className="profileInformationItems">
                                    <div className="profileInformationItem">
                                    </div>
                                    <div className="profileInformationItem">
                                    </div>
                                    <div className="profileInformationItem">
                                    </div>
                                </div>
                                <div className="profileInformationItems">
                                    <div className="profileDescription">
                                        {user.desc}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Statistics/>
                <div className="profileContainer">
                    <Feed username = {username}/>
                    <Rightbar/>
                </div>
            </div>
        </div>
    );
};

export default Profile;