import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import Axios from 'axios'
import './SignupForm.css'


function SignupForm() {
    const [values,setvalues] = useState({
        name:'',
        age:0,
        email:'',
        password:''
    });
    const navigate = useNavigate();
    const [errors,setErrors] = useState({});
    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values))
        if(errors.name==="" && errors.age==="" && errors.email==="" && errors.password===""){
            Axios.post('http://localhost:3002/signup',values)
                .then(res => {
                    console.log(res.data);
                    if(res.data.success){
                        navigate('/success2');
                        setTimeout( () => {
                            navigate('/login');
                        },2000)
                        
                    }else{
                        alert(res.data.message);
                    }
                })
                .catch(err => console.log(err));
        }
    }
    const handleInput = (event) =>{
        setvalues(prev => ({...prev, [event.target.name]: [event.target.value]}));
        
    }
  return (
    <>
<div class="background-image01">
  <div class="content01">
    <div className='dv01'>
        <div className='dv02'>
            <h1>Sign-up</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='d-flex justify-content-left align-items-left mb-2'><strong>Name</strong></label>
                    <input type="text" placeholder='Enter name' name='name' onChange={handleInput} className='f01'/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                    
                </div>
                <div className='mb-3'>
                    <label className='d-flex justify-content-left align-items-left mb-2'><strong>Age</strong></label>
                    <input type="number" placeholder='Enter age' name='age' onChange={handleInput} className='f01'/>
                    {errors.age && <span className='text-danger'>{errors.age}</span>}
                    
                </div>
                <div className='mb-3'>
                    <label className='d-flex justify-content-left align-items-left mb-2'><strong>Email</strong></label>
                    <input type="email" placeholder='Enter email' onChange={handleInput} name='email' className='f01'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                
                <div className='mb-3'>
                    <label className='d-flex justify-content-left align-items-left mb-2'><strong>Password</strong></label>
                    <input type="password" placeholder='Enter password' name='password' onChange={handleInput} className='f01'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn01'><strong>Signup</strong></button>
                <p className='mt-3'>By signing up, You agree to our terms and conditions</p>
                <Link to='/login' className='btn01'><strong>Login</strong></Link>
            </form>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default SignupForm