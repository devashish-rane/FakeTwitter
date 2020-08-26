import React from 'react';
import  "./Feed.css";
import Tweetbox from './Tweetbox';
import Post from "./Post";

function Feed() {
    return (
        <div className="feed" >

            {/* header */}
            <div className="feedHeader">
                <h2>Home</h2>
            </div>

            {/* Tweetbox */}
            <Tweetbox/>
         

            {/* post */}
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>



            
        </div>
    )
}

export default Feed
