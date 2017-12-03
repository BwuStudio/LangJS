import { BinNode, _BinNode_ } from '../base/2tree'
import { _RE_, clo, CLO, and, AND, or, OR, RE } from '../base/RE'
import { _FA_, FA, Func } from '../base/FA'
import { isNullOrUndefined } from 'util';
import { type } from 'os';

const REtoNFA = (re) => {

    if (re === null) {
        return null
    } else if (typeof re === 'string') {
        let s1 = Symbol(),
            s2 = Symbol()
        return FA({
            begin: s1,
            ends: [s2],
            func: [Func(re, s1, s2)]
        })
    } else if (re[_RE_]) {
        let s1 = Symbol(),
            s2 = Symbol()

        let value = re.value,
            left = REtoNFA(re.left),
            right = REtoNFA(re.right)

        return (
            value === AND
                ? FA({
                    begin: left.getBegin(),
                    ends: [...right.getEnds()],
                    func: [
                        ...left.getFuncs(),
                        ...right.getFuncs(),
                        Func('', left.getEnds()[0], right.getBegin())
                    ]
                })
                : value === OR
                    ? FA({
                        begin: s1,
                        ends: [s2],
                        func: [
                            ...left.getFuncs(),
                            ...right.getFuncs(),
                            Func('', s1, left.getBegin()),
                            Func('', s1, right.getBegin()),
                            Func('', left.getEnds()[0], s2),
                            Func('', right.getEnds()[0], s2)
                        ]
                    })
                    : value === CLO
                        ? FA({
                            begin: s1,
                            ends: [s2],
                            func: [
                                ...left.getFuncs(),
                                Func('', s1, s2),
                                Func('', s1, left.getBegin()),
                                Func('', left.getEnds()[0], s2),
                                Func('', left.getEnds()[0],left.getBegin())
                            ]
                        })
                        : null
        )
    }
}

export default REtoNFA