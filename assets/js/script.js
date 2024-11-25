
//table collapsible section

// get all tags with data-title class
let coll = document.getElementsByClassName('data-title');
let i;

// loop in all tags with data-title class
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
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

//table search and filtered section

function FilterTable() {
  // Declare variables
  let i, j, k;
  let input, filter, txtValue, tdAll, td, tdChildren, tdChild;
  let bRowTitle;
  input = document.getElementById("inputForSearch");
  filter = input.value.toUpperCase();
  tbody01 = document.getElementById("tbody01");
  bRowTitle = false;

  tr = tbody01.getElementsByTagName("tr");
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i += 2) {
    bRowTitle = true;
    tdAll = tr[i].getElementsByTagName("td");
    // Loop through data title row
    for (j = 0; j < tdAll.length; j++) {
      td = tdAll[j];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          tr[i + 1].style.display = "";
          bRowTitle = false;
          break;
        }
        else {
        }
      }
    }
    if (bRowTitle == true) {
      tdAll = tr[i + 1].getElementsByTagName("td");
      td = tdAll[0];
      if (td.children.length > 0) {
        tdChildren = td.getElementsByTagName("p");
        console.log(tdChildren.length);
        for (k = 0; k < tdChildren.length; k++) {
          console.log("s");
          tdChild = tdChildren[k];
          if (tdChild) {
            txtValue = tdChild.textContent || tdChild.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
              tr[i + 1].style.display = "";
              break;
            }
            else {
              tr[i].style.display = "none";
              tr[i + 1].style.display = "none";
            }
          }
        }
      }
    }
  }
}