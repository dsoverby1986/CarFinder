(function () {
    angular.module('car-app')
        .controller('carCtrl', ['carSvc', '$scope', '$modal', function (carSvc, $scope, $modal) {
            var viewModel = this;
           // $scope.viewModel = viewModel;
            viewModel.animationsEnabled = true;

            //$scope.$watchGroup(['viewModel.selected.year', 'viewModel.selected.make', 'viewModel.selected.model', 'viewModel.selected.trim'], function (newValue, oldValue) { viewModel.getCars() });

            this.selected = {
                year: '',
                make: '',
                model: '',
                trim: '',
                filter: '',
                paging: true,
                page: 0,
                perPage: 25
            }

            this.totalItems = 500;

            console.log(this.selected);

            this.options = {
                years: '',
                makes: '',
                models: '',
                trims: ''
            }
            console.log(this.options);

            this.cars = [];
            this.carsCount = 0;

            this.getYears = function () {
                carSvc.getYears().then(function (data) {
                    viewModel.options.years = data;
                });
            }

            this.getMakes = function () {
                viewModel.selected.make = '';
                viewModel.options.makes = '';
                viewModel.selected.model = '';
                viewModel.options.models = '';
                viewModel.selected.trim = '';
                viewModel.options.trims = '';
                carSvc.getMakes(viewModel.selected.year).then(function (data) {
                    viewModel.options.makes = data;
                    viewModel.getCars();
                });
            }

            this.getModels = function () {
                viewModel.selected.model = '';
                viewModel.options.models = '';
                viewModel.selected.trim = '';
                viewModel.options.trims = '';

                carSvc.getModels(viewModel.selected.year, viewModel.selected.make).then(function (data) {
                    viewModel.options.models = data;
                    viewModel.getCars();
                });
            }

            this.getTrims = function () {
                viewModel.selected.trim = '';
                viewModel.options.trims = '';

                carSvc.getTrims(viewModel.selected.year, viewModel.selected.make, viewModel.selected.model).then(function (data) {
                    viewModel.options.trims = data;
                    viewModel.getCars();
                });
            }

            this.getCars = function () {

                if (viewModel.selected.year) {
                    var options = angular.copy(viewModel.selected);
                    options.page++;

                    carSvc.getCars(options).then(function (data) {
                        viewModel.cars = data;
                        
                    });
                    carSvc.getCarsCount(viewModel.selected).then(function (data) {
                        viewModel.totalItems = data;
                    });
                }
            }
            

            this.getCar = function (id) {
                $modal.open({
                    templateUrl: '/app/templates/carModal1.html',
                    controller: 'carModalCtrl as mCtrl',
                    size: 'lg',
                    resolve: {
                        car: function () {
                            return carSvc.getCar(id);
                        }
                    }
                });
            }

            this.click = function (thing) {
                console.log(thing)
            }

            this.getYears();
        }])

  angular.module('car-app').controller('carModalCtrl', function ($modalInstance, car) {
      this.car = car;
      console.log(car);
      this.ok = function () {
          $modalInstance.close();
      };

      this.cancel = function () {
          $modalInstance.dismiss('cancel');
      };
  });

})();