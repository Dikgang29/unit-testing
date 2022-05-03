function greet(firstName){
    if(firstName=='') return 'Error, empty string';
    else if( firstName>=0 || firstName<=0) return 'Error, cannot pass a number as a name!';
    else if(firstName == undefined) return 'Error, have to pass a name as a string';
    
    return 'Hello, '+firstName;
  }