(function () {
    angular.module('FlashCards')
		.config(['$stateProvider', '$urlRouterProvider', quizRouter]);

    function quizRouter($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('root.quiz', {
                url: '/quiz',
                views: {
                    'content@': {
                        templateUrl: 'app/components/quiz/quiz.html',
                        controller: 'quizController',
                        controllerAs: 'quizVM'
                    }
                }
            })

    }
})()