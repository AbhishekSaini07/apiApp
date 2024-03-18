var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {


  
  res.render('index',{title: "Bajaj"});
});
router.post('/bfhl', function(req, res, next) {
  const data = req.body.data;
  let user = {
    "is-success": false,
    "user_id": "john_doe_17091999", 
    "email" : "john@xyz.com",
"roll_number":"ABCD123",
"odd_numbers": [],
"even_numbers": [],
"alphabets": []
};
data.forEach(element => {
  if (!isNaN(element)) {
    // Check if the element is a number (using isNaN)
     // Convert to number and push
    element = Number(element);
    console.log(element);
    
    (element%2==0)? user.even_numbers.push(element):user.odd_numbers.push(element);

}
  else{
      user.alphabets.push(element.toUpperCase());
  }
});

console.log(data);
res.json(user);


});

module.exports = router;
