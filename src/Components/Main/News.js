import React from 'react';
import './News.css';

function News() {
	return (
		<><div class="headings" id="News">
			<h2>News</h2>
			<h3>The latest news from the Australian Cycling Team</h3>
		</div><div class="news-section">
				<div class="section-content news">
					<div class="cards">
						<div class="card">
							<div class="image-section">
								<img src="images/news1.webp"></img>
							</div>
							<div class="article">
								<h4>Garry Dawn takes the Lead!</h4>
								<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et
									dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
									esse cillum dolore eu
									fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
									qui officia
									deserunt mollit anim id est laborum.</p>
							</div>
							<div class="news-view">
								<a href="#" class="button">Read More</a>
							</div>
							<div class="posted-date">
								<p>Posted on 1-3-23</p>
							</div>
						</div>
						<div class="card">
							<div class="image-section">
								<img src="images/news2.jpg"></img>
							</div>
							<div class="article">
								<h4>James Green making his way up the ladder</h4>
								<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et
									dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
									esse cillum dolore eu
									fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
									qui officia
									deserunt mollit anim id est laborum.</p>
							</div>
							<div class="news-view">
								<a href="#" class="button">Read More</a>
							</div>
							<div class="posted-date">
								<p>Posted on 20-2-23</p>
							</div>
						</div>
						<div class="card">
							<div class="image-section">
								<img src="images/news3.webp"></img>
							</div>
							<div class="article">
								<h4>Lucas knocks Yoshi out of position</h4>
								<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et
									dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
									esse cillum dolore eu
									fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
									qui officia
									deserunt mollit anim id est laborum.</p>
							</div>
							<div class="news-view">
								<a href="#" class="button">Read More</a>
							</div>
							<div class="posted-date">
								<p>Posted on 1-2-23</p>
							</div>
						</div>
					</div>
				</div>
			</div></>
	);
}


export default News;