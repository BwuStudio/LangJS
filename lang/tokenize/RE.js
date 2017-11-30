import { BinNode, R, L, V } from '../base/2tree'

const
    RE = Symbol('RE'),
    AND = Symbol('and'),
    OR = Symbol('or'),
    CLO = Symbol('closure')

const RE = (name, left, right) => {
    let re = BinNode(name, left, right)
    re[RE] = true
    return re
}

/**
 * and(a,b) -> ab
 * @param {RE} a
 * @param {RE} b
 */
const and = (a, b) => RE(AND, a, b)

/**
 * or(a,b) -> a|b
 * @param {RE} a 
 * @param {RE} b 
 */
const or = (a, b) => RE(OR, a, b)


/**
 * clo(a,n) -> a*n
 * @param {RE} a 
 * @param {int} n 
 */
const clo = (a, b) => RE(CLO, a, n)

export {
    AND, OR, CLO,
    and, or, clo
}