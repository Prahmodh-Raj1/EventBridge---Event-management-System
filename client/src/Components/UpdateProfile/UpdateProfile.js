import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Axios from 'axios';
import ValidationEvent from './UpdateValidation';
import './UpdateProfile.css'
import emailjs from 'emailjs-com'

function UpdateProfile() {
    const location = useLocation();
    const modname = location.state.name;
    const [upvalues,setupvalues] = useState([]);

    const [values,setvalues] = useState({
        id: 0,
        name: '',
        age: 0,
        email:'',
        password:'',
        prevname: modname
    });
    function sendemail(name,age,email) {
        const templateParams = {
          name: name,
          age: age,
          email: email,
          message: 'Thank you for using Eventbridge',
          to_email: email
        };
      
        const emailParams = {
          service_id: 'service_rsu8u35',
          template_id: 'template_qwqe0ln',
          user_id: 'mL2pXhDhu9PdfhtAE',
          template_params: templateParams,
          to_email: email
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
    const navigate = useNavigate();
    const [errors,setErrors] = useState({});
    useEffect(() => {
        Axios.get("http://localhost:3002/dashboard/updateprofile/fetch", {
      params: { name: modname }
    })
      .then((response) => {
        const chvalues=[
            response.data[0].id,
            response.data[0].Name,
            response.data[0].Age,
            response.data[0].Email,
            response.data[0].password
        ]

        console.log(response.data);
        console.log("changevalues= ",chvalues);
        setupvalues(chvalues);
        console.log("useffect ",modname);
        console.log("Value received");
        console.log("Upvalues: ",upvalues[0],' ',upvalues[1],' ',upvalues[2],' ',upvalues[3]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(ValidationEvent(values));
        
        console.log("This is ",errors.id,errors.name,errors.age,errors.email,errors.password);
        if(errors.name === "" && errors.email === ""){
            console.log("Previous name is ",values.prevname);
            console.log("Values are ",values.email," Age: ",values.age);
            Axios.post("http://localhost:3002/dashboard/updateprofile/update",values)
            .then(res => {
                console.log("Result's data is ",res.data);
                const finalname = values.name;
                if(res.data === "Success"){
                    const name = upvalues[1];
                    const age = upvalues[2];
                    const email = values.email;
                    sendemail(name,age,email);
                    navigate('/success7');
            setTimeout( () => {
              navigate('/dashboard/upcomingevents',{state: {email: email}});
            },2000)
                }else{
                    alert("Update not done");
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
            <h1>Update Profile</h1>
                <div className='mb-3'>
                    <label className='d-flex justify-content-left align-items-left mb-2'><strong className = "str1">User Id</strong></label>
                    <input type="text" placeholder='' name='id' value={upvalues[0]} onChange={handleInput} className='f03'/>
                    {errors.id && <span className='text-danger'>{errors.id}</span>}
                    
                </div>
                <div className='mb-3'>
                    <label className='d-flex justify-content-left align-items-left mb-2'><strong className = "str1">Name</strong></label>
                    <input type="text" placeholder={upvalues[1]} name='name' onChange={handleInput} className='f03'/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                    
                </div>
                <div className='mb-3'>
                    <label className='d-flex justify-content-left align-items-left mb-2'><strong className = "str1">User Email</strong></label>
                    <input type="text" placeholder={upvalues[3]} name='email' onChange={handleInput} className='f03'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                    
                </div>
                
                
                
                <div className='mb-3'>
                    <label className='d-flex justify-content-left align-items-left mb-2'><strong className = "str1">Age</strong></label>
                    <input type="text" placeholder={upvalues[2]} name='age' onChange={handleInput} className='f03'/>
                    {errors.age && <span className='text-danger'>{errors.age}</span>}
                    
                </div>
                <div className='mb-3'>
                    <label className='d-flex justify-content-left align-items-left mb-2'><strong className = "str1">Password</strong></label>
                    <input type="text" placeholder='Password' name='password' value={upvalues[4]} onChange={handleInput} className='f03'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                    
                </div>
                <button type='submit' className='btn03'><strong>Update</strong></button>
                
            </form>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default UpdateProfile