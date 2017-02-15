var angularApp = angular.module('angularExample',[]);

angularApp.controller('personCtrl', function ($scope){
	
	console.log("inside ctrllr");
	$scope.myVar = "";
	/*$scope.inp1 = "sample";
	$scope.inp2 = "text";*/

	$scope.upperCase = function(){
		console.log("inside upperCase");
		$scope.myVar = ($scope.inp1+$scope.inp2).toUpperCase();
	}

	$scope.lowerCase = function(){
		console.log("inside lowerCase");
		$scope.myVar = ($scope.inp1+$scope.inp2).toLowerCase();
	}
});

angularApp.directive('upperCase',function(){
	//console.log("inside UP");
	return {
		template : "<h1>{{ inp1 + inp2 | uppercase }}</h1>"
	};
});

angularApp.directive('lowerCase',function(){
	//console.log("inside LOW");
	return {
		template : "<h2>{{ inp1 + inp2 | lowercase }}</h2>"
	};
});