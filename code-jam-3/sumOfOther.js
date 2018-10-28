function sumOfOther (array){
    let mapArr = array.map(function(item){
        let sumAll = array.reduce(function(sum, current){
            return sum = sum + current;
        },0);
        return sumAll - item;
    });
    console.log(mapArr);
    };
sumOfOther([2, 3, 4, 1]);