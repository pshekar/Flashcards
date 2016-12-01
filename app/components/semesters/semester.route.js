(function(){
    angular.module('FlashCards')
		.config(['$stateProvider','$urlRouterProvider',semesterRouter]);

		function semesterRouter($stateProvider,$urlRouterProvider) {
			$stateProvider
				.state('root.semester', {
					 url: '/semesters',
					 views: {
					 	'content@': {
					 		templateUrl: 'app/components/semesters/semester.html',					 
							controller: 'semesterController',
					 		controllerAs: 'semesterVM'
					 	}
					 }
				})
			
		}
})()