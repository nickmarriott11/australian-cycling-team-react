import React from 'react';
import './LeaderboardTable.css';

function LeaderboardTable() {
	return (
		<><div class="headings" id="LeaderboardTable">
			<h2>Leaderboard</h2>
			<h3>See how your favourite riders are performing this season</h3>
		</div><table class="content-table">
				<thead>
					<tr>
						<th>Rank</th>
						<th>Name</th>
						<th>Points</th>
						<th>Team</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Garry Dawn</td>
						<td>468</td>
						<td>ACT</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Macy Henderson</td>
						<td>440</td>
						<td>ACT</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Tammy Boots</td>
						<td>420</td>
						<td>ACT</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Lucas James</td>
						<td>380</td>
						<td>ACT</td>
					</tr>
					<tr>
						<td>5</td>
						<td>Noob Smoke</td>
						<td>350</td>
						<td>ACT</td>
					</tr>
					<tr>
						<td>6</td>
						<td>Yoshi Bowser</td>
						<td>330</td>
						<td>ACT</td>
					</tr>
					<tr>
						<td>7</td>
						<td>James Green</td>
						<td>300</td>
						<td>ACT</td>
					</tr>
					<tr>
						<td>8</td>
						<td>Porter Harris</td>
						<td>280</td>
						<td>ACT</td>
					</tr>
					<tr>
						<td>9</td>
						<td>Terry Torpedo</td>
						<td>240</td>
						<td>ACT</td>
					</tr>
					<tr>
						<td>10</td>
						<td>Lance Armstrong</td>
						<td>220</td>
						<td>ACT</td>
					</tr>
				</tbody>
			</table></>
	);
}

export default LeaderboardTable;
