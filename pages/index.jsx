export default function Home() {
  return (
    <div style={{textAlign:"center", padding:"50px", fontFamily:"sans-serif"}}>
      <img src="/logo.png" alt="GSF Logo" width={100} />
      <h1>Welcome to GSF</h1>
      <p>Digital City Ecosystem – Education, Rewards, AI City & Disaster Autopilot</p>
      <a href="/dashboard" style={{padding:"10px 20px", background:"#00FFFF", color:"#000", borderRadius:"5px"}}>
        Enter Dashboard
      </a>
    </div>
  )
}
