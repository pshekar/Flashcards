(function () {
    angular.module('FlashCards')
		.controller('makeQuizController', ['$mdDialog', 'studentService', 'UserService', '$cookies', '$state', '$rootScope', '$timeout', '$scope',
            function ($mdDialog, studentService, UserService, $cookies, $state, $rootScope, $timeout, $scope) {

                var vm = this;
                vm.studentId = $cookies.get('studentId');

                vm.quiz = { quizName: "", quizId: "", studentId: vm.studentId };
                //vm.openDialog = function(event) {
                //    var dialog = $mdDialog.show({
                //        targetEvent:event,
                //        clickOutsideToClose:true,
                //        templateUrl: 'app/components/makeQuiz/makeQuiz.html',
                //        controller: 'makeQuizController',
                //        locals: {
                //            studentId: vm.studentId
                //        },
                //        controllerAs: 'makeQuizVM'
                //    }).then(function(){
                //        //do stuff not sure what
                //    })
                //};

                vm.createQuiz = function () {
                    console.log(vm.quiz.quizName);
                    studentService.postQuiz(vm.quiz);
                        //.then(function (response) {
                        //    console.log("create quiz " + response);
                        //    if (response == null) {
                        //        $scope.error = "postQuiz";
                        //        console.log("error" + $scope.error);
                        //    }
                        //    else if (response.status == 200) {
                        //        //change to edit quiz
                        //        $state.go('root.home');
                        //    }
                    //});
                    $state.go('root.home');
                };

                //var timeout = null;
                //var saveInProgress = false;
                //var saveFinished = function () {
                //    saveInProgress = false;
                //};

                //var saveUpdates = function () {
                //    saveInProgress = true;
                //    saveFunction().finally(saveFinished);

                //};

                //var saveFunction = function (){
                //    // studentService.
                //};

                //var debounceSaveUpdates = function (newVal, oldVal) {
                //    if (newVal != oldVal) {
                //        if (timeout) {
                //            $timeout.cancel(timeout);
                //        }
                //        timeout = $timeout(saveUpdates, 1000);
                //    }

                //};

                //$scope.$watch('makeQuizVM.quizName', debounceSaveUpdates);

            }]);


})()
