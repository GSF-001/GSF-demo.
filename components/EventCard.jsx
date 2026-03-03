export default function EventCard({ event }) {
  return (
    <div style={{border:"1px solid #ccc", padding:"10px", margin:"5px", borderRadius:"5px"}}>
      <h3>{event.name}</h3>
      <p>Points: {event.points}</p>
      <button style={{padding:"5px 10px", background:"#00FFFF", border:"none", borderRadius:"3px"}}>Claim</button>
    </div>
  );
}
