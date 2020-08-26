import React ,{forwardRef}from 'react'
import { Avatar, Button } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import "./Post.css";

import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const  Post = forwardRef(function({displayName,
    username,text,image,
    avatar,verified},ref) 
    {
    return (
        <div className="post" ref={ref}>
            {/* postavatar is the right flex part hence extra div is taken */}
            <div className="postAvatar">
                <Avatar src={avatar} ></Avatar>
            </div>
            {/*  */}
            <div className="postBody">
                <div className="postHeader">
                     <div className="postHeaderText">
                                 <h3> {displayName}<span> { verified && <CheckCircleIcon className="verified"/> } </span></h3>
                                <h4 className="attherateHeader">{'@'+username}</h4>
                    </div>
                </div>    
                {/*  */}
                <div className="postDescription">
                        <p>{text}</p>
                </div>
                {/*  */}
                <img className="postImage" src={image}/>
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
})

export default Post
