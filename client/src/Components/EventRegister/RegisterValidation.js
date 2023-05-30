function ValidationEvent(values){
    let error={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if(values.eventid === ""){
        error.eventid="Eventid should not be  empty"
      }else{
        error.eventid=""
      }
      
    if(values.name === ""){
      error.name="Name should not be  empty"
    }else{
      error.name=""
    }
    if(values.email === ""){
        error.email="Email should not be  empty"
      }else{
        error.email=""
      }

    if(values.accommodation === ""){
        error.accommodation="Fill accommodation Requirement"
    }else{
        error.accommodation=""
    }
    
    if(values.age === ""){
      error.age = "Age should not be empty"
    }
    else{
      error.age=""
    }
      error.eventid="";
      error.name="";
      error.email="";
      //error.date="";
      error.accommodation="";
      error.age="";
    
    
    
  
    return error;
}
export default ValidationEvent;
