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

//* Add Buton

const addButon = document.getElementById("btn");
console.log(addButon);

addButon.style.backgroundColor = "#bebe";
addButon.style.border = "none";
addButon.style.borderRadius = "10px";
addButon.style.padding = "0.6rem";

//? Deger atama
addButon.value = "SAVE";

//* h1
const h1 = document.getElementById("heading1");
console.log(h1);

//? Deger atama
h1.textContent = "DOM Introduction";

//? Deger okuma
console.log(h1.textContent);
console.log(h1.innerText);
console.log(h1.innerHTML);

// *=======================================
// *          GETELEMENTSBYTAGNAME ()
// *=======================================

const myInputs = document.getElementsByTagName("input");
console.log(myInputs); //? [input#input, input#btn, input: input#input, btn: input#btn]

//! HTML Collection (Array-Like) dondurur.
console.log("Size:", myInputs.length);

console.log(myInputs[0]);
console.log(myInputs[1]);

console.log(document.getElementsByTagName("h3")[0]);

//? indisle erişime ek olarak item() metodu ile de erisim yapılabilir.
console.log(myInputs.item(1));

//? Array'e cevilebilir.
const myLists = document.getElementsByTagName("Li");
const myListsArr = [...myLists]; //?Array'e cevir
console.log(myListsArr);

myListsArr.forEach((li) => (li.style.color = "red"));

//?Alternative olarak
const myListsArr1 = Array.from(myLists); //?Array'e cevir
console.log(myListsArr1);
myListsArr1.map((li) => (li.style.listStyleType = "none"));

// *===================================================
// *            GETELEMENTSBYCLASSNAME ()
// *===================================================
const lists = document.getElementsByClassName("list"); //? HTMLCollection
//   (5)[(li.list, li.list, li.list, li.list, li.list)];
console.log(lists);

[...lists].forEach((li) => console.log(li));

const listsArr = [...lists];
listsArr.forEach((li) => console.log(li));

lists[2].innerHTML = "Javascript language";
lists[2].innerHTML = `<h1>Javascript</h1>`;
lists[3].innerText = `<h1>React</h1>`;
lists[4].textContent = `<h1>VUE</h1>`;

//* ==============================================
//*           QUERYSELECTOR( )
//* ==============================================
//! Query Selector ile id, tag, class seçilebilir.
//! bu secici akısta gördüğü ilk elementi secer

//? id secildi (#)
const header = document.querySelector("#header");
console.log(header);

//? class secildi (.)
const itemLists = document.querySelector(".list");
console.log(itemLists);

//? h2 tag'ı secilmis oldu.
const h2 = document.querySelector("h2");
console.log(h2);

//? CSS deki selector mantigi kullanabilir
const otherH2 = document.querySelector("section h2");

const buton = document.querySelector("section.add-item #btn");
console.log(buton);

const react = document.querySelector("section.item-list ul li:nth-child(4)");
console.log(react);

//* =======================================================
//*                 QUERYSELECTORALL ()
//* =======================================================

const listeler = document.querySelectorAll("ul li");
console.log(listeler); //? NodeList(5) [li. list, li. list, li. list, li. list, li.list]

listeler.forEach((li) => console.log(li));

//? alternative olarak
for (const liste of listeler.values()) {
  console.log(liste);
}

for (const liste of listeler.keys()) {
  console.log(liste);
}
