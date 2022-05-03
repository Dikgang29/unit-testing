describe('greet function' , function(){
   
    it("should return 'Hello, Dikgang'  "  , function(){
        assert.equal('Hello, Dikgang',greet('Dikgang')); 
    });

    it("should return an Error message is a number is passed as a name"  , function(){
        assert.equal('Error, cannot pass a number as a name!',greet(10),'would work for both positive and negative numbers');
    });
    it("should return an Error if there is an empty string"  , function(){
        assert.equal('Error, empty string',greet(''));  
    });

    it("should return an Error if nothing is passed as an argument in the function "  , function(){
        assert.equal('Error, have to pass a name as a string',greet(),'we would have undefined fif nothing is passed in the function');  
    });


});




