let inputBoxUpdateItem = document.getElementById("inputBoxUpdateItem");
let buttomUpdateItem = document.getElementById("buttomUpdateItem");

function onGetItemOnList1(event) {
  let valueToUpdate = event.children[0].children[1].innerHTML;
  inputBoxUpdateItem.disabled = false;
  inputBoxUpdateItem.value = valueToUpdate;
  inputBoxUpdateItem.setAttribute("data-id", event.id);
  buttomUpdateItem.disabled = false;
}

function onUpdateItemOnList() {
  let itemToUpdateOnList1 = document.getElementById(
    inputBoxUpdateItem.dataset.id
  );
  itemToUpdateOnList1.children[0].children[1].innerHTML =
    inputBoxUpdateItem.value;
  inputBoxUpdateItem.value = "";
  inputBoxUpdateItem.disabled = true;
  buttomUpdateItem.disabled = true;
}
