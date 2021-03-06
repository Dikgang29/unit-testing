  var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];

    var itemList3 = [
        {name : 'apples', qty : 40},
        {name : 'pears', qty : 20},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 37}
    ];

    var itemList2 = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 19},
        {name : 'bananas', qty : 17},
        {name : 'apples', qty : 3},
    ];

    describe('findItemsOver20 function' , function(){
        it('should return an array with the results of 2 objects that have the qty over 20' , function(){
            //assert.equal(2,2);
    
            assert.deepEqual([{name : 'pears', qty : 37},{name : 'bananas', qty : 27}],findItemsOver20(itemList));
        });

        it('should return an array with the results of 3 objects that have qty over 20' , function(){
            //assert.equal(2,2);
    
            assert.deepEqual([{name : 'apples', qty : 40}, {name : 'bananas', qty : 23},{name : 'apples', qty : 37}],findItemsOver20(itemList3));
        });

        it('should return an empty array, there is no object with a qty over 20' , function(){
            //assert.equal(2,2);
    
            assert.deepEqual([],findItemsOver20(itemList2));
        });
    
    })


// describe('The findItemsOver20 function ' , function(){
//     it('should return 2 items that have a quantity or more than 20' , function(){
//         assert.equal(({name : 'pears', qty : 37},{name : 'bananas', qty : 27}),findItemsOver20(itemList));

//     });

// });