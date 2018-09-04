const clpsm = require("./clpsm.js")
clpsm(2,["p"]).then( text => {
    console.log(text)
  }, err => {
    console.log(err)
  })