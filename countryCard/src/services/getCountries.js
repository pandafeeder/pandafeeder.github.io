getCountries.$inject = ['$http']

function getCountries($http) {
    return {
        countriesPromise : requestFn
    }
    function requestFn() {
        var countries_url = "https://restcountries.eu/rest/v1/all"
        return $http.get(countries_url).then(
            function successCallback(response) {
                return response.data
            },
            function errorCallback(response) {
                return response.status
            })
    }
}

exports.getCountries = getCountries
