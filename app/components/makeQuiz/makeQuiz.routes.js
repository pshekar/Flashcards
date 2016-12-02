(function () {
    angular.module('FlashCards')
		.config(['$stateProvider', '$urlRouterProvider', makeQuizRouter]);

    function makeQuizRouter($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('root.makeQuiz', {
                url: '/makeQuiz',
                views: {
                    'content@': {
                        templateUrl: 'app/components/makeQuiz/makeQuiz.html',
                        controller: 'makeQuizController',
                        controllerAs: 'makeQuizVM'
                    }
                }
            })

    }
})()