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
            $scope.setName = function(name){
                $scope.selectedItem = name;
                $scope.hidden = true;
            };
			$scope.scopedAppVersion = version;
		}])
		.controller('MyCtrl2', ['$scope', '$injector', function($scope, $injector) {
			require(['controllers/myctrl2'], function(myctrl2) {
				$injector.invoke(myctrl2, this, {'$scope': $scope});
			});
		}]);
});