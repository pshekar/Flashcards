(function(){
	angular.module('FlashCards')
		.config(['$stateProvider','$urlRouterProvider', quizDialogRouter]);

		function quizDialogRouter($stateProvider,$urlRouterProvider) {
			$stateProvider
				.state('root.quizDialog', {
					 url: '/quizDialog',
					 views: {
					 	'content@': {
						 	templateUrl: 'app/components/quiz/dialog/quizDialog.html',
							controller: 'quizDialogController',
							controllerAs: 'quizDialogVM'
						}
					}
				})
		}
})()