
d = new Date();

let date = d.getDate() + '/' + (d.getMonth()+1) + '/' +d.getFullYear();
let heure = d.getHours() + ":" + d.getMinutes();
let dateheure = date+' '+heure;

function logMessage(message){
    console.log(dateheure + ' : ' + message);
}