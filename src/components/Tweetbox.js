import React,{useState} from 'react'
import "./Tweetbox.css";
import {Button ,Avatar} from '@material-ui/core';  

import db from "./firebase";



function Tweetbox() {
       
   const [tweetMessage , setTweetMessage] = useState("");
   const [tweetImage , setTweetImage] = useState("");
   
   //function ind=side function for event handeling
   const sendTweet = e =>{

    e.preventDefault();

    db.collection('posts').add({
        displayName : "rane_devashish",
        username: "Devashish Rane",
        verified:true,
        text :tweetMessage,
        avatar: "https://cineblitz.in/wp-content/uploads/2019/05/Amitabh-Bachchan-Deewar.jpg",
        image: tweetImage
    });

    setTweetImage("");
    setTweetMessage("");
}
   
    return (
        <div className="tweetBox">
             <form >
                 <div className="tweetBoxInput">
                 <Avatar  src="https://cineblitz.in/wp-content/uploads/2019/05/Amitabh-Bachchan-Deewar.jpg" />

                 <input  value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value) } placeholder="What's happening? " type="text"/>
                 </div>

                 <input  value={tweetImage} onChange={(e) => setTweetImage(e.target.value) } className="tweetBoxImageInput" placeholder="Enter image URL.. " type="text"/>
                 
                 <Button onClick={sendTweet} type="submit" className="tweetBoxButton">Tweet</Button>
             </form>
        </div>
    )
}

export default Tweetbox
