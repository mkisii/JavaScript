'use strict';

// const now = 2022;
// //  function declaration
// function calAge (yearOfbirth) {
    
//     return now - yearOfbirth;
    
// }
// console.log(calAge(2001));


// // function expression
// const calAge2 = function (yearOfbirth){
//     return now - yearOfbirth;
// }

// console.log(calAge2(1993))


//  Function

const calcAverage = function (scores)   {
    return (scores);
}

const avgDolphis = calcAverage((44+23+71/3));
const avgKoalas = calcAverage((65+54+49/3));

const checkWinner = function (avgDolphis, avgKoalas) {
    if (avgDolphis > avgKoalas){
        console.log(`Dolphins win ${avgDolphis} vs ${avgKoalas}`);
    }else{
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphis}`);
    }
}

console.log(checkWinner(avgDolphis, avgKoalas));
