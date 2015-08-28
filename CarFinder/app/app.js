(function () {
    var app = angular.module('car-app', ['ui.bootstrap', 'trNgGrid']);

    app.filter('capitalCase', function () {
        return function (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    });

    app.filter("displayCar", ['$filter', function ($filter) {
        return function (unused, item) {
            if (item.model_year == null)
                return '';
            return item.model_year + ' ' + $filter('capitalCase')(item.make) + ' ' + item.model_name + ' ' + item.model_trim;
        };
    }]);
})();
