let itemUList2 = document.getElementById("itemList2");

function onAddItemToList2(event) {
  let itemList1Length = document
    .getElementById("itemList1")
    .getElementsByTagName("li").length;
  if (itemList1Length === 1)
    document.getElementById("messageList1").classList.remove("dont-show");
  document.getElementById("messageList2").classList.add("dont-show");
  let itemIDonList2 = Date.now();
  let newItemToList2 = event;

  newItemToList2.setAttribute("id", "list2Item" + itemIDonList2);
  newItemToList2.children[0].children[0].setAttribute(
    "onclick",
    "onReturnItemToList1(list2Item" + itemIDonList2 + ")"
  );
  newItemToList2.children[1].children[0].removeAttribute("onclick");
  newItemToList2.children[1].children[0].setAttribute(
    "class",
    "fa fa-pencil icons-size disabled"
  );
  newItemToList2.children[1].children[1].setAttribute(
    "onclick",
    "onRemoveItemFromList2(list2Item" + itemIDonList2 + ")"
  );

  itemUList2.appendChild(newItemToList2);
}
