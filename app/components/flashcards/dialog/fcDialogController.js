(function(){
	angular.module('FlashCards')
		.controller('fcDialogController', ['$mdDialog', 'studentService', function($mdDialog,studentService){
			var vm = this;

			vm.cancel = function() {
				$mdDialog.cancel();
			}

			vm.add = function() {

			}
		}])

})()