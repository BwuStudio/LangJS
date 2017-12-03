import { BinNode } from '../base/2tree'

const
    _RE_ = Symbol('re'),
    AND = Symbol('and'),
    OR = Symbol('or'),
    CLO = Symbol('closure')

/**
 * 生成一个正则 RE
 * @param {string} name('and'|'or'|'clo') 
 * @param {RE} left  
 * @param {RE|int} right 如果是闭包就是 int 
 * @returns {RE}
 */
const RE = (name, left, right) => {
    let re = BinNode(
        name === 'and'
            ? AND
            : name === 'or'
                ? OR
                : name === 'clo'
                    ? CLO
                    : null,
        left,
        right)

    re[_RE_] = true
    return re
}

/**
 * and(a,b) -> ab
 * @param {RE} a
 * @param {RE} b
 */
const and = (...arr) => (
    arr.length == 2
        ? RE('and', arr[0], arr[1])
        : RE('and', arr.shift(), and(...arr))
)

/**
 * or(a,b) -> a|b
 * @param {RE} a 
 * @param {RE} b 
 */
const or = (...arr) => (
    arr.length <= 2
        ? RE('or', arr[0], arr[1])
        : RE('or', arr.pop(), or(...arr))
)


/**
 * clo(a,n) -> a*n
 * @param {RE} a 
 * @param {int} n 
 */
const clo = (a, n = Infinity) =>
    (n === Infinity
        ? RE('clo', a, n)
        : n === 2
            ? and(a, a)
            : n === 1
                ? a
                : and(a, clo(n - 1))
    )

export {
    AND, OR, CLO, RE,
    and, or, clo, _RE_
}