describe('fromWhere function ' , function(){
    it('should return Bellville if a car registration starts with "CY"' , function(){
        assert.equal('Bellville',fromWhere('CY'));

        
    });
    it('should return Paarl if a car registration starts with "CJ"' , function(){
        assert.equal('Paarl',fromWhere('CJ'));   
    });

    it('should return  Cape Town if a car registration starts with "CA"' , function(){
        assert.equal('Cape Town',fromWhere('CA'));   
    });

    it('otherwise should return  "Some other place!"' , function(){
        assert.equal('Some other place!',fromWhere('CD'));

         });

});










