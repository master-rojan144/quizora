import React from 'react';
import './LeaderboardPage.css';

const leaderboardData = [
  { rank: 1, name: "Alex Chen", score: 2450, avatar: "👑" },
  { rank: 2, name: "Sarah Kim", score: 2380, avatar: "🥈" },
  { rank: 3, name: "Rahul Sharma", score: 2290, avatar: "🥉" },
  { rank: 4, name: "Priya Patel", score: 2150, avatar: "🔥" },
  { rank: 5, name: "David Wong", score: 2080, avatar: "⚡" },
  { rank: 6, name: "Emma Thompson", score: 1970, avatar: "🌟" },
  { rank: 7, name: "Arjun Reddy", score: 1890, avatar: "🚀" },
];

export default function LeaderboardPage() {
  return (
    <div className="leaderboard-page">
      <div className="leaderboard-container">
        <div className="leaderboard-header">
          <h1>🏆 Global Leaderboard</h1>
          <p>Top players this week</p>
        </div>

        <div className="leaderboard-list">
          {leaderboardData.map((player, index) => (
            <div key={index} className="leaderboard-row">
              <div className="rank">#{player.rank}</div>
              <div className="player-info">
                <span className="avatar">{player.avatar}</span>
                <span className="name">{player.name}</span>
              </div>
              <div className="score">{player.score.toLocaleString()} pts</div>
            </div>
          ))}
        </div>

        <div className="your-rank">
          <p>You are currently ranked <strong>#12</strong> • Keep playing to climb higher!</p>
        </div>
      </div>
    </div>
  );
}