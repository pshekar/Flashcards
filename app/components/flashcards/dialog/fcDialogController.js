(function(){
	angular.module('FlashCards')
		.controller('fcDialogController', ['$mdDialog', 'quizId', 'studentService', function($mdDialog,studentService){
		    var vm = this;
            
			vm.flashcard = {question:"", quizId:quizId, answer:""};


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