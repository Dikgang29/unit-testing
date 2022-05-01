describe('totalPhoneBill function' , function(){
    it("should return the total of R10.85 spent on sum  3 calls made and 3 sms' sent" , function(){
        assert.equal('R10.85',totalPhoneBill('call, sms, call, sms, sms,sms,call'));

    });

    it("should return the total R2.60 for the sum of  4 sms' sent" , function(){
        assert.equal('R2.60',totalPhoneBill('sms,sms, sms,sms'));

        
    });

});


