navCtrl.$inject = ['$scope']
function navCtrl($scope) {
    let vm = this
    vm.menuClick = function() {
        $scope.$emit('menuBTNOnNavClicked')
        console.log("navCtrl emit menuBTNOnNavClicked")
    }
}
export {navCtrl}

slideCtrl.$inject = ['$scope']
function slideCtrl($scope) {
    let vm = this
    vm.showSlide = false
    $scope.$on('menuBTNOnNavClicked_Reflect', function() {
        vm.showSlide = true
        console.log("slideCtrl on nuBTNOnNavClicked_Reflect")
    })
    $scope.$on('documentClicked', function() {
        vm.showSlide = false
        console.log("slideCtrl on documentClicked")
        $scope.$digest()
    })
    $scope.$on('escapePressed', function() {
        vm.showSlide = false
        console.log("slideCtrl on escapePressed")
        $scope.$digest()
    })
}
export {slideCtrl}
