import { useEffect, useState } from "react";
import { StatService } from "../services/StatService.js";
import StatPreview from "./StatPreview.jsx";

const StatList = () => {
    const [stats, setStats] = useState([])

    useEffect(()=>{
        const tempStats = StatService.query()
        setStats(tempStats)
    },[])
  
      
    return (
        <section className="stat-list">
        {stats.map(stat =>  <StatPreview stat={stat}/>)}
      </section>
    )
}

export default StatList