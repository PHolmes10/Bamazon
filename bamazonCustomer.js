var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 8889,

    user: "root",

    password: "root",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    // readProducts();
    start();
  });

function start() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        // console.log(results);
    inquirer
    .prompt([
        {
        name: "whichID",
        message: "What is the ID of the product you would like to buy?",
        type: "list",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].item_id.toString());
            }
            return choiceArray;
          },
    },
    {
        name: "howMany",
        type: "input",
        message: "How many units would you like to buy?"
    }
 ]).then(function(answer){
    //  console.log(answer.howMany);
    var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id.toString() === answer.whichID) {
            chosenItem = results[i];
          };
        };
        if (chosenItem.stock_quantity < answer.howMany){
            console.log("Insufficient Quantity!");
            start();
        } else {
            console.log("Order fulfilled!");

        };
 });
})
};

function readProducts() {
    console.log("Showing all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(res);
    });
  };