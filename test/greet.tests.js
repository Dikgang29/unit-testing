describe('greet function' , function(){
   
    it("should return 'Hello, Dikgang'  "  , function(){
        assert.equal('Hello, Dikgang',greet('Dikgang')); 
    });

    it("should return an Error message is a number is passed as a name"  , function(){
        assert.equal('ERROR, cannot pass a number as a name!',greet(10),'have to pass a name not a number');
    });
    it("should return an Error if there is an empty string"  , function(){
        assert.equal('ERROR, empty string',greet(''),'have to pass a name in the string for the function to work');  
    });

    it("should return an Error if nothing is passed as an argument in the function "  , function(){
        assert.equal('ERROR, have to pass a name as a string',greet(),'we would have undefined if nothing is passed in the function');  
    });


});




