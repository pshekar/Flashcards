(function(){
	angular.module('FlashCards')
		.controller('fcDialogController', ['$mdDialog', '$rootScope', 'quizId', 'studentService', function($mdDialog, $rootScope, dstudentService){
		    var vm = this;
            vm.quizName = $rootScope.quizName;
			vm.flashcard = {question:"", quizName:vm.quizName, answer:""};


			vm.flag = 0;
			vm.submitFlashcard = function () {
			    //console.log(vm.course);
			    if (vm.flag == 0) {
			        studentService.postFlashcards(vm.flashcard).then(vm.flag = 1);
			    }
			    $mdDialog.hide();
			};
		}])

})()