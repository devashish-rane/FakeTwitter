import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./Widgets.css";
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from 'react-twitter-embed';
function Widgets() {
    return (
        <div className="widgets">
            <div className="searchHeader">
                <div className="search">
                    <SearchIcon className="searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
                </div>
            </div>

            <div className="widgtContainer">
                <h2>Whats happening</h2>

                {/* react-twitter-embed */}
                <TwitterTweetEmbed tweetId="1298494027503767553"/>

                <TwitterTimelineEmbed className="timeLineWidget"
                 sourceType="profile"
                 screenName="rane_devashish"
                 options={{height: 400 }}/>

                 <TwitterShareButton
                 url="https://cp-algorithms.com/"
                 options={{text: "CP maxx is awesome",via:"rane_devashish"}}/>


            </div>
        </div>
    )
}

export default Widgets
