import { Avatar } from '@material-ui/core';
import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import "./Post.css";

function Post({ profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic}
                className="post_avatar" />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>Timestamp...</p>
                </div>
            </div>

            <div className="post_Bottom">
                <p>{message}</p>
            </div>

            <div className="post_Image">
                <img src={image} alt="" />
            </div>

            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div> 
                <div className="post_option">
                    <ChatBubbleOutlineIcon />
                    <p>Share</p>
                </div>   
                <div className="post_option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>

            </div>      
        </div>
    )
}

export default Post
