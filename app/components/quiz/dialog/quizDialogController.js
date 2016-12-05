(function(){
	angular.module('FlashCards')
		.controller('quizDialogController', ['$mdDialog', '$state', 'quizId', 'right', 'studentService', function($mdDialog, $state, quizId, right, studentService){
		    var vm = this;
		    console.log(right);

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