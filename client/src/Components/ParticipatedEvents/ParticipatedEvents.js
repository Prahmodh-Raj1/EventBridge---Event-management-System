import React,{useState,useEffect} from 'react'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import Axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './ParticipatedEvents.css'

function ParticipatedEvents() {
  const navigate = useNavigate();
  const [values,setValues] = useState([]);
  const location = useLocation();
  const modname = location.state.name;
  console.log("This is the name ",modname);

  useEffect(() => {
    Axios.get("http://localhost:3002/dashboard/participatedevents", {
      params: { name: modname }
    })
      .then((response) => {
        setValues(response.data);
        console.log("useffect ",modname);
        console.log("Value received");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleClick = (event) =>{
    navigate('/success6');
    setTimeout( () => {
      navigate('/dashboard/participatedevents',{state: {name: modname}});
    },1500)
  }

  return (
    <div>
      <DashboardNavbar name={modname}/>
      <div>
        <h2 className="font-weight-bold text-dark pt-3 pb-2 border-bottom border-4 border-primary mb-5">Events participated by {modname}</h2>
        <div className="card-columns">
          {values.map((item) => {
            return (
              <div className="card" key={item.eventid}>
                <div className="card-body">
                  <p className = "message"> <h5 className="word1">{item.title}</h5></p>
                  <p className="card-text"><span className="heads">Venue: </span>{item.venue}</p>
                  <p className="card-text"><span className="heads">Date: </span>{item.date}</p>
                  <p className="card-text"><span className="heads">Timings: </span>{item.timings}</p>
                  <p className="card-text"><span className="heads">Accommodation Availability: </span>{item.accommodation}</p>
                  <p className="card-text"><span className="heads">Type of event: </span>{item.type}</p>
                </div>

                <div className="card-footer">
                <button className="glow-on-hover" onClick={(event) => {handleClick(event,item.EVENTID)}}>Book Accomodation</button>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default ParticipatedEvents;