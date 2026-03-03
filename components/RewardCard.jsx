export default function RewardCard({ reward }) {
  return (
    <div style={{border:"1px solid #9B59B6", padding:"10px", margin:"5px", borderRadius:"5px"}}>
      <h3>{reward.name}</h3>
      <p>Points: {reward.points}</p>
      <button style={{padding:"5px 10px", background:"#9B59B6", color:"#fff", border:"none", borderRadius:"3px"}}>Claim</button>
    </div>
  );
}
