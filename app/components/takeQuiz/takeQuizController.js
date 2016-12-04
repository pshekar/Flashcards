(function () {
    angular.module('FlashCards')
		.controller('takeQuizController', ['$mdDialog', 'studentService', 'UserService', '$cookies', '$state', '$rootScope', '$timeout', '$scope',
            function ($mdDialog, studentService, UserService, $cookies, $state, $rootScope, $timeout, $scope) {

                var vm = this;
                vm.quizzes = [];
                vm.index = 0;
                vm.studentId = $cookies.get('studentId');
                studentService.getQuizzes(vm.studentId).then(function(data) {
                    vm.quizzes = data.data;
                    console.log(vm.quizzes);
                    // for (var i = 0; i < vm.quizzes.length; i++) {
                    //     studentService.getFlashcard(vm.quizzes[i]._id).then(function(data) {
                    //         vm.listFlashcard(data.data, i);
                    //     })
                    // }
                });
                //vm.flashcards = data.data;
                vm.index = 0;
                vm.makeQuiz = function() {
                    // console.log('hi');
                    $state.go('root.makeQuiz');
                }

                vm.goToQuiz = function() {
                    $state.go('root.flashcards');
                }

                // vm.listFlashcard = function(flashcards, i) {
                //     //get the flashcard?
                //     for (var j = 0; j < flashcards.length; j++) {
                //         vm.flaschards[vm.index] = flashcards[j];
                //     }
                //     vm.index++;
                // }
                // console.log(vm.flashcards);

                var timeout = null;
                var saveInProgress = false;
                var saveFinished = function () {
                    saveInProgress = false;
                };

                var saveUpdates = function () {
                    saveInProgress = true;
                    saveFunction().finally(saveFinished);

                };

                var saveFunction = function (){
                    // studentService.
                };

                var debounceSaveUpdates = function (newVal, oldVal) {
                    if (newVal != oldVal) {
                        if (timeout) {
                            $timeout.cancel(timeout);
                        }
                        timeout = $timeout(saveUpdates, 1000);
                    }

                };

                $scope.$watch('quizVM.quizName', debounceSaveUpdates);

            }]);


})()
