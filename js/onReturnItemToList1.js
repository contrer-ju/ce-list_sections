let itemUlList1 = document.getElementById("itemList1");

function onReturnItemToList1(event) {
  let itemList2Length = document
    .getElementById("itemList2")
    .getElementsByTagName("li").length;
  if (itemList2Length === 1)
    document.getElementById("messageList2").classList.remove("dont-show");
  document.getElementById("messageList1").classList.add("dont-show");

  let itemIDonList1 = Date.now();
  let returnItemToList1 = event;

  returnItemToList1.setAttribute("id", "list1Item" + itemIDonList1);
  returnItemToList1.children[0].children[0].setAttribute(
    "onclick",
    "onAddItemToList2(list1Item" + itemIDonList1 + ")"
  );
  returnItemToList1.children[1].children[0].setAttribute(
    "onclick",
    "onGetItemOnList1(list1Item" + itemIDonList1 + ")"
  );
  returnItemToList1.children[1].children[0].setAttribute(
    "class",
    "fa fa-pencil icons-size cursor-pointer"
  );
  returnItemToList1.children[1].children[1].setAttribute(
    "onclick",
    "onRemoveItemFromList1(list1Item" + itemIDonList1 + ")"
  );

  itemUlList1.appendChild(returnItemToList1);
}
