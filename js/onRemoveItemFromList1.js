let itemList1 = document.getElementById("itemList1");

function onRemoveItemFromList1(event) {
  let itemList1Length = document
    .getElementById("itemList1")
    .getElementsByTagName("li").length;
  if (itemList1Length === 1)
    document.getElementById("messageList1").classList.remove("dont-show");

  itemList1.removeChild(event);
}
