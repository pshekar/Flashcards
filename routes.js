// app/routes.js

//require('./app/components/Login/passport')(passport);

// grab the student model
var Flashcards = require('./models/flashcards');
var Quizzes = require('./models/quizzes');

var Student = require('./models/student');

module.exports = function(app) {
	// server routes
	// handle api calls
	// authentication routes

	// sample api route
	app.get('/api/students', function(req,res) {//
		// use mongoose to get all students in the database
		Student.find({},function(err, students) {
			if (err) // Error handling
				res.send(err);
			res.json(students); // return all students in JSON
		});
	});

	//app.get('/api/subjects/:subjectId', function(req,res) {
	//    //get the subjects with the subjectsId
	//	Subjects.find({
	//	    _id: req.params.subjectId
	//	}, function(err,subjects){
	//		if(err)
	//				res.send(err)
	//		res.json(subjects);
	//	});
	//});

    //get all quizzes with the semesterID
    //Duplicate
	//app.get('/api/quizzes/:subjectId',function(req,res){
	//	Quizzes.find({
	//	    subjectId: req.params.subjectId
	//	}, function (err, quizzes) {
	//		if(err)
	//			res.send(err)
	//		res.json(quizzes);
	//	});
	//});

	//app.get('/api/subjects/:studentId', function(req,res) {
	//	// use mongoose to get all semester with the student ID
	//	Subjects.find({
	//		studentId: req.params.studentId
	//	},function(err, students) {
	//		if (err) // Error handling
	//			res.send(err);
	//		res.json(students); // return all students in JSON
	//	});
	//});

	//app.get('/api/semesters/current/:studentId', function(req,res) {
	//	// use mongoose to get current semester with the student ID
	//	Semesters.find({
	//		studentId: req.params.studentId,
	//		currentSemester: true,
	//	},function(err, students) {
	//		if (err) // Error handling
	//			res.send(err);
	//		res.json(students); // return all students in JSON
	//	});
	//});


	app.post('/api/quizzes ', function(req,res) {//
		console.log(res.body);
		//Quizzes.find({ 
		//    subjectId: req.body.subjectId,
		//    quizName: req.body.quizName,
		//    quizId: req.body.quizId,
		//},function(err,data) {
		//	if (data.length != 0){}
		//	else {
				Quizzes.create({
				    quizName: req.body.quizName,
				    quizId: req.body.quizId,
				    studentId: req.body.studentId
				},function(err,data) {
				if (err)
					res.send(err);
				})
			//}
		//})
	})

	//app.post('/api/subjects', function(req, res) {//
	//	Subjects.find({
	//		studentId: req.body.studentId,
	//	 	subjectId: req.body.subjectId,
	//	 	subjectName: req.body.subjectName
	//	}, function(err,data) {
	//		if (data.length != 0){}
	//		else {
	//			 Subjects.create({
	//			     studentId: req.body.studentId,
	//			     subjectId: req.body.subjectId,
	//			     subjectName: req.body.subjectName
	//			 },function(err,data){
	//			 	if (err)
	//			 		res.send(err);
	//			 });
				
	//		}
	//	})
				
	//});

	app.post('/api/flashcards/update', function(req,res) {//
    	Flashcards.update({ _id: req.body._id}, {$set: 
    		{
    		    question: req.body.question,
			    answer: req.body.answer,
    		}}, function (err, data) {
				if(err)
					res.send(err);
			})

    });

	app.post('/api/quizzes/update', function(req,res) {//
    	Quizzes.update({ _id: req.body._id}, {$set: 
    		{
    		    quizName: req.body.quizName,
    		}}, function(err, data) {
				if(err)
					res.send(err);
			})

    });


	//get individual course
	app.get('/api/quizzes/:quizId', function(req,res){//
		Courses.find({
			_id: req.params.quizId
		},function(err,quiz){
			if (err) 
				res.send(err);
			
			res.json(quiz);
		})
	});

	app.post('/api/students', function(req, res) {//

		Student.create({
			name: req.body.name,
			studentId: req.body.studentId
		},function(err,data){
			if (err)
				res.send(err);
		});

	});


	app.post('/api/flashcards', function(req, res) {//
		Flashcards.find({
			question: req.body.question,
			answer: req.body.answer,
			flashcardId: req.body.flashcardId,
            quizId: req.body.quizId
		},function(err,data) {
			if(data.length != 0) {}
			else {
				Flashcards.create({
					question: req.body.question,
					quizId: req.body.quizId,
					answer: req.body.answer,
				},function(err,data){
					if (err)
						res.send(err);
				});
			}
		})
	});


	//app.post('/api/grade', function(req, res) {
	//	Grade.find({
	//		grade: req.body.grade,
	//		sectionId: req.body.sectionId,
	//		totalGrade: req.body.totalGrade,
	//		name: req.body.name
	//	},function(err, data) {
	//		if (data.length != 0) {}
	//		else {
	//			Grade.create({
	//				grade: req.body.grade,
	//				sectionId: req.body.sectionId,
	//				totalGrade: req.body.totalGrade,
	//				name: req.body.name
	//			},function(err,data){
	//				if (err)
	//					res.send(err);
	//			});
	//		}
	//	})
	//});

	//app.delete('/api/quizzes/:quizId', function(req,res) {//
	//		Quizzes.remove({
	//			_id: req.params.quizId}, function(err) {
	//					if(err) {
	//						console.log(err);
	//					}
	//			})
	//});

	app.delete('/api/flashcards/:quizId',function(req,res) {//
		Flashcards.remove({
			quizId: req.params.quizId}, function(err) {
				if(err)
					console.log(err);
			})
	})
	//app.delete('/api/grade/:sectionId', function(req,res) {
	//	Grade.remove({
	//		sectionId: req.params.sectionId},function(err){
	//			if(err)
	//				console.log(err);
	//		})
	//})
	app.delete('/api/single/flashcards/:_id', function(req,res) {//
		Flashcards.remove({
			_id: req.params._id},function(err,data){
				if (err)
					console.log(err);
				res.send(req.params_id);
			})
	})
	app.delete('/api/quizzes/:quizId', function(req,res) {//

		Quizzes.remove({
			_id: req.params.quizId}, function(err, semester) {
				if(err)
					console.log(err)
		})
		Flashcards.find({ quizId: req.params.quizId }, function (err, flashcards) {
			
			if (err)
				console.log(err)
			for (var i = 0; i < flashcards.length; i++) {
			    Flashcards.find({ flashcardId: flashcards[i]._id }, function (err, flashcards) {
					if(err)
						console.log(err)
					//for (var j = 0 ; j < flashcards.length; j++) {
					//	Grade.remove({sectionId: sections[j]._id}, function(err,grades) {
					//		if(err)
					//			console.log(err);
					//	})
					//}
				}) 
				Flashcards.remove({quizId: quizzes[i]._id}, function(err,flashcards) {
					if(err)
						console.log(err);
				})
				
			}
	
		})
		
		
	});

	//app.get('/api/grade/:sectionId', function(req,res) {
	//	// use mongoose to get current grade with the section ID
	//	Grade.find({
	//		sectionId: req.params.sectionId,
	//	},function(err, grades) {
	//		if (err) // Error handling
	//			res.send(err);
	//		res.json(grades); // return all students in JSON
	//	});
	//});

	app.get('/api/flashcards/:quizId', function(req,res) {//
		// use mongoose to get sections with course ID
		Flashcards.find({
		    quizId: req.params.quizId,
		},function(err, quizzes) {
			if (err) // Error handling
				res.send(err);
			res.json(quizzes); // return all students in JSON
		});
	});

    // server routes
    // handle api calls
    // authentication routes

    // sample api route
    app.get('/api/students', function(req,res) {//
        // use mongoose to get all students in the database
        Student.find({},function(err, students) {
            if (err) // Error handling
                res.send(err);
            res.json(students); // return all students in JSON
        });
    });

    //app.get('/api/subjects/:subjectId', function(req,res) {//
    //    //get the semester with the semesterID
    //    Subjects.find({
    //        _id: req.params.subjectId
    //    }, function(err,subject){
    //        if(err)
    //            res.send(err)
    //        res.json(subject);
    //    });
    //});

    //get all courses with the semesterID
    app.get('/api/quizzes/:studentId',function(req,res){//
        Quizzes.find({
            studentId: req.params.studentId
        },function(err,quizzes) {
            if(err)
                res.send(err)
            res.json(quizzes);
        });
    });

    //app.get('/api/subjects/:studentId', function(req,res) {//
    //    // use mongoose to get all semester with the student ID
    //    Subjects.find({
    //        subjectId: req.params.subjectId
    //    },function(err, students) {
    //        if (err) // Error handling
    //            res.send(err);
    //        res.json(students); // return all students in JSON
    //    });
    //});

    //app.get('/api/semesters/current/:studentId', function(req,res) {
    //    // use mongoose to get current semester with the student ID
    //    Semesters.find({
    //        studentId: req.params.studentId,
    //        currentSemester: true,
    //    },function(err, students) {
    //        if (err) // Error handling
    //            res.send(err);
    //        res.json(students); // return all students in JSON
    //    });
    //});


    // app.post('/api/courses', function(req,res) {
    //     Courses.create({
    //         courseName: req.body.courseName,
    //         courseId: req.body.courseId,
    //         semesterId: req.body.semesterId,
    //     },function(err,data) {
    //         if (err)
    //             res.send(err);
    //     })
    // })
    // app.post('/api/semesters', function(req, res) {
    //     if(req.body.currentSemester==true) {
    //         Semesters.update({currentSemester: true}, {currentSemester: false}, {multi: true },function(err,res) {
    //             Semesters.create({
    //                 currentSemester: req.body.currentSemester,
    //                 studentId: req.body.studentId,
    //                 year: req.body.year,
    //                 name: req.body.name,
    //             },function(err,data){
    //                 if (err)
    //                     res.send(err);
    //             });

    //             if(err) {
    //                 res.send(err);
    //             }
    //         })
    //     }
    //     else {
    //         Semesters.create({
    //             currentSemester: req.body.currentSemester,
    //             studentId: req.body.studentId,
    //             year: req.body.year,
    //             name: req.body.name,
    //         },function(err,data){
    //             if (err)
    //                 res.send(err);
    //         });
    //     }
    // });

    //get individual course
    // app.get('/api/course/:courseId', function(req,res){
    //     Courses.find({
    //         _id: req.params.courseId
    //     },function(err,course){
    //         if (err) 
    //             res.send(err);
			
    //         res.json(course);
    //     })
    // });

    // app.post('/api/students', function(req, res) {

    //     Student.create({
    //         name: req.body.name,
    //         studentId: req.body.studentId
    //     },function(err,data){
    //         if (err)
    //             res.send(err);
    //     });

    // });


    // app.post('/api/section', function(req, res) {

    //     Section.create({
    //         sectionName: req.body.sectionName,
    //         courseId: req.body.courseId
    //     },function(err,data){
    //         if (err)
    //             res.send(err);
    //     });

    // });
    // app.post('/api/grade', function(req, res) {

    //     Grade.create({
    //         grade: req.body.grade,
    //         sectionId: req.body.sectionId,
    //         totalGrade: req.body.totalGrade
    //     },function(err,data){
    //         if (err)
    //             res.send(err);
    //     });

    // });


    //app.get('/api/grade/:sectionId', function(req,res) {
    //    // use mongoose to get current grade with the section ID
    //    Grade.find({
    //        sectionId: req.params.studentId,
    //    },function(err, grades) {
    //        if (err) // Error handling
    //            res.send(err);
    //        res.json(grades); // return all students in JSON
    //    });
    //});

    //app.get('/api/flashcards/:quizId', function(req,res) {
    //    // use mongoose to get sections with course ID
    //    Flashcards.find({
    //        quizId: req.params.quizId,
    //    },function(err, flashcards) {
    //        if (err) // Error handling
    //            res.send(err);
    //        res.json(flashcards); // return all students in JSON
    //    });
    //});

    ////Get all students
    //app.get('/api/users', function (req, res) {
    //    Student.find({}, function (err, Student) {
    //        if (err) // Error handling
    //            res.send(err);
    //        res.json(Student); // return all students in JSON
    //    })
    //});

    //get student by ID
    app.get('/api/users/:id', function (req, res) {
        Student.find({
            studentId: req.params.id,
        }, function (err, Student) {
            if (err) // Error handling
                res.send(err);
            res.json(Student); // return all students in JSON
        });
    });

    app.post('/api/users', function (req, res) {
        Student.create({
            name: req.body.name,
            studentId : req.body.id,
            password : req.body.password
        }, function (err, data) {
            console.log(data);
            if (err) {
                res.send(err);
            }
            res.json(data);
        })
    });

    app.post('/api/authenticate', function (req, res) {
        Student.findOne({
            studentId: req.body.username
        }, function (err, user) {
            if (err) throw err;
            console.log(user);
            if (!user) {
                return res.status(403).send({ success: false, msg: 'Authentication failed. User not found.', error: 'Email' });
            } else {
                // check if password matches
                user.comparePassword(req.body.password, function (err, isMatch) {
                    if (isMatch && !err) {
                        // if user is found and password is right create a token
                        //var token = jwt.encode(user, config.secret);
                        // return the information including token as JSON
                        res.json({ success: true });
                    } else {
                        res.status(403).send({ success: false, msg: 'Authentication failed. Wrong password.', error: 'Password'});
                        res.error = 'Authentication failed. Wrong password.';
                        return res;
                    }
                });
            }
        });
    });

    // create a new user account (POST http://localhost:8080/api/signup)
    //app.post('/api/users', function (req, res) {
    //    if (!req.body.name || !req.body.password || !req.body.studentId) {
    //        res.json({ success: false, msg: 'Please pass name and password.' });
    //    } else {
    //        var newStudent = new Student({
    //            name: req.body.name,
    //            password: req.body.password,
    //            studentId : req.body.studentId
    //        });
    //        // save the user
    //        newStudent.save(function (err) {
    //            if (err) {
    //                return res.json({ success: false, msg: 'Username already exists.' });
    //            }
    //            res.json({ success: true, msg: 'Successful created new user.' });
    //        });
    //    }
    //});

    //app.get('/api/authenticate', function (req, res) {
    //    Student.find({
    //        studentId: req.body.username,
    //        password: req.body.password
    //    }, function (err, data) {
    //        if (err) {
    //            res.send(err);
    //        }
    //        res.json(data);
	//    })
	//});

    //// route to authenticate a user (POST http://localhost:8080/api/authenticate)
	//app.post('/api/authenticate', function (req, res) {
	//    Student.findOne({
	//        name: req.body.name
	//    }, function (err, student) {
	//        if (err) throw err;
	//        console.log(student);
	//        if (!student) {
	//            res.send({ success: false, msg: 'Authentication failed. User not found.' });
	//        } else {
	//            // check if password matches
	//            student.comparePassword(req.body.password, function (err, isMatch) {
	//                if (isMatch && !err) {
	//                    // return the information including token as JSON
	//                    res.json(student);
	//                } else {
	//                    res.send(err);
	//                }
	//            });
	//        }
	//    });
	//});
	// Any routes to handle creating or deleting goes here?
	
	// Route to handle angular requests
	// app.get('*', function(req, res) {
	// 	res.sendfile('./Index.html');
    // });


    // route to a restricted info (GET http://localhost:8080/api/memberinfo)
	//apiRoutes.get('/memberinfo', passport.authenticate('jwt', { session: false }), function (req, res) {
	//    var token = getToken(req.headers);
	//    if (token) {
	//        var decoded = jwt.decode(token, config.secret);
	//        Student.findOne({
	//            name: decoded.name
	//        }, function (err, student) {
	//            if (err) throw err;

	//            if (!student) {
	//                return res.status(403).send({ success: false, msg: 'Authentication failed. User not found.' });
	//            } else {
	//                res.json({ success: true, msg: 'Welcome in the member area ' + student.name + '!' });
	//            }
	//        });
	//    } else {
	//        return res.status(403).send({ success: false, msg: 'No token provided.' });
	//    }
	//});

	//getToken = function (headers) {
	//    if (headers && headers.authorization) {
	//        var parted = headers.authorization.split(' ');
	//        if (parted.length === 2) {
	//            return parted[1];
	//        } else {
	//            return null;
	//        }
	//    } else {
	//        return null;
	//    }
	//};
};
