(function(){
	angular.module('FlashCards')
		.controller('fcDialogController', ['$mdDialog', 'quizId', 'studentService', function($mdDialog, quizId, studentService){
		    var vm = this;

		    vm.flashcard = { question: "", answer: "", quizId: quizId};


		    vm.cancel = function() {
		    	$mdDialog.hide();
		    }

		    console.log(vm.flashcard);
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