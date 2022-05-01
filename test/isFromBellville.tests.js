describe('isFromBellville function' , function(){
    it('should return true the registration starts with "CY"' , function(){
        assert.equal(true,isFromBellville('CY 246'));
    });
    it('should false if the registration does not start with "CY"' , function(){
        assert.equal(false,isFromBellville('CJ 246'));   
    });
    


});



