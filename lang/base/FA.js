const
    _FA_= Symbol('fa')


const Func = (char, begin, end) => ({
    char, begin, end
})


/**
 * 生成一个自动机
 * @param {Object} config
 * @param {Symbol} config.begin 起始状态
 * @param {Symbol[]} config.end 终止状态
 * @param {Func[]} config.func 转移函数
 * @returns{Object} FA
 * @returns{Object} FA.table 所有状态的表（name 是状态 Symbol；value 是个也是个表（name 是这个状态可接受字符串value是转换后的状态））
 * @returns{Object} FA.table
 */
const FA = ({ begin, ends = [], func = [] }) => {
    const
        _func = func,
        _begin = begin,
        _ends = ends

    let charsArr = [],
        charsTable = {},
        statesArr = [],
        statesTable = {},
        endsArr = [],
        endsTable = [],
        table = {}

    _func.forEach((value) => {
        // 将字符添加进 chars 和 charsTable 中
        if (!charsTable[value.char]) {
            charsTable[value.char] = true
            charsArr.push(value.char)
        }

        // 将所有状态添加进 states 和 statesTable 中
        if (!statesTable[value.begin]) {
            statesTable[value.begin] = true
            statesArr.push(value.begin)
        }
        if (!statesTable[value.end]) {
            statesTable[value.end] = true
            statesArr.push(value.end)
        }

        //将转移函数添加进 table 中
        if (table[value.begin]) {
            table[value.begin][value.char] = value
        } else {
            table[value.begin] = { [value.char]: value }
        }

    })
    
    // 将所有结束状态添加进 states 和 statesTable 中
    ends.forEach((value)=>{
        if(statesTable[value]){
            endsTable[value] = true
            endsArr.push(value)
        }
    })

    return {
        _endsArr:endsArr,
        _endsTable:endsTable,
        _charsArr:charsArr,
        _charsTable:charsTable,
        _statesArr:statesArr,
        _statesTable:statesTable,
        _funcsArr:_func,
        _table:table,
        _begin:_begin,

        getChars,
        checkChar,
        getEnds,
        checkEnd,
        getStates,
        checkState,
        getFuncs,
        getBegin,
        [_FA_]:true
    }

}

/**
 * 得到 FA 的所有转移函数
 * @returns{Func[]}
 */
function getFuncs() {
    return this._funcsArr
}

/**
 * 得到 FA 的起始状态
 * @returns{Symbol}
 */
function getBegin() {
    return this._begin
}

/**
 * 得到 FA 的字符集
 * @returns{char[]}
 */
function getChars() {
    return this._charsArr
}

/**
 * 判断一个字符是否在 FA 中
 * @param {char} char
 * @returns {bool} 
 */
function checkChar(char) {
    return this._charsTable[char]?true:false
}

/**
 * 得到 FA 的状态集
 * @returns{Symbol[]}
 */
function getStates() {
    return this._statesArr
}

/**
 * 判断一个状态是否在 FA 中
 * @param {Symbol} state
 * @returns {bool} 
 */
function checkState(state) {
    return this._statesTable[state]?true:false
}

/**
 * 得到 FA 的接受状态集合
 * @returns {Symbol[]}
 */
function getEnds() {
    return this._endsArr
}

/**
 * 判断一个状态是否是 FA 的接受状态
 * @param {Symbol} state
 * @returns{bool} 
 */
function checkEnd(state) {
    return this._endsTable[state]?true:false
}


export {
    Func,FA,_FA_
}