import { FA, Func } from './lang/base/FA'
import { and, or, clo } from './lang/base/RE'
import REtoNFA from './lang/tokenize/REtoNFA'

let begin = Symbol("1")

let ends = [Symbol("2"), Symbol("3"), Symbol("4")]

let fa = FA({
    begin,
    ends,
    func: [
        Func('a', begin, ends[0]),
        Func('b', ends[0], ends[1]),
        Func('c', ends[1], ends[2])]
})

console.log(fa)

let re = and(
    or('1','2','3'),
    clo('1',Infinity),
    '9'
)

console.log(re)

let nfa = REtoNFA(re)

console.log(nfa)