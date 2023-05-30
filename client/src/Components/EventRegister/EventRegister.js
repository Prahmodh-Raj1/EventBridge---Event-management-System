import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
//import Validation from './SignupValidation'
import Axios from 'axios';
//import validation from './LoginValidation';
import ValidationEvent from './RegisterValidation';
import { useLocation } from 'react-router-dom';
import './EventRegister.css';
import emailjs from 'emailjs-com'

function EventRegister() {
    const location = useLocation();
    const eveid = location.state.eventid;
    const chname = location.state.name;
    const [values,setvalues] = useState({
        eventid:eveid,
        name:'',
        email:'',
        accommodation:'',
        age:''
    })
    function sendEmail(eventData, recipemail, recipname) {
        const templateParams = {
          name: recipname,
          eventid: eventData.EVENTID,
          title: eventData.TITLE,
          orgname: eventData.ORGNAME,
          venue: eventData.VENUE,
          date: eventData.DATE,
          timings: eventData.TIMINGS,
          orgemail: eventData.ORGEMAIL,
          message: 'Thank you for registering!',
          to_email: recipemail
        };
      
        const emailParams = {
          service_id: 'service_wimtjw7',
          template_id: 'template_mb85zx1',
          user_id: '6LPkf5o1DnbiXrMSG',
          template_params: templateParams,
          to_email: recipemail
        };
      
        emailjs
          .send(
            emailParams.service_id,
            emailParams.template_id,
            emailParams.template_params,
            emailParams.user_id,
            emailParams.to_email
          )
          .then((result) => {
            console.log('Email sent successfully:', result.text);
          })
          .catch((error) => {
            console.error('Error sending email:', error.text);
          });
      }
   console.log("Eventid = ",eveid);
   console.log("Obtained name= ",chname);
    const navigate = useNavigate();
    const [errors,setErrors] = useState({});
    //console.log("Obtained eventid: ",values.eventid);
    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(ValidationEvent(values));
        
        console.log("This is ",errors.eventid,errors.name,errors.email,errors.accommodation,errors.age);
        if(errors.name === "" && errors.email === ""){
            const chevent = values.eventid;
            const recipemail = values.email;
            const recipname = values.name;
            Axios.get(`http://localhost:3002/dashboard/eventdetails/${chevent}`)
            .then((response1)=>{
                console.log("First hold ",response1.data);
                const emaildata = response1.data[0];
                console.log("recip name & email ",recipemail,recipname)
                sendEmail(emaildata,recipemail,recipname);
            }).catch((err)=> console.log(err));
            console.log("Values are ",values.email," Age: ",values.age);
            Axios.post("http://localhost:3002/dashboard/eventregister",values)
            .then(res => {
                console.log("Result's data is ",res.data);
                if(res.data === "Success"){
                    navigate('/success3');
                    setTimeout( () => {
                        navigate('/dashboard/upcomingevents',{state: {name: chname}});
                    },2000)
                    
                }else{
                    alert("Invalid credentials");
                }
            })
            .catch(err=> console.log(err));
            
        }
    }
    const handleInput = (event) =>{
        setvalues(prev => ({...prev, [event.target.name]: [event.target.value]}));
        
    }
  return (
    <>
    <div className='background-image03'>
        <div className='content03'>
    <div className='dv01'>
        <div className='dv13'>
            
            <form action="" onSubmit={handleSubmit}>
                <h2>Event Registration</h2>
                <div className='mb-3'>
                    <label className='d-flex justify-content-left align-items-left mb-2'><strong>EventID</strong></label>
                    <input type="text" placeholder='' name='eventid' value={eveid} onChange={handleInput} className='f03'/>
                    {errors.eventid && <span className='text-danger'>{errors.eventid}</span>}
                    
                </div>
                <div className='mb-3'>
                    <label className='d-flex justify-content-left align-items-left mb-2'><strong>Attendee Name</strong></label>
                    <input type="text" placeholder='Enter name' name='name' onChange={handleInput} className='f03'/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                    
                </div>
                <div className='mb-3'>
                    <label className='d-flex justify-content-left align-items-left mb-2'><strong>Attendee Email</strong></label>
                    <input type="text" placeholder='Enter email' name='email' onChange={handleInput} className='f03'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                    
                </div>
                
                
                <div className='mb-3'>
                    <label className='d-flex justify-content-left align-items-left mb-2'><strong>Accommodation Required</strong></label>
                    <input type="text" placeholder='Accommodation Requirement' name='accommodation' onChange={handleInput} className='f03'/>
                    {errors.accommodation && <span className='text-danger'>{errors.accommodation}</span>}
                    
                </div>
                <div className='mb-3'>
                    <label className='d-flex justify-content-left align-items-left mb-2'><strong>Attendee Age</strong></label>
                    <input type="text" placeholder='Enter age' name='age' onChange={handleInput} className='f03'/>
                    {errors.age && <span className='text-danger'>{errors.age}</span>}
                    
                </div>
                <button type='submit' className='btn1'><strong>Register</strong></button>
                
            </form>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default EventRegister