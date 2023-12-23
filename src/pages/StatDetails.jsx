import { useEffect, useState } from "react"
import { StatService } from "../services/StatService"

import '../style/pages/StatDetails.scss'
const StatDetails = () => {

const [stat, setStat] = useState({})

      useEffect(()=>{
        const params = new URLSearchParams(window.location.search) 
        let id = params.get('statId') 
        console.log(id)
        const currStat = StatService.getById(id)
        setStat(currStat)
      },[])

    return(
        <section className="stat-details">
            {JSON.stringify(stat)}
        </section>
    )
}

export default StatDetails