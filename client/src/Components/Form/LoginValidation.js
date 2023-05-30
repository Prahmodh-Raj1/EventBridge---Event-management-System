function validation(values){
    let error={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
     
   
  
    
    if(values.email === ""){
      error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
      error.email="Email doens't match"
    }else{
      error.email=""
    }
    error.password="";
  
    
  
    return error;
  }
  export default validation;
  