function FilterTable() {
  // Declare variables
  let input, filter, table, tr, tdAll, td, i, j, txtValue;
  input = document.getElementById("inputForSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("dataTable");
  tr = table.getElementsByTagName("tr");



  for (i = 1; i < tr.length; i += 2) {
    tdAll = tr[i].getElementsByTagName("td");
    for (j = 0; j < tdAll.length; j++) {
      td = tr[i].getElementsByTagName("td")[j];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          tr[i + 1].style.display = "";

          break;
        } else {
          tr[i].style.display = "none";
          tr[i + 1].style.display = "none";

        }
      }
    }
  }
}


let coll = document.getElementsByClassName("data-row");
let i;
let button = document.querySelector('.up-down');

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    content.classList.toggle("collapse");
    const child = this.lastElementChild;
    const childButton = child.children;
    childButton[0].classList.toggle("down");
  });
}


