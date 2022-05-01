describe('countRegNumber function' , function(){
    it('should return count of 4 registration numbers in a string' , function(){
        assert.equal(countRegNumber('CY 246, CVY 421 L, FK 50 GP,CA 182736'),4);
    });
    it('should return count of 2 registration numbers in a string ' , function(){
        assert.equal(countRegNumber('CY 246, CVY 421 L'),2);  
    });

    it('should return  a count of 1 registartion number in a string  ' , function(){
        assert.equal(countRegNumber('FK 50 GP'),1);  
    });
});

