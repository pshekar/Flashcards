(function(){
	angular.module('FlashCards')
		.controller('quizDialogController', ['$mdDialog', '$state', 'quizId', 'right', 'studentService', function($mdDialog, $state, quizId, right, studentService){
		    var vm = this;
		    
		    console.log(right);
		    vm.totalPoints = right.length;
		    vm.numCorrect = 0;
		    vm.showGood = false;
		    vm.showBad = false;


		    for (var i = 0; i < right.length; i++) {
		    	if (right[i] == true) {
		    		vm.numCorrect++;
		    	}
		    }

		    console.log(vm.totalPoints);
		    console.log(vm.numCorrect);

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

		    if (vm.numCorrect/vm.totalPoints > 0.5) {
		    	vm.showGood = true;
		    }
		    else {
		    	vm.showBad = true;;
		    }

		}])

})()