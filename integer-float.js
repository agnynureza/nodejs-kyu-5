/*
 Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

#Examples:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]

 */


const BenchMark = require('./speed-library')

function listSquared(m, n) {

    //my solution 
    // let i = m
    // let result = []
    // while(i<=n){
    //   let div = []
    //   let sum = []
    //   let total = 0
    //   for(let j = 1 ; j <= i ; j++ ){
    //     if(i%j == 0 ) div.push(j) 
    //   }
    //   for(let j = 0 ; j < div.length ; j++){
    //     sum.push(Math.pow(div[j],2))
    //   }
    //   for(let j = 0 ; j < sum.length ; j++){
    //     total += sum[j]
    //   }
    //   let ok = Math.sqrt(total)
    //   if(ok%1 == 0) result.push([i,total])
    //   i++
    // }
    // return result

    //best solution #1
    var arr = [];
    for (var i = m; i <= n; i++){
      var temp = 0;
      for (var j = 1; j <= i; j++) {
        if ( i % j == 0) temp += j*j;  
      };
      if ( Math.sqrt(temp) % 1 == 0) arr.push([i, temp]);
    };
    return arr
}

function main(m,n){
    BenchMark(listSquared(m,n))
}

main(1,250)
main(42, 250)
main(250,500)
main(500,750)
main(1,100000)