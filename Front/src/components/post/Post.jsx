import './post.css';
import {MoreVert} from "@mui/icons-material";
import {Users} from '../../fakeData';
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {format} from "timeago.js";
import {Link} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";

const Post = ({post}) => {
    const PF = "http://localhost:5000/images/";
    const [user, setUser] = useState({});
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const {user:currentUser} = useContext(AuthContext);


    const likeHandler = () => {
        console.log(PF);
        try{
            axios.put(`post/${post._id}/like`, {userId: currentUser._id});
        } catch (err) {

        }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id));
    },[currentUser._id, post.likes]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/user?userId=${post.userId}`);
            setUser(res.data);
        }
        fetchUser();
    }, [post.userId]);


    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to = {`profile/${user.username}`}>
                            <img src = {user.profilePicture
                                ? PF + user.profilePicture
                                : PF + "no-avatar.png"}/>
                            {/*<img src = {Users.filter((u) => u.id === post.userId)[0].profilePicture}/>*/}
                        </Link>
                        <span className="postUsername">
                            {/*{Users.filter((u) => u.id === post.userId)[0].username}*/}
                            {user.username}
                        </span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postMiddle">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src = {PF + post.img}/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className = "likeButton" onClick={likeHandler} src = "/assets/like.png"/>
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComment">{post.comments} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;