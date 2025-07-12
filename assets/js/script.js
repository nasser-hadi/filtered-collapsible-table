"use strict";

/*_____________________________________________ table collapsible section ___________________________________________*/

let tbodyChildren;
let l;


let tbody01;
// Get the element with the specified id 
tbody01 = document.getElementById('tbody01');
// Get only direct children (tr tags) of the tbody element with the ID tbody01
tbodyChildren = tbody01.children;

// loop in all tags with data-title class
for (l = 0; l < tbodyChildren.length; l += 2) {
   tbodyChildren[l].addEventListener('click', function () {
      // find the last element after every data-title 
      const content = this.nextElementSibling;
      //toggle collapse class to data-content 
      content.classList.toggle('collapse');
      content.classList.toggle('expand');
      //this is last <td> tag in data-title
      const child = this.lastElementChild;
      // this is the button in td tag
      const childButton = child.children;
      // toggle down class to button tag
      childButton[0].classList.toggle('up');
      childButton[0].classList.toggle('down');
   });
}

/*______________________________________________ table search and filtered section ___________________________________*/

function FilterTable() {
   // Declare variables
   let i, j, k;

   let input;
   let filterText;
   let txtValue;

   let tdAll;
   let td;
   let pAll;
   let p;
   let trAll

   let trAllNested;
   let tdAllNested;
   let tdNested;
   
   let m, n;

   let bDataTitle;

   // Get the element with the specified id
   input = document.getElementById('inputForSearch');
   filterText = input.value.toUpperCase();

   bDataTitle = false;

   trAll = tbodyChildren;

   // Loop through odd rows of main table, and hide those who don't match the search query
   for (i = 0; i < trAll.length; i += 2) {
      bDataTitle = true;
      tdAll = trAll[i].querySelectorAll('td');

      // Loop through of all td tag in a tr's in data-title section
      for (j = 0; j < tdAll.length; j++) {
         td = tdAll[j];
         txtValue = td.textContent || td.innerText;
         if (txtValue.toUpperCase().indexOf(filterText) > -1) {
            trAll[i].style.display = "";
            trAll[i + 1].style.display = "";
            bDataTitle = false;
            break;
         }
         else {
         }
      }

      // This is the data-content section

      if (bDataTitle == true) {

         tdAll = trAll[i + 1].querySelectorAll('td');
         td = tdAll[0];

         pAll = td.querySelectorAll('p');

         if (pAll.length > 0) {
            for (k = 0; k < pAll.length; k++) {
               p = pAll[k];
               txtValue = p.textContent || p.innerText;
               if (txtValue.toUpperCase().indexOf(filterText) > -1) {
                  trAll[i].style.display = "";
                  trAll[i + 1].style.display = "";
                  break;
               }
               else {
                  trAll[i].style.display = "none";
                  trAll[i + 1].style.display = "none";
               }
            }
         } else  {

            for (m = 0; m < trAllNested.length; m++) {
               tdAllNested = trAllNested[m].querySelectorAll('td');

               // Loop through data-title section
               for (n = 0; n < tdAllNested.length; n++) {
                  tdNested = tdAllNested[n];
                  txtValue = tdNested.textContent.trim() || tdNested.innerText.trim();
                  if (txtValue) {
                     if (txtValue.toUpperCase().indexOf(filterText) > -1) {
                        // This tag(tr) is data-title
                        trAll[i].style.display = "";
                        // This tag(tr) is data-content
                        trAll[i + 1].style.display = "";
                        bDataContentNested = false;
                        break;
                     }
                     else {
                        trAll[i].style.display = "none";
                        trAll[i + 1].style.display = "none";
                     }
                  }
               }
            }

         }
      }
   }
}

/*____________________________________________________________ highlight section ___________________________________*/


let inputT = document.getElementById('inputForSearch');
let elmntAll = document.getElementsByClassName('marked');
let elm, txtValue;
inputT.addEventListener('input', (event) => {
   const inputText = event.target.value;
   for (l = 0; l < elmntAll.length; l++) {
      elm = elmntAll[l];
      if (elm) {
         txtValue = elm.textContent || elm.innerText;
         const regexInputText = new RegExp(inputText, 'gi');

         txtValue = txtValue.replace(/(<mark>|<\/mark>)/gim, '');
         const newText = txtValue.replace(regexInputText, '<mark>$&</mark>');
         elm.innerHTML = newText;
      }
   }
});
