import React from 'react'
import "./Tweetbox.css";
import {Button ,Avatar} from '@material-ui/core';  

function Tweetbox() {
    
    return (
        <div className="tweetBox">
             <form>
                 <div className="tweetBoxInput">
                 <Avatar  src="https://cineblitz.in/wp-content/uploads/2019/05/Amitabh-Bachchan-Deewar.jpg" />
                 <input placeholder="What's happening? " type="text"/>
                 </div>
                 <input className="tweetBoxImageInput" placeholder="Enter image URL.. " type="text"/>
                 <Button className="tweetBoxButton">Tweet</Button>
             </form>
        </div>
    )
}

export default Tweetbox
