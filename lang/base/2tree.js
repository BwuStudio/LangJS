const L = new Symbol('left'),
    R = new Symbol('right'),
    V = new Symbol('value'),
    BINARY_TREE = new Symbol('binary tree')

/**
 * 生成一个二叉树结点
 * @param {*} value
 * @param {node} left
 * @param {node} right
 */
const BinNode = (value, left = null, right = null) => ({
    [V]: value,
    [L]: left,
    [R]: right,
    [BINARY_TREE]: true
})

export { BinNode, L, R, V, BINARY_TREE }
