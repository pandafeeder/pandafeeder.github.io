countriesCtrl.$inject = ['getCountries', '$scope']
function countriesCtrl(getCountries, $scope, $filter) {
    var countriesPromise = getCountries.countriesPromise(),
        countries = [],
        pages = []
    countriesPromise.then(
        function successCB(data) {
            var pagesLength = Math.ceil(data.length / 9)
            for (var i=0; i<pagesLength; i++) {
                pages.push(i+1)
                countries[i] = data.slice(i*9, (i+1)*9)
            }
            $scope.countries = countries[0]
            $scope.pages = pages
        },
        function failCB(error) {
            $scope.error = error
        })
    $scope.changePage = function(pnum) {
            $scope.countries = countries[pnum-1]
    }
    this.selectRegion = function(region) {
        $scope.sch = region
        $scope.$digest()
    }
}

exports.countriesCtrl = countriesCtrl
