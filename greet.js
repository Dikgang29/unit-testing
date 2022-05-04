function greet(firstName){
    if(firstName=='') return 'ERROR, empty string';
    else if( firstName>=0 || firstName<=0) return 'ERROR, cannot pass a number as a name!';
    else if(firstName == undefined) return 'ERROR, have to pass a name as a string';
    
    return 'Hello, '+firstName;
  }