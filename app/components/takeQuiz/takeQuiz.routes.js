(function () {
    angular.module('FlashCards')
		.config(['$stateProvider', '$urlRouterProvider', takeQuizRouter]);

    function takeQuizRouter($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('root.takeQuiz', {
                url: '/takeQuiz',
                views: {
                    'content@': {
                        templateUrl: 'app/components/takeQuiz/takeQuiz.html',
                        controller: 'takeQuizController',
                        controllerAs: 'takeQuizVM'
                    }
                }
            })

    }
})()