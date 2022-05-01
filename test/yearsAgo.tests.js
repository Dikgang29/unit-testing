describe('yearsAgo function' , function(){
    it('should return 28 years as its the difference between the current year and 1994 ' , function(){
        assert.equal(yearsAgo(1994),28);   
    });
    it('should return 1 year  as its the difference between the current year and 2021' , function(){
        assert.equal(yearsAgo(2021),1);   
    });
    it('should return 12 years as it is the difference between the current year and 2010' , function(){
        assert.equal(yearsAgo(2010),12);
    });

});




