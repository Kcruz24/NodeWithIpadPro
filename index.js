const franc = require("franc");
const langs = require("langs");
const figlet = require("figlet");
const colors = require("colors");

const input = process.argv[2];
const langCode = franc(input);

const bye = "Descansa mi amor\nTE AMOOO";

figlet(bye, function(err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        
        return;
    }
    
    console.log(data);
});

