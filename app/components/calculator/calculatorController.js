(function(){
	angular.module('FlashCards')
		.controller('calculatorController', ['$mdDialog', '$cookies', '$state', 'studentService', function($mdDialog, $cookies, $state, studentService){
			var vm = this;
			vm.courses = [];
			vm.semesterId = $cookies.get('semesterId');
			//vm.courseUniqueId = $cookies.get('courseUniqueId');
			//vm.courseId = $cookies.get('courseId');
			//console.log(vm.courseId);
			vm.semester={};
			
			//studentService.getCourse(vm.courseUniqueId).then(function(data) {
			//	vm.course = data.data;
			//	vm.course = vm.course[0];
			//});

			studentService.getSection(vm.courseUniqueId).then(function(data) {
				vm.section = data.data;

			});
			studentService.getSemester(vm.semesterId).then(function(data) {
				vm.semester = data.data;
				vm.semester= vm.semester[0];
				//vm.semesterId = vm.semester._id;

				//console.log(vm.semesterId);
			});
			studentService.getCourses(vm.semesterId).then(function(data) {
				vm.courses = data.data;
				//vm.course = vm.courses[0];
				//console.log(vm.courses);
			});	

			// go to the grades for this course 
			//vm.goToGrades = function(course) {
			//	$cookies.put('courseUniqueId',course._id);
			//	$state.go('root.grade');
			//};
			vm.getCourse = function(course) {
				//console.log(course);
				$cookies.put('courseId', course._id);
				//console.log(courseId);
			}

			vm.showAdvanced = function(ev) {
				//$cookies.put('courseId', course._id);
				//console.log(course._id);
			    $mdDialog.show({
			      controller: 'calculatorDialogController',
			      controllerAs: 'calculatorDialogVM',
			      templateUrl: 'app/components/calculator/dialog/dialog.html',
			      parent: angular.element(document.body),
			      targetEvent: ev,
			      clickOutsideToClose:true,
			      fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
			    })
			    
			  };

		}])



})()

