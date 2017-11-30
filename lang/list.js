const { Cons, cdr, car } = require('./cons')
const _END_ = Symbol('end')

/**
 * 判断是不是 list 的尾部
 * @param {*} m
 * @returns {boolen} 
 */
const isEnd = (m) => (
    m === _END_
)

/**
 * 创建一个 list
 * @param {...*} arg 
 * @returns {list} (...arg)
 */
const List = (...arg) => (
    arg[0] ? Cons(arg[0], List(...arg.slice(1)))
        : _END_
)

/**
 * 返回 list 第一个元素
 * @param {list} list 
 * @returns {*}
 */
const getFirst = (list) => (cdr(list))

/**
 * 返回 list 最后一个元素
 * @param {list} list 
 * @returns {*}
 */
const getLast = (list) => (
    isEnd(car(list)) ? cdr(list)
        : getLast(car(list))
)

/**
 * 从 list 中删除最后一个元素 如果是空集(_END_) 返回空集
 * @param {list} list 
 * @returns {list} 取出最后一个元素后的新 list
 */
const pop = (list) => (
    isEnd(list) ? _END_
        : isEnd(car(list)) ? _END_
            : Cons(cdr(list), pop(car(list)))
)

/**
 * 向一个 list 末尾添加一个元素
 * @param {list} list 
 * @param {*} value 
 * @returns {list} 添加一个元素后的新 list
 */
const push = (list, value) => (
    isEnd(list) ? Cons(value, _END_)
        : Cons(cdr(list), push(car(list),value))
)

/**
 * 从 list 中删除第一个元素 如果是空集(_END_) 返回空集
 * @param {list} list 
 * @returns {list}
 */
const shift = (list) => (
    isEnd(list) ? _END_ :
        isEnd(car(list)) ? _END_
            : Cons(cdr(car(list)), shift(car(list)))
)

/**
 * 向一个 list 首部添加一个元素
 * @param {*} list 
 * @param {*} value 
 * @returns {list}
 */
const unshift = (list, value) => (
    isEnd(list) ? Cons(value, list)
        : Cons(value, unshift(car(list), cdr(list)))
)

module.exports = { List, isEnd, _END_, push, pop, shift, unshift, getFirst, getLast }
