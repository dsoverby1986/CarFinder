(function () {
    angular.module('car-app')
        .factory('carSvc', ['$http', function ($http) {
            var f = {};

            f.getYears = function () {
                return $http.post('/api/cars/getYears').then(function (response) {
                    return response.data;
                });
            }

            f.getMakes = function (year) {
                return $http.post('/api/cars/getMakes', { year: year }).then(function (response) {
                    return response.data;
                });
            }

            f.getModels = function (year, make) {
                return $http.post('/api/cars/getModels', { year: year, make: make }).then(function (response) {
                    return response.data;
                });
            }

            f.getTrims = function (year, make, model) {
                return $http.post('/api/cars/getTrims', { year: year , make: make , model: model }).then(function (response) {
                    return response.data;
                });
            }

            f.getCars = function (selected) {
                console.log('carSvc before .then() function')
                return $http.post('/api/cars/getCars', selected).then(function (response) {
                    console.log('carSvc in .then() function')
                    return response.data;
                });
            }

            f.getCar = function (id) {
                return $http.post('/api/cars/getCar', id).then(function (response) {
                    return response.data;
                })
            }

            f.getCarsCount = function (selected) {
                return $http.post('/api/cars/getCarsCount', selected).then(function (response) {
                    return response.data;
                })
            }

            return f;

        }])
})();