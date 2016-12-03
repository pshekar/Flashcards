(function(){
	angular.module('FlashCards')
		.config(['$stateProvider','$urlRouterProvider', fcDialogRouter]);

		function fcDialogRouter($stateProvider,$urlRouterProvider) {
			$stateProvider
				.state('root.fcDialog', {
					 url: '/fcDialog',
					 views: {
					 	'content@': {
						 	templateUrl: 'app/components/flashcards/dialog/fcDialog.html',
							controller: 'fcDialogController',
							controllerAs: 'fcDialogVM'
						}
					}
				})
		}
})()