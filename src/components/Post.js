import React from 'react'
import { Avatar, Button } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import "./Post.css";

import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Post(displayName,username,text,image,avatar,verified,timestamp) 
    {
    return (
        <div className="post">
            {/* postavatar is the right flex part hence extra div is taken */}
            <div className="postAvatar">
                <Avatar src="https://cineblitz.in/wp-content/uploads/2019/05/Amitabh-Bachchan-Deewar.jpg" ></Avatar>
            </div>
            {/*  */}
            <div className="postBody">
                <div className="postHeader">
                     <div className="postHeaderText">
                        <h3>Brodcast <span>  <CheckCircleIcon className="verified"/> </span></h3>
                        <h4 className="attherateHeader">@BBC news</h4>
                    </div>
                </div>    
                {/*  */}
                <div className="postDescription">
                   <p>This is the sample description of the given tweet...</p>
                </div>
                {/*  */}
                <img className="postImage" src="https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg"/>
                {/*  */}



                <div className="postFooter">
                     <Button className="footerButton " > <ChatBubbleOutlineIcon/> </Button>
                     <Button className="footerButton "> <ShareIcon className="share"/> </Button>
                     <Button className="footerButton heart"> <FavoriteIcon  /> </Button>
                     <Button className="footerButton moreIcon" > <MoreVertIcon /> </Button>
                </div>    
            </div>
        </div>
    )
}

export default Post
