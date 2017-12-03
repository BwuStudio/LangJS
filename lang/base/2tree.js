const
    _BinNode_ = Symbol('binary tree')

/**
 * 生成一个二叉树结点
 * @param {*} value
 * @param {node} left
 * @param {node} right
 */
const BinNode = (value, left = null, right = null) => ({
    value: value,
    left: left,
    right: right,
    [_BinNode_]: true
})

export { BinNode, _BinNode_ }
