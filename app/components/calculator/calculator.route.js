(function(){
	angular.module('FlashCards')
		.config(['$stateProvider','$urlRouterProvider', calculatorRouter]);

		function calculatorRouter($stateProvider,$urlRouterProvider) {
			$stateProvider
				.state('root.calculator', {
					 url: '/calculator',
					 views: {
					 	'content@': {
						 	templateUrl: 'app/components/calculator/calculator.html',
							controller: 'calculatorController',
							controllerAs: 'calculatorVM'
						}
					}
				})
		}
})()