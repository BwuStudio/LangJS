const Z = f =>
(x => f(y => x(x)(y)))
(x => f(y => x(x)(y)))

module.exports = {Z}


(function Z(f){
    return function(x){
        return f(function(y){
            return x(x)(y)
        })
    }
})(
    function(x){
        return function(){

        }
    }
)