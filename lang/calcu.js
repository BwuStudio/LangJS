
/**
 * function "+"
 * @param {number} a 
 * @param {number} b
 * @returns {number}
 */
const add = (a, b) => (
    a + b
)

/**
 * function "-"
 * @param {number} a 
 * @param {number} b
 * @returns {number}
 */
const sub = (a, b) => (
    a - b
)

/**
 * function "/"
 * @param {number} a 
 * @param {number} b
 * @returns {number}
 */
const div = (a, b) => (
    a / b
)

/**
 * function "*"
 * @param {number} a 
 * @param {number} b
 * @returns {number}
 */
const mul = (a, b) => (
    a * b
)

/**
 * function "%"
 * @param {number} a 
 * @param {number} b
 * @returns {number}
 */
const rem = (a, b) => (
    a % b
)

/**
 * function "&&"
 * @param {*} a 
 * @param {*} b
 * @returns {boolen}
 */
const and = (a, b) => (!!(a && b))

/**
 * function "||"
 * @param {*} a 
 * @param {*} b
 * @returns {boolen}
 */
const or = (a, b) => (!!(a || b))


/**
 * function "!"
 * @param {*} a
 * @returns {boolen}
 */
const not = (a) => (!a)


/**
 * function "==="
 * @param {*} a
 * @param {*} b
 * @returns {boolen}
 */
const isEq = (a, b) => (a === b)


module.exports = { add, sub, div, mul, rem, and, or, not, isEq }