import React,{useState,useEffect} from 'react'
import emailjs from 'emailjs-com'
import './Feedback.css'
import Axios from 'axios'
import { useLocation,useNavigate } from 'react-router-dom'


function Feedback() {
    const navigate = useNavigate();
    const location = useLocation();
    const modname = location.state.name;
    console.log("Value of modname is ",modname);
    const emailid = 'eventbridge1@gmail.com';
    const [values, setvalues] = useState({
        Username: modname,
        feedback: ''
      });
      function sendEmail(feed) {
        console.log("Inside email");
        const templateParams = {
          name: modname,
          feedback: feed,
          message: 'Thank you for using Eventbridge',
          to_email: emailid
        };
        console.log("inside email business");
        const emailParams = {
          service_id: 'service_rsu8u35',
          template_id: 'template_35d2fjd',
          user_id: 'mL2pXhDhu9PdfhtAE',
          template_params: templateParams,
          to_email: emailid
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
      const handleSubmit = (event) => {
        event.preventDefault();
        const feed = values.feedback;
        values.name=modname;
        console.log("feed is ",feed);
        console.log("before sending ",values)
        Axios.post('http://localhost:3002/dashboard/feedback', values)
           .then(res => {
               if(res.data === 'Success'){
                   console.log("inside feed is ",feed);
                   sendEmail(feed);
                    navigate('/success5')
                    setTimeout( () => {
                        navigate('/dashboard/upcomingevents',{state: {name:modname}});
                    },3000)
                   
               }
           })
           .catch((err) => console.log(err));
        
      };
      const handleInput = (event) =>{
        setvalues(prev => ({...prev, [event.target.name]: [event.target.value]}));
        
    }
    return (
    <>
    <div className="background-image">
      <div className="content">
        <div className="dv1">
          <div className="dv2">
            <h1 className="h1">Feedback Portal</h1>
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="d-flex justify-content-left align-items-left mb-2"><strong>Username</strong></label>
                <input type="text" name="name" value={modname} onChange={handleInput} className="f1" />
                
              </div>
              <div className="mb-3">
                <label className="d-flex justify-content-left align-items-left mb-2"><strong>Feedback</strong></label>
                <input type="text" name="feedback" placeholder="Enter your feedback" onChange={handleInput} className="f1" />
                
              </div>
              <button type="submit" className="btn1"><strong>Submit Feedback</strong></button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default Feedback