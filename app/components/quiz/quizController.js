(function () {
    angular.module('FlashCards')
		.controller('quizController', ['$mdDialog', 'studentService', 'UserService', '$cookies', '$state', '$rootScope', '$timeout', '$scope',
            function ($mdDialog, studentService, UserService, $cookies, $state, $rootScope, $timeout, $scope) {

                var vm = this;

                vm.makeQuiz = function() {
                    console.log('hi');
                    $state.go('root.makeQuiz');
                }

                vm.goToQuiz = function() {
                    $state.go('root.quiz');
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

                $scope.$watch('subjectsVM.quizName', debounceSaveUpdates);

            }]);


})()
