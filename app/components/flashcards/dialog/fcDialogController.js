(function(){
	angular.module('FlashCards')
		.controller('fcDialogController', ['$mdDialog', 'quizName', 'studentId', 'studentService', function($mdDialog, quizName, studentId, studentService){
		    var vm = this;

		    vm.flashcard = { question: "", answer: "", quizId: ""};
		    vm.quiz = { quizName: quizName, studentId: studentId };

		    studentService.getSingleQuiz(vm.quiz).then(function (data) {
		        console.log(data.data._id);
		        vm.flashcard.quizId = data.data._id;
		    });


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