var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];


describe('findItemsOver function' , function(){
    it('should an array of 3 objects that has qty over 5 based on the threshold ' , function(){
        

        assert.deepEqual([{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27}],findItemsOver(itemList,5));
    });

    it('should an array of 2 objects that has qty over 20 based on the threshold ' , function(){
        

        assert.deepEqual([{name : 'pears', qty : 37},{name : 'bananas', qty : 27}],findItemsOver(itemList,20));
    });

    it('should an empty array if the threshold is bigger the qty elements in each object  ' , function(){
        

        assert.deepEqual([],findItemsOver(itemList,40));
    });

})