const { Cons, cdr, car } = require('./cons')
const { list } = require('./scheme/list')

const _BLANK_ = Symbol('blank')
const _NODE_ = Symbol('node')

/**
 * 为二叉树节点添加标识
 * @param {list} a 需要被标识的 list
 * @returns {node}
 */
const _addName = (a) => {
    const b = a
    b[_NODE_] = true
    return b
}

/**
 * 创建二叉树节点
 * @param {*} value 节点的值
 * @param {node} [left=_BLANK_] 节点左子树 
 * @param {node} [right=_BLANK_] 节点右子树
 * @returns {node} 新二叉树节点
 */
const Node = (value, left, right) => (
    list(value, left, right)
)

/**
 * 判断是否为二叉树节点
 * @param {*} node
 * @returns {boolen}  
 */
const isNode = (node) => (
    typeof node !== 'function' ? false
        : node[_NODE_] === true ? true
            : fasle
)

/**
 * 得到二叉树节点的值
 * @param {node} node
 * @returns {*}  
 */
const getNodeValue = (node) => (
    cdr(node)
)


const getLeft = (node) => (
    cdr(car(node))
)

const getRight = (node) => (
    cdr(car(car(node)))
)




