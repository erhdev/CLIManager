var mysql = require("mysql");
var inquirer = require('inquirer')
var connection = mysql.createConnection({
  host: "hwdb2.cll405rmik9x.us-east-1.rds.amazonaws.com",
  port: 3306,

  user: "rootUser",
  password: "rootUser123",
  database: 'hwdb2'
});

connection.connect(function(err) {
  if (err) throw err 
  else{
  console.log("connected as id")};
});

// I need to run a test where I do an inquirer prompt and then run a function that
// changes the db based on the result
// I think I need to set up the database on AWS before I start any of this

inquirer.prompt([
  {
    name: 'prodID',
    type: 'list',
    choices: [],
  }
]).then(function(answers){
  
  
  // check if the desired quantity is available with 
  // USE shamazondb 
  //connection.query()
  // SELECT stock FROM products WHERE id = answers.prodID, function(err, res) {
  // if answer.amount > res {console.log('We don't have enough products to meed your demand! Please request something more reasonable.)}
  // else {
  //      UPDATE products SET stock = stock - answer.amount WHERE id = answers.prodID 
  //   }
  // } 
})