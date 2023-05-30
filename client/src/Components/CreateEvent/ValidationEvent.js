function ValidationEvent(values){
    let error={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if(values.title === ""){
        error.title="Name should not be  empty"
      }else{
        error.title=""
      }
      
    if(values.name === ""){
      error.name="Name should not be  empty"
    }else{
      error.name=""
    }
    if(values.venue === ""){
        error.venue="Venue should not be  empty"
      }else{
        error.venue=""
      }

    if(values.data === ""){
        error.date="Date should not be empty"
    }else{
        error.date=""
    }
    
    if(values.email === ""){
      error.email = "Email should not be empty"
    }
    else{
      error.email=""
    }
      error.title="";
      error.name="";
      error.venue="";
      error.date="";
      error.accommodation="";
      error.type="";
    
    
    
  
    return error;
}
export default ValidationEvent;
