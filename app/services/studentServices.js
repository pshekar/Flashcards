(function(){
    angular.module('FlashCards')
		.service('studentService',['$http',function($http) {

			var getStudents = function() {//
			    return $http.get('http://localhost:27017/api/students').then(function (data) {
						return data;
					}).catch(function(err) {
						console.log(err);
					})
				};
			//get all semesters that this student has
			//var getSubjects = function(studentId) {
			//    return $http.get('http://localhost:27017/api/subjects/' + studentId).then(function (data) {
			//			return data;
			//		}).catch(function(err) {
			//			console.log(err);
			//		})
			//	};	
				
				//get the semester with this semesterID
			//var getSubject = function (subjectId) {
			//    return $http.get('http://localhost:27017/api/subjects/' + subjectId).then(function (data) {
			//		return data;
			//	}).catch(function(err) {
			//		console.log(err);
			//	})
			//};

			//var getCurrentSemester = function(studentId) {
			//    return $http.get('http://localhost:27017/api/semesters/current/' + studentId).then(function (data) {
			//			return data;
			//		}).catch(function(err) {
			//			console.log(err);
			//		})
			//	};		

			var postQuiz = function (quizObj) {//
			    return $http.post('http://localhost:27017/api/quizzes', quizObj).then(function (err, data) {
						return data;
					}).catch(function(err){
						console.log(err);
					})
			};

			var postStudents = function(studentObj) {//
			    return $http.post('http://localhost:27017/api/students', studentObj).then(function (err, data) {
						return data;
					}).catch(function(err){
						console.log(err);
					})

			};

			//var postSubjects = function(subjectObj) {
			//    return $http.post('http://localhost:27017/api/subjects', subjectObj).then(function (err, data) {
			//			return data;
			//		}).catch(function(err){
			//			console.log(err);
			//		})

			//};

			var getQuizzes = function(studentId) {//
			    return $http.get('http://localhost:27017/api/quizzes/' + studentId).then(function (data) {
						return data;
					}).catch(function(err){
						console.log(err);
					})

			};
			//get specific course
			var getQuiz = function(quizId) {//
			    return $http.get('http://localhost:27017/api/quizzes/' + quizId).then(function (data) {
						return data;
					}).catch(function(err){
						console.log(err);
					})
			}

			var getSingleQuiz = function (quizObj) {
			    return $http.get('http://localhost:27017/api/quizzes/' + quizObj.quizName + '/' + quizObj.studentId).then(function (data) {
			        return data;
			    }).catch(function (err) {
			        console.log(err);
			    })
			}

			var postFlashcards = function(flashcardObj) {//
			    return $http.post('http://localhost:27017/api/flashcards', flashcardObj).then(function (err, data) {
						return data;
					}).catch(function(err){
						console.log(err);
					})
			}

			var getFlashcard = function(quizId) {//
			    return $http.get('http://localhost:27017/api/flashcards/' + quizId).then(function (data) {
						return data;
					}).catch(function(err){
						console.log(err);
					})			
			}

			//var postGrade = function(gradeObj) {
			//    return $http.post('http://localhost:27017/api/grade', gradeObj).then(function (err, data) {
			//			return data;
			//		}).catch(function(err){
			//			console.log(err);
			//		})
			//}
			//var getGrade = function(sectionId) {
			//    return $http.get('http://localhost:27017/api/grade/' + sectionId).then(function (data) {
			//			return data;
			//		}).catch(function(err){
			//			console.log(err);
			//		})	
			//}

			//var deleteCourse = function(courseId) {
			//    return $http.delete('http://localhost:27017/api/course/' + courseId).then(function (data) {
			//		return data;
			//	}).catch(function(err) {
			//		console.log(err);
			//	})
			//}
			
			var deleteFlashcards= function(quizId) {//
			    return $http.delete('http://localhost:27017/api/flashcards/' + quizId).then(function (data) {
					return data;
				}).catch(function(err) {
					console.log(err);
				})
			}

			var deleteQuiz = function(quizId) {//
			    return $http.delete('http://localhost:27017/api/quizzes/' + quizId).then(function (data) {
					return data;
				}).catch(function(err) {
					console.log(err);
				})
			}

			var updateFlashcards = function (flashcardObj) {//
			    return $http.post('http://localhost:27017/api/flashcards/update', flashcardObj).then(function (err, data) {
						return data;
					}).catch(function(err){
						console.log(err);
					})
			}

			var deleteFlashCard = function(flashcardId) {//
				//console.log(gradeId);
			    return $http.delete('http://localhost:27017/api/single/flashcards/' + flashcardId).then(function (data) {
					return data;
				}).catch(function(err) {
					console.log(err);
				})
			}
			var updateQuiz = function (quizObj) {//
			    return $http.post('http://localhost:27017/api/quizzes/update', quizObj).then(function (err, data) {
			        return data;
			    }).catch(function (err) {
			        console.log(err);
			    })
			}
			//var deleteSubject = function (subjectId) {
			//    return $http.delete('http://localhost:27017/api/subjects/' + subjectId).then(function (data) {
			//		return data;
			//	}).catch(function(err) {
			//		console.log(err);
			//	})
			//}
				return {
				    getStudents: getStudents,
				    postQuiz: postQuiz,
				    postStudents: postStudents,
				    getQuizzes: getQuizzes,
				    getQuiz: getQuiz,
				    postFlashcards: postFlashcards,
				    getFlashcard: getFlashcard,
				    deleteFlashcards: deleteFlashcards,
				    updateFlashcards: updateFlashcards,
				    deleteFlashCard: deleteFlashCard,
				    updateQuiz: updateQuiz,
				    deleteQuiz: deleteQuiz,
                    getSingleQuiz: getSingleQuiz
				};
		}])
})()