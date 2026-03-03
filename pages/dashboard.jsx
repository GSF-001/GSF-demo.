import { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import RewardCard from '../components/RewardCard';

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    setEvents([
      { id: 1, name: "Hackathon", points: 50 },
      { id: 2, name: "Student Project Funding", points: 70 },
    ]);
    setRewards([
      { id: 1, name: "Birthday Reward", points: 100 },
      { id: 2, name: "VIP Badge", points: 200 },
    ]);
  }, []);

  return (
    <div style={{padding:"20px", fontFamily:"sans-serif"}}>
      <h1>GSF Dashboard</h1>
      <h2>Events</h2>
      {events.map(ev => <EventCard key={ev.id} event={ev} />)}

      <h2>Rewards</h2>
      {rewards.map(rw => <RewardCard key={rw.id} reward={rw} />)}
    </div>
  )
}
