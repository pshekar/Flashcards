(function () {
    angular.module('FlashCards')
		.controller('flashcardsController', ['$mdDialog', 'studentService', 'UserService', '$cookies', '$state', '$rootScope', '$timeout', '$scope',
            function ($mdDialog, studentService, UserService, $cookies, $state, $rootScope, $timeout, $scope) {

                var vm = this;
                vm.flashcards = [];
                vm.quizId = $cookies.get('quizId');


                vm.makeQuiz = function() {
                    console.log('hi');
                    $state.go('root.makeQuiz');
                }

                vm.goToQuiz = function() {
                    $state.go('root.quiz');
                }

                vm.quizName = $rootScope.quizName;

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
                      studentService.getFlashcards(vm.quizId).then(function (data) {
                          vm.flashcards = data.data;
                      })
                  })
                };


            }]);


})()
