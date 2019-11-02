const BenchMark = require('./speed-library')

/*
The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 
4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80
#Hint: See Fibonacci sequence

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:
*/
function perimeter(n) {
    //my solution
    let sequence = []
    for(let i = 0 ; i <= n ; i++){
        if(i > 1){
            let oke = sequence[i-1] + sequence[i-2] 
            sequence.push(oke)
        }else {
            sequence.push(1)
        }
    }
    let reducer = (accumulator, current) => accumulator + current
    return 4 * sequence.reduce(reducer)

    //best solution #1
    // let arr = [1, 1];
    // for(let i = 0; i < n - 1; i++) {
    //   arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    // }
    // return 4 * arr.reduce((sum, num) => sum + num, 0);

    //best solution #2
    //function fib(n)
//     var a = 1, b = 1, tmp;
//     while (n-- > 0) {
//         tmp = a;
//         a = b;
//         b += tmp;
//     }
//     return a

//     //hit another function 
//     return 4 * (fib(n + 2) -1)
}

function main (param){
    BenchMark(perimeter(param))
}

main(0) // 4
main(5) //80
main(7) //216
main(20) //114624
main(30) //14098308

//powered by : codewars.com
//https://www.codewars.com/kata/559a28007caad2ac4e000083/train/javascript