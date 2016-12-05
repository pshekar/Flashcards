(function () {
    angular.module('FlashCards')
        .controller('quizController', ['$mdDialog', 'studentService', 'UserService', '$cookies', '$state', '$rootScope', '$timeout', '$scope',
            function ($mdDialog, studentService, UserService, $cookies, $state, $rootScope, $timeout, $scope) {

                var vm = this;

                vm.flashcards = [];
                vm.questions = [];
                vm.answers = [];
                vm.correct = 0;
                vm.right = [];
                vm.enteredAnswers = [];
                vm.inputAnswers = [];
                vm.quizName = $cookies.get('quizId');
                vm.studentId = $cookies.get('studentId');
                vm.flipped = false;


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
                    vm.questions[i] = flashcards[i].question;
                    vm.answers[i] = flashcards[i].answer;
                  }
                };

                vm.getAnswers = function(flashcards) {
                    for (var i = 0; i < vm.flashcards.length; i++) {
                        vm.enteredAnswers[i] = vm.inputAnswers[i];
                        if (vm.enteredAnswers[i] != vm.answers[i]) {
                            vm.right[i] = false;
                        }
                        else {
                            vm.right[i] = true;
                        }
                    }
                    console.log(vm.right);
                    vm.totalQuestions = vm.flashcards.length;
                    for (var i = 0; i < vm.flashcards.length; i++) {
                        if (vm.right[i] == true) {
                            vm.correct++;
                        }
                    }
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
                    vm.getAnswers(vm.flashcards);
                    var dialog = $mdDialog.show({
                      controller: "quizDialogController",
                      controllerAs: "quizDialogVM",
                      templateUrl: 'app/components/quiz/dialog/quizDialog.html',
                      parent: angular.element(document.body),
                      locals: {
                          quizId: vm.quizId,
                          right: vm.right
                       },
                      targetEvent: ev,
                      clickOutsideToClose:false,
                      fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
                    })
                };

                $scope.$watch('subjectsVM.quizName', debounceSaveUpdates);

            }]);


})()
