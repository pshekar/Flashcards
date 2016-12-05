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

                vm.loadedQuizzes = [];
                vm.loadedQuizzes[0] = {quizName:'Science', studentId: vm.studentId}
                vm.loadedQuizzes[1] = {quizName:'Math', studentId: vm.studentId}
                vm.loadedQuizzes[2] = {quizName:'History', studentId: vm.studentId}
                vm.loadedQuizzes[3] = {quizName:'Geography', studentId: vm.studentId}
                vm.loadedQuizzes[4] = {quizName:'General', studentId: vm.studentId}

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
