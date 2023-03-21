import React from 'react';

function VideoHighlights() {
 
  return(
	<div className="VideoHighlights" id = "VideoHighlights">
		<div class="headings">
                <h2>Race Highlights</h2>
                <h3>Check out the highlights from our latest events</h3>
            </div>
            <div class="container">
                <div class="row">
                    <div class="youtube_video">
                        <iframe width="100%" height="100%" id="video_id"
                            src="https://www.youtube.com/embed/12YY1EV4rzY?rel=0" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
                <div class="gallery">
                    <div class="item">
                        <img src="images/thumb1.jpg" data-id="12YY1EV4rzY?rel=0"></img>
                        <div class="youtube_icon active">
                            <img src="images/youtube.svg"></img>
                        </div>
                    </div>
                    <div class="item">
                        <img src="images/thumb2.jpg" data-id="46QQIp9RNzw?rel=0"></img>
                        <div class="youtube_icon">
                            <img src="images/youtube.svg"></img>
                        </div>
                    </div>
                    <div class="item">
                        <img src="images/thumb3.jpg" data-id="Xs-2ksG55sY?rel=0"></img>
                        <div class="youtube_icon">
                            <img src="images/youtube.svg"></img>
                        </div>
                    </div>
                </div>
            </div>
            </div>
  );
};

export default VideoHighlights;