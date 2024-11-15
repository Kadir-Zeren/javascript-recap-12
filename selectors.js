console.log(" ***** SELECTORS ***** ");

document.title = "DOM DOM 👍";

//*========================================
//*         GETELEMENTBYID()
//*========================================
// document.getElementById("header").style.border = "1px solid red";
const myHeader = document.getElementById("header");
console.log(myHeader);

myHeader.style.backgroundColor = "red";
myHeader.style.color = "white";
