describe('greet function' , function(){
   
    it("should return 'Hello, Dikgang'  "  , function(){
        assert.equal('Hello, Dikgang',greet('Dikgang')); 
    });

    it("should return 'Hello, Summer'"  , function(){
        assert.equal('Hello, Summer',greet('Summer'));
    });
    it("should return undefined"  , function(){
        assert.equal('Hello, undefined',greet(), "this is undefined because no argument is passed");  
    });

    

});




