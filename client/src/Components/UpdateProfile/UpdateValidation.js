function ValidationEvent(values){
    let error={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if(values.id === ""){
        error.id="Profile id should not be  empty"
      }else{
        error.id=""
      }
      
    if(values.name === ""){
      error.name="Name should not be  empty"
    }else{
      error.name=""
    }
    if(values.age === ""){
        error.age="Age should not be empty";
    }else{
        error.age="";
    }
    if(values.email === ""){
        error.email="Email should not be  empty"
      }else{
        error.email=""
      }

    
    if(values.password === ""){
      error.password = "Password should not be empty"
    }
    else{
      error.password=""
    }
      error.id="";
      error.name="";
      error.email="";
      //error.date="";
      error.password="";
      error.age="";
      error.prevname="";
    
    
    
  
    return error;
}
export default ValidationEvent;
