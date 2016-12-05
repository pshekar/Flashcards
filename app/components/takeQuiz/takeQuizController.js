(function () {
    angular.module('FlashCards')
		.controller('takeQuizController', ['$mdDialog', 'studentService', 'UserService', '$cookies', '$state', '$rootScope', '$timeout', '$scope',
            function ($mdDialog, studentService, UserService, $cookies, $state, $rootScope, $timeout, $scope) {

                var vm = this;
                vm.quizzes = [];
                vm.studentId = $cookies.get('studentId');

                studentService.getQuizzes(vm.studentId).then(function (data) {
                    console.log(data.data);
                    vm.quizzes = data.data;
                })

                vm.makeQuiz = function() {
                    // console.log('hi');
                    $state.go('root.makeQuiz');
                }

                vm.goToQuiz = function (quiz) {
                    $cookies.put('quizId', quiz.quizName);
                    $state.go('root.flashcards');
                }


            }]);


})()
