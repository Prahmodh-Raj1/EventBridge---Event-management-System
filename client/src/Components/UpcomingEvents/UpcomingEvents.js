import React, {useState, useEffect} from 'react'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import Axios from 'axios';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './UpcomingEvents.css';



function UpcomingEvents() {
  const navigate = useNavigate();
  const [values,setValues] = useState([]);
  const location = useLocation();
  const modname = location.state.name;
  const chname= modname;
  
  console.log("This is the name ",modname);
  useEffect(() => {
    Axios.get('http://localhost:3002/dashboard/fetch').then((response) => {
      setValues(response.data);
      console.log("Values received");
    })
  }, []);
  /*function sendvalues(event){
    const eventid = event;
    const tempname = modname;
    navigate('/dashboard/eventregister',{state: {name: tempname, eventid: eventid}});
  }*/
  return (
    <div>
      <DashboardNavbar name={modname}/>
      <div>
        <h2 className="font-weight-bold text-dark pt-3 pb-2 border-bottom border-4 border-primary mb-5">All Upcoming Events</h2>
        <div className="card-columns">
          {values.map((item) => {
            return (
              <div className="card" key={item.EVENTID}>
                <div className="card-body">
                  <p className = "message"><h5 className="word1">{item.TITLE}</h5></p>
                  <p className="card-text"><span className="heads"> Venue: </span>{item.VENUE}</p>
                  <p className="card-text"><span className="heads"> Date:</span> {item.DATE}</p>
                  <p className="card-text"><span className="heads"> Timings:</span> {item.TIMINGS}</p>
                  <p className="card-text"><span className="heads"> Accommodation Availability:</span> {item.ACCOMMODATION}</p>
                  <p className="card-text"><span className="heads"> Type of Event:</span> {item.TYPE}</p>
                </div>
                <div className="card-footer">
                  <button className="glow-on-hover" onClick={() => navigate('/dashboard/eventregister', {state: {name: chname,eventid: item.EVENTID}})}>Attend</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvents