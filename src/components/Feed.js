import React ,{useState, useEffect}from 'react';
import  "./Feed.css";
import Tweetbox from './Tweetbox';
import Post from "./Post";
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{ 
        // runs code when array elements changes //else all
        db.collection('posts').onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc=> doc.data()));
        });
    },[]) ;


    return (
        <div className="feed" >

            {/* header */}
            <div className="feedHeader">
                <h2>Home</h2>
            </div>

            {/* Tweetbox */}
            <Tweetbox/>
         

          <FlipMove>
          {
          posts.map(post =>{  
          
           return  <Post key={post.text}
               displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image} 
                />
          })
          }
          </FlipMove>


            
        </div>
    )
}

export default Feed
