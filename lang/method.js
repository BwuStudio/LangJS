const { Cons, cdr, car, isNull, isPair, isCons } = require('./cons')
const { and, or, not } = require('./calcu')
const { isEnd, _END_ } = require('./list')

const map = (tree, func) => (
    isEnd(tree) ? _END_
        : not(isCons(tree)) ? func(tree) :
            Cons(
                map(cdr(tree), func),
                map(car(tree), func))
)


const forEach = (tree, func) => {
    isEnd(tree) ? _END_
        : not(isCons(tree)) ? func(tree)
            : Cons(
                forEach(cdr(tree), func),
                forEach(car(tree), func))
}

const filter = (tree, func) => (
    isEnd(tree) ? _END_
        : not(isCons(tree)) ?
            func(tree) ? tree
                : _END_
            : Cons(
                filter(cdr(tree), func),
                filter(car(tree), func))
)

const accumulate = (op, init, tree) => (
    isEnd(tree) ? init
        : not(isCons(tree)) ? tree
            : op(
                accumulate(op, init, cdr(tree)),
                accumulate(op, init, car(tree))
            )
)

module.exports = { map, forEach, filter, accumulate }