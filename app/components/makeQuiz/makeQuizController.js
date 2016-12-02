(function () {
    angular.module('FlashCards')
		.controller('makeQuizController', ['$mdDialog', 'studentService', 'UserService', '$cookies', '$state', '$rootScope', '$timeout', '$scope',
            function ($mdDialog, studentService, UserService, $cookies, $state, $rootScope, $timeout, $scope) {

                var vm = this;

                vm.openDialog = function(event) {
                    var dialog = $mdDialog.show({
                        targetEvent:event,
                        clickOutsideToClose:true,
                        templateUrl: 'app/components/makeQuiz/makeQuiz.html',
                        controller: 'makeQuizController',
                        locals: {
                            studentId: vm.studentId
                        },
                        controllerAs: 'makeQuizVM'
                    }).then(function(){
                        //do stuff not sure what
                    })
                };
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

                $scope.$watch('makeQuizVM.quizName', debounceSaveUpdates);

            }]);


})()
