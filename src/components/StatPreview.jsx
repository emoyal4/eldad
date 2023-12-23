import {  Link } from "react-router-dom";

const StatPreview = ({stat}) => {
    
    
    return (
        <div className="stat-preview" >
          <img className="stat-image" src={stat.imageUrl}/>
          <div className="stat-content">

          <div className="top-line">
            <div className="stat-name">{stat.name}</div>
            <div className="stat-time">{stat.createdAt}</div>
            <div className="stat-code">{stat.code}</div>
            <div className="stat-status">{stat.isOnline ? 'Online' : 'Offline'}</div>
          </div>
          <div className="bottom-line">
            <div className="stat-voltage">
              V
              {stat.voltage}</div>
            <div className="stat-resistance">
              ℧
              {stat.resistance}</div>
            <div className="stat-cycle">
              <i className="material-icons">schedule</i>
              {/* {JSON.stringify(stat.cycle)} */}
              </div>
              <div className="stat-temperature">
              <i className="material-icons">temperature</i>
              {stat.temperature}</div>
              <div className="stat-humidity">
              <i className="material-icons">water_drop</i>
              {stat.humidity}</div>
              <div className="stat-ph">
           pH
              {stat.pH}</div>
              <div className="stat-ec">
             ec
              {stat.ec}</div>
          </div>
          </div>
          <Link to={`/details?statId=${stat._id}`}>Move to</Link>
        </div>
    )
}

export default StatPreview