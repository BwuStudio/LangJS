import {FA,Func} from './lang/base/FA'

let begin = Symbol("1")

let ends = [Symbol("2"),Symbol("3"),Symbol("4")]

let fa = FA({
    begin,
    ends,
    func:[
        Func('a',begin,ends[0]),
        Func('b',ends[0],ends[1]),
        Func('c',ends[1],ends[2])]
})

console.log(fa)
