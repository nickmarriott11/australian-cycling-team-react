import React from 'react';
import { useState } from 'react';
import './VideoHighlights.css';
import youtubeIcon from '../../images/youtube.svg';
import thumb1 from '../../images/thumb1.jpg';
import thumb2 from '../../images/thumb2.jpg';
import thumb3 from '../../images/thumb3.jpg';

function VideoHighlights() {
    const [activeItemId, setActiveItemId] = useState('12YY1EV4rzY?rel=0');

    const handleItemClick = (youtube_id) => {
        setActiveItemId(youtube_id);
    };

    return (
        <>
            <div className="headings" id="VideoHighlights">
                <h2>Race Highlights</h2>
                <h3>Check out the highlights from our latest events</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="youtube_video">
                        <iframe
                            width="100%"
                            height="100%"
                            id="video_id"
                            src={`https://www.youtube.com/embed/${activeItemId}`}
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                    </div>
                </div>
                <div className="gallery">
                    <div
                        className={`item ${activeItemId === '12YY1EV4rzY?rel=0' ? 'active' : ''}`}
                        onClick={() => handleItemClick('12YY1EV4rzY?rel=0')}
                    >
                        <img src={thumb1} data-id="12YY1EV4rzY?rel=0" />
                        <div className={`youtube_icon ${activeItemId === '12YY1EV4rzY?rel=0' ? 'active' : ''}`}>
                            <img src={youtubeIcon} />
                        </div>
                    </div>
                    <div
                        className={`item ${activeItemId === '46QQIp9RNzw?rel=0' ? 'active' : ''}`}
                        onClick={() => handleItemClick('46QQIp9RNzw?rel=0')}
                    >
                        <img src={thumb2} data-id="46QQIp9RNzw?rel=0" />
                        <div className={`youtube_icon ${activeItemId === '46QQIp9RNzw?rel=0' ? 'active' : ''}`}>
                            <img src={youtubeIcon} />
                        </div>
                    </div>
                    <div
                        className={`item ${activeItemId === 'Xs-2ksG55sY?rel=0' ? 'active' : ''}`}
                        onClick={() => handleItemClick('Xs-2ksG55sY?rel=0')}
                    >
                        <img src={thumb3} data-id="Xs-2ksG55sY?rel=0" />
                        <div className={`youtube_icon ${activeItemId === 'Xs-2ksG55sY?rel=0' ? 'active' : ''}`}>
                            <img src={youtubeIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VideoHighlights;