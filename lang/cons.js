const _CONS_ = Symbol('cons')

/**
 * 为 cons 添加标识
 * @param {func} a 需要被添加标识的函数
 * @returns {cons}
 */
const _addName = (a) => {
    const b = a
    b[_CONS_] = true
    return b
}

/**
 * 判断是否为 cons
 * @param {*} a 
 * @returns {boolen} 
 */
const isCons = (a) => (
    typeof a !== 'function' ? false
        : a[_CONS_] ? true
            : false
)

/**
 * 构造一个 cons
 * @param {*} a 
 * @param {*} b
 * @returns {cons} (a,b) 
 */
const Cons = (a, b) => (
    _addName((m) => (m(a, b))) 
)


/**
 * 获取 cons 第一个元素
 * @param {cons} cons
 * @returns {*} 
 */
const cdr = (cons) => (
    isCons(cons) ? cons((a, b) => a)
        : null
)


/**
 * 获取 cons 第二个元素
 * @param {cons} cons
 * @returns {*} 
 */
const car = (cons) => (
    isCons(cons) ? cons((a, b) => b)
        : null
)


/**
 * 判断值是否有为空
 * @param {*} a
 * @returns {boolen} 
 */
const isNull = (a) => (
    !a && a !== 0 && a !== ''
)

/**
 * 判断 cons 是否有两个值
 * @param {cons} cons
 * @returns {boolen} 
 */
const isPair = (a) => (
    !isNull(cdr(a)) && !isNull(car(a))
)


module.exports = { Cons, cdr, car, isNull, isPair, isCons }