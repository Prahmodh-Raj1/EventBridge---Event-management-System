function Validation(values){
    let error={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
     
    if(values.name === ""){
      error.name="Name should not be  empty"
    }else{
      error.name=""
    }

    if(values.age === ""){
        error.age="Age should not be empty"
    }else{
        error.age=""
    }
    if(values.email === ""){
      error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
      error.email="Email doens't match"
    }else{
      error.email=""
    }
    error.password="";
    error.age="";
    
  
    return error;
}
export default Validation;
