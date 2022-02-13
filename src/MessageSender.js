import { Avatar } from '@material-ui/core'
import React, {useState} from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

function MessageSender() {
    const [input, setInput] = useState("");
    const [imageUrl, setimageUrl] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        // Db stuff here
        setInput("");
        setimageUrl("");
    };
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar />
                <form>
                    <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="messageSender_input"
                    placeholder={'Whats on your mind?'}/>
                    <input 
                    value={imageUrl}
                    onChange={(e) => setimageUrl(e.target.value)}
                    placeholder='Image Url (Optional)'/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender_bottom">
                    <div className="messageSender_option">
                        <VideocamIcon style={{ color: "red" }}/>
                        <h3>Live Video</h3>
                    </div>
                    <div className="messageSender_option">
                        <PhotoLibraryIcon style={{ color: "green" }}/>
                        <h3>Photo/Video</h3>
                    </div>
                    <div className="messageSender_option">
                        <EmojiEmotionsIcon style={{ color: "yellow" }}/>
                        <h3>Feeling/Activity</h3>
                    </div>
            </div>
        </div>
    )
}

export default MessageSender
