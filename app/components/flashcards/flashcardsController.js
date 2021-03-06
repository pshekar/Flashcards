﻿(function () {
    angular.module('FlashCards')
		.controller('flashcardsController', ['$mdDialog', 'studentService', 'UserService', '$cookies', '$state', '$rootScope', '$timeout', '$scope',
            function ($mdDialog, studentService, UserService, $cookies, $state, $rootScope, $timeout, $scope) {

                var vm = this;
                vm.flashcards = [];
                vm.questions = [];
                vm.answers = [];
                vm.index = 0;
                vm.quizName = $cookies.get('quizId');
                console.log(vm.quizName);
                vm.studentId = $cookies.get('studentId');

                vm.quiz = { quizName: vm.quizName, studentId: vm.studentId };
                
                studentService.getSingleQuiz(vm.quiz).then(function (data) {
                    // console.log(data.data);
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

                vm.makeQuiz = function() {
                    //console.log('hi');
                    $state.go('root.makeQuiz');
                };

                vm.goToQuiz = function() {
                    $state.go('root.quiz');
                };

    
                vm.showAdvanced = function(ev) {
                var dialog = $mdDialog.show({
                  controller: "fcDialogController",
                  controllerAs: "fcDialogVM",
                  templateUrl: 'app/components/flashcards/dialog/fcDialog.html',
                  parent: angular.element(document.body),
                  locals: {
                      quizId: vm.quizId
                   },
                  targetEvent: ev,
                  clickOutsideToClose:true,
                  fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
                }).then(function () {
                    studentService.getFlashcard(vm.quizId).then(function (data) {
                        vm.flashcards = data.data;
                        console.log(vm.flashcards);
                    })
                })
                };

                vm.editFlashcard = function (flashcard) {
                    flashcard.showInput = true;
                    flashcard.answer = flashcard.answer;
                    flashcard.question = flashcard.question;
                }

                vm.submitEdit = function (flashcard) {
                    studentService.updateFlashcards(flashcard).then(function () {
                        $timeout(function () {
                            studentService.getFlashcard(vm.quizId).then(function (data) {
                                vm.flashcards = data.data;
                                //console.log(vm.section.length);
                                for (var i = 0; i < vm.flashcards.length; i++) {
                                    vm.flashcards[i].showInput = false;
                                }
                            })
                        }, 500)
                    });
                    flashcard.showInput = false;
                    $timeout(function () {
                        $state.reload('root');

                    }, 500);

                }


                vm.deleteFlashcard = function (flashcardId) {
                    //console.log(gradeId);
                    studentService.deleteFlashCard(flashcardId).then(function (data) {
                        studentService.getFlashcard(vm.quizId).then(function (data) {
                            vm.flashcards = data.data;
                            //console.log(vm.section.length);
                            for (var i = 0; i < vm.flashcards.length; i++) {
                                vm.flashcards[i].showInput = false;
                            }
                        })
                    })
                }
            }]);




})()
