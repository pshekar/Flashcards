﻿(function () {
    angular.module('FlashCards')
		.controller('flashcardsController', ['$mdDialog', 'studentService', 'UserService', '$cookies', '$state', '$rootScope', '$timeout', '$scope',
            function ($mdDialog, studentService, UserService, $cookies, $state, $rootScope, $timeout, $scope) {

                var vm = this;
                vm.flashcards = [];
                vm.quizName = $cookies.get('quizId');
                vm.studentId = $cookies.get('studentId');

                vm.quiz = { quizName: vm.quizName, studentId: vm.studentId };

                studentService.getSingleQuiz(vm.quiz).then(function (data) {
                    console.log(data.data);
                    vm.quizId = data.data._id;
                });

                vm.makeQuiz = function() {
                    console.log('hi');
                    $state.go('root.makeQuiz');
                }

                vm.goToQuiz = function() {
                    $state.go('root.quiz');
                }

    
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
                    })
                })
              };


            }]);


})()
