(function () {
    angular.module('FlashCards')
		.controller('quizController', ['$mdDialog', 'studentService', 'UserService', '$cookies', '$state', '$rootScope', '$timeout', '$scope',
            function ($mdDialog, studentService, UserService, $cookies, $state, $rootScope, $timeout, $scope) {

                var vm = this;

                vm.flashcards = [];
                vm.questions = [];
                vm.answers = [];
                vm.index = 0;
                vm.quizName = $cookies.get('quizId');
                vm.studentId = $cookies.get('studentId');


                vm.quiz = { quizName: vm.quizName, studentId: vm.studentId };

                
                studentService.getSingleQuiz(vm.quiz).then(function (data) {
                    console.log(data.data);
                    vm.quizId = data.data._id;
                }).then(function () {
                    studentService.getFlashcard(vm.quizId).then(function (data) {
                        vm.flashcards = data.data;
                        console.log(vm.flashcards);
                        vm.getData(vm.flashcards);
                    });
                });

                vm.getData = function(flashcards) {
                  for (var i = 0; i < flashcards.length; i++) {
                    vm.questions[vm.index] = flashcards[vm.index].question;
                    vm.answers[vm.index] = flashcards[vm.index].answer;
                    vm.index++;
                  }
                };

                vm.getAnswers = function(flashcards) {
                    vm.enteredAnswers = [];
                    vm.right = [];
                    for (var i = 0; i < flashcards.length; i++) {
                        vm.enteredAnswers[i] = vm.inputAnswers[i];
                        if (vm.enteredAnswers[i] != vm.answers[i]) {
                            vm.right[i] = false;
                        }
                        else {
                            vm.right[i] = true;
                        }
                    }
                    console.log(vm.right);
                }

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

                vm.showAdvanced = function(ev) {
                    var dialog = $mdDialog.show({
                      controller: "quizDialogController",
                      controllerAs: "quizDialogVM",
                      templateUrl: 'app/components/quiz/dialog/quizDialog.html',
                      parent: angular.element(document.body),
                      locals: {
                          quizId: vm.quizId
                       },
                      targetEvent: ev,
                      clickOutsideToClose:false,
                      fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
                    })
                };

                $scope.$watch('subjectsVM.quizName', debounceSaveUpdates);

            }]);


})()
