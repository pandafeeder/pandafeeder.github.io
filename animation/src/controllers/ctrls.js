function boardCtrl() {
    let list = [
    {name:'Fry'}, 
    {name:'Leela'}, 
    {name:'Bender'}, 
    {name:'Zoidberg'}, 
    {name:'Amy'}, 
    {name:'Kif'},
    {name:'Professor'},
    {name:'Hermes'},
    {name:'Zapp'},
    {name:'Scruffy'},
    ]
    this.list = list
    this.animateBig = "animate-big"
    function appendOrTrimStr(ori, factor) {
        let index = ori.indexOf(factor)
        if (index > 0) {
            return ori.substring(0, index)
        } else {
            return (ori + factor)
        }     
    }
    this.toBig = function(item) {
        this.list = (this.list.length === 1) 
            ? list
            : this.list.filter((i) => i.name === item.name)
        item.name = appendOrTrimStr(item.name, 'Big')
        //this.animateBig = appendOrTrimStr(this.animateBig, ' active')
    }
    this.name = function(name) {
        return (name.indexOf('Big') > 0)
                ? undefined
                : name
    }
}
export {boardCtrl}

soloCtrl.$inject=['$stateParams', '$state']
function soloCtrl($stateParams, $state) {
    this.slug = $stateParams.name+"Big"
    this.back = function() {
        $state.go('board')
    }
}
export {soloCtrl}
