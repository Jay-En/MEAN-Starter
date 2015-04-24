// exports.render = function (req,res) {

// if(req.session.lastVisit){
// 	console.log(req.session.lastVisit);

// }

// req.session.lastVisit = new Date();

// res.render('index',{
// 	title : 'Hello World',
// 	userFullName: req.user ? req.user.fullName : ''
// 	});

// };


exports.render = function(req, res) {
	  console.log(JSON.stringify(req.user));
	res.render('index', {
		title: 'Hello World',
		user: JSON.stringify(req.user)
	});
};