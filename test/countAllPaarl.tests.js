describe('countAllPaarl function' , function(){
    it('should return the count of 2 of registration numbers that starts with "CY"' , function(){
        assert.equal(countAllPaarl('CJ 345 123, CK 345, CJ 123'),2);  
    });

    it('should return a count of 1 of a registartion that starts with "CY"' , function(){
        assert.equal(countAllPaarl('CJ 345 123'),1);   
    });

    it('should return a count of 0 if none of the registartins starts with "CY"' , function(){
        assert.equal(countAllPaarl('CK 345 123, CK 345, CD 123'),0); 
    });

});


