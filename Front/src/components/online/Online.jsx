import './online.css';

const Online = ({user}) => {
    return (
        <div className="sidebarFriend">
            <div className="sidebarFriendProfileImg">
                <img src="/assets/humans/no-avatar.png" alt="" className="sidebarFriendImg"/>
                {/*<img src={user.profilePicture} alt="" className="sidebarFriendImg"/>*/}
                <div className="sidebarFriendOnline"></div>
            </div>
            <span className="sidebarFriendName">{user.username}</span>
        </div>
    );
};

export default Online;