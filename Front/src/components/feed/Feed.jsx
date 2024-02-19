import './feed.css';
import Share from "../share/Share";
import Post from "../post/Post";
import {useEffect, useState} from "react";
import axios from "axios";
import {Posts} from "../../fakeData";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

const Feed = ({username}) => {
    const [posts, setPosts] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
                ? await axios.get("/post/profile/" + username)
                : await axios.get("/post/timeline/" + user._id);
            setPosts(res.data.sort((post1, post2) => {
               return new Date(post2.createdAt) - new Date(post1.createdAt);
            }));
        }
        fetchPosts();
    }, [username])

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {posts.map((p) => (
                    <Post key = {p._id} post = {p}/>
                ))}
            </div>
        </div>
    );
};

export default Feed;
