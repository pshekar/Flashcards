(function(){
	angular.module('FlashCards')
		.controller('quizDialogController', ['$mdDialog', '$state', 'quizId', 'studentService', function($mdDialog, $state, quizId, studentService){
		    var vm = this;


		    vm.reload = function() {
		    	$mdDialog.hide();
		    	$state.reload();
		    }

		    vm.goHome = function() {
		    	$state.go('root.home');
		    	$mdDialog.hide();
		    }

		    vm.goToQuiz = function() {
		    	$state.go('root.takeQuiz');
		    	$mdDialog.hide();
		    }
		    vm.showGood = true;
		    vm.showBad = false;

		}])

})()