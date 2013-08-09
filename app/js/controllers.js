define(['angular', 'services'], function (angular) {
	'use strict';

	return angular.module('myApp.controllers', ['myApp.services'])
		.controller('MyCtrl1', ['$scope', 'version', function ($scope, version) {
            $scope.listItems = [
                {"name":'item01',"describe":"item test"},
                {"name":'item02',"describe":"item test"},
                {"name":'item03',"describe":"item test"},
                {"name":'item04',"describe":"item test"}
            ];

            $scope.selectedItem = "init";
            $scope.setName = function(item){
                $scope.item = item;
                $scope.item2 = angular.copy(item);

                $scope.hidden = true;
                $scope.myStyle={width:'200px'}
            };
			$scope.scopedAppVersion = version;
            $scope.close = function(){
                $scope.hidden = false;
                $scope.myStyle={width:'100%'}
            };

            $scope.update = function(){
                $scope.item.name = $scope.item2.name;
                $scope.item.describe = $scope.item2.describe;
            }
		}])
		.controller('MyCtrl2', ['$scope', '$injector', function($scope, $injector) {
			require(['controllers/myctrl2'], function(myctrl2) {
				$injector.invoke(myctrl2, this, {'$scope': $scope});
			});
		}]);
});