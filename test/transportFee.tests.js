describe('transportFee function' , function(){
    it('should return R20 if a person will be working morning shift' , function(){
        assert.equal(transportFee('morning'),'R20');
    });
    

    it('should return R10 if a person is working afternoon shift' , function(){
        assert.equal(transportFee('afternoon'),'R10');    
    });

    it('otherwise should return free is a person is working night shift or not working' , function(){
        assert.equal(transportFee('night'),'free');   
    });

});


