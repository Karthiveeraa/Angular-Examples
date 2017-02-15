var angularApp = angular.module('angularExample',[]);

angularApp.controller('factCtrl', function ($scope,factorial) {
	
	console.log("inside fact ctrllr");
	
	$scope.fact = 1;

	$scope.calcFactorial = function() {
		
		$scope.fact = factorial.getFact($scope.userInp);
	
	}
	
});

angularApp.service('factorial',function() {
	
	this.getFact = function(input) {
		
		var res=1;
		
		for( i=1; i<=input; i++ ) {
			
			res*=i;
		
		}
		
		return res;
	
	}

});