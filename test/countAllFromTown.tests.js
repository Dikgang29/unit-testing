describe('countAllFromTown function' , function(){
    it('should return a count of 3 from a string that has registrations that includes "CL"' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);        
    });

    it('should return a count of 1 from a string that has registrations that include "CJ" ' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CJ 345, CL 456,CL 341','CJ'),1);
   
    });
    it('should return a count of 0 if none of the registrations in a string do not include "CY"' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CL 456,CL 341','CJ'),0);

        
    });


});




