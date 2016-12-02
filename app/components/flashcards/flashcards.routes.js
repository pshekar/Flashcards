(function () {
    angular.module('FlashCards')
		.config(['$stateProvider', '$urlRouterProvider', flashcardsRouter]);

    function flashcardsRouter($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('root.flashcards', {
                url: '/flashcards',
                views: {
                    'content@': {
                        templateUrl: 'app/components/flashcards/flashcards.html',
                        controller: 'flashcardsController',
                        controllerAs: 'flashcardsVM'
                    }
                }
            })

    }
})()