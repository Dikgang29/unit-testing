describe('regCheck' , function(){
    it('should return true if the string ends with "L"' , function(){
        assert.equal(true,regCheck('CVY 421 L','L'));   
    });

    it('should return true if the string ends with "GP"' , function(){
        assert.equal(true,regCheck('FR 421 GP','GP'));  
    });

    it('otherwise should return false if the stringg does not end with "GP"' , function(){
        assert.equal(false,regCheck('CY 245','GP')); 
    });

});

