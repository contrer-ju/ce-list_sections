function onSearchOnList1() {
  let itemList1 = document
    .getElementById("itemList1")
    .getElementsByTagName("li");
  let searchQuery1 = document.getElementById("searchBox1").value;

  for (let i = 0; i < itemList1.length; i++) {
    if (
      itemList1[i].children[0].children[1].innerText
        .toLowerCase()
        .includes(searchQuery1.toLowerCase())
    ) {
      itemList1[i].classList.remove("dont-show");
    } else {
      itemList1[i].classList.add("dont-show");
    }
  }
}

function onSearchOnList2() {
  let itemList2 = document
    .getElementById("itemList2")
    .getElementsByTagName("li");
  let searchQuery2 = document.getElementById("searchBox2").value;

  for (let i = 0; i < itemList2.length; i++) {
    if (
      itemList2[i].children[0].children[1].innerText
        .toLowerCase()
        .includes(searchQuery2.toLowerCase())
    ) {
      itemList2[i].classList.remove("dont-show");
    } else {
      itemList2[i].classList.add("dont-show");
    }
  }
}
