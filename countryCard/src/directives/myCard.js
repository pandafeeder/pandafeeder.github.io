function myCard() {
    return {
        restrict: 'E',
        template: require('../templates/myCard.html'),
        require: '^^ngController',
        scope: {
            country : '='
        },
        link: link
    }
    function link(scope, element, attr, controller) {
        scope.showDetail = false 
        var detail = element.find('BUTTON'),
            region = element.find('A'),
            countriesCtrl = controller
        detail.bind('click', function() {
            scope.showDetail = !scope.showDetail
            if (scope.showDetail === true) {
                detail.text("Fold")
            } else {
                detail.text("Detail")
            }
            scope.$digest()
        })
        region.bind('click', function() {
            countriesCtrl.selectRegion(region.text())
        })
    }
}

exports.myCard = myCard 
