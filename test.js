const { Cons, cdr, car, isNull, isPair } = require('./scheme/cons')
const { List,push,pop,unshift,shift ,getFirst,getLast} = require('./scheme/list')
const { map, forEach, filter, accumulate } = require('./scheme/method')
const { add, sub, div, mul, rem , isEq } = require('./scheme/calcu')

// console.log(
//     accumulate(
//         add,
//         0,
//         filter(
//             List(
//                 List(1, 2, 3, 4),
//                 List(5, 6, 7, 8),
//                 List(5, 6, 7, 8)),
//             a => (isEq(rem(a,2),0))))
// )

forEach(
    unshift(List(1,2,3),getLast(List(1,2,3))),
    (a)=>{console.log(a)}
)


console.log("done")