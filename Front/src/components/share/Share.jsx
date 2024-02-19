import './share.css'
import {AddPhotoAlternate, Cancel, SentimentSatisfiedOutlined, ShareSharp, TurnedInSharp} from "@mui/icons-material";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Share = () => {
    const { user } = useContext(AuthContext);
    const PF = "/assets";
    const desc = useRef();
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            console.log(newPost);
            try {
                await axios.post("/upload", data);
            } catch (err) {}
        }
        try {
            await axios.post("/post/create", newPost);
            console.log(newPost);
            window.location.reload();
        } catch (err) {}
    };

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={user.profilePicture
                        ? `${PF}/25bce1d90c9778c2502d20359ab36338.jpg`
                        : `${PF}/humans/no-avatar.png`
                    } alt=""/>
                    <input placeholder="What's in your mind, Tomioka?" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                {file && (
                    <div className="shareImgContainer">
                        <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                        <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
                    </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOptions">
                            <AddPhotoAlternate htmlColor="red" className = "shareIcon"/>
                            <span className="shareOptionText">Photo/Video</span>
                            <input
                                style={{ display: "none" }}
                                type="file"
                                id="file"
                                accept=".png,.jpeg,.jpg"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </label>
                        <div className="shareOptions">
                            <TurnedInSharp htmlColor="blue" className = "shareIcon"/>
                            <span className="shareOptionText">Tag your friends!</span>
                        </div>
                        <div className="shareOptions">
                            <SentimentSatisfiedOutlined htmlColor="goldenrod" className = "shareIcon"/>
                            <span className="shareOptionText">Emoji</span>
                        </div>
                        <button className="shareOptions" type="submit">
                            <ShareSharp htmlColor="green" className = "shareIcon"/>
                            <span className="shareOptionText">Share with your feelings!</span>
                        </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Share;