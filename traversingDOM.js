console.log(" ***** TRAVERSING DOM **** ");

// *=========================================
// *             TRAVERSING DOM
// *=========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Özellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapılabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*--------------------------------------------------------

//! parentElement, parentNode
const addItem = document.querySelector(".add-item");
console.log(addItem);

console.log(addItem.parentElement); //? main
console.log(addItem.parentNode.parentNode); //? body

//! closest(): belirtilen elementin parent'larin ilk uygun parent'i secer

const list = document.querySelector(".list");
console.log(list.textContent);

console.log(list.closest("section")); //?//! closest(): belirtilen elementin parent'larin ilk uygun parent'i secer;

console.log(list.closest("body").querySelector("header h1").innerText);
