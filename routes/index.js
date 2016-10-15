// var models  = require('../models');
// var express = require('express');
// var router  = express.Router();


// module.exports = router;



var models  = require('../models');
var express = require('express');
var router  = express.Router();

//this is the users_controller.js file

//  router.get('/', function(req, res) {
//   res.render('index');
// });



router.get('/', function(req, res) {

  // SOLUTION:
  // =========
  // use the burgertable model to find all burgers,
  // and use the include option to grab info from the User model.
  // This will let us show the cat and it's owner.
  models.burgertables.findAll({
  })
  // connect the findAll to this .then
  .then(function(burgertables) {
    // grab the user info from our req.
    // How is it in our req?
    // This info gets saved to req via the users_controller.js file.
    res.render('index', {
      // burger_name: req.session.burger_name,
      burgertables:burgertables
    });
  });
});


router.post('/create', function(req, res) {
	models.burgertables.create({
		burger_name:req.body.name,
		devoured:0
	})
	.then(function() {
    res.redirect('/');
  });
});


router.put('/update/:id', function(req,res) {
  // SOLUTION:
  // =========
  // use the burgertable model to update a burger's  status
  // based on the boolean passed in req.body devoured
  // and the id of the cat (as passed in the url)
  models.burgertables.update(
  {
    devoured: req.body.devoured
  },
  {
    where: { id : req.params.id }
  })
  // connect it to this .then.
  .then(function (result) {
    res.redirect('/');
  }, function(rejectedPromiseError){

  });
});



router.delete('/delete/:id', function(req,res) {
  // SOLUTION:
  // =========
  // use the Cat model to delete a cat
  // based on the id passed in the url
  models.burgertables.destroy({
    where: {
      id: req.params.id
    }
  })
  // connect it to this .then.
  .then(function() {
    res.redirect('/');
  });

});



module.exports = router;
