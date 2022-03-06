let itemUList1 = document.getElementById("itemList1");
let newItemForm = document.getElementById("newItemForm");

function onAddItemToList1(event) {
  let input = newItemForm.elements["inputBoxAddItem"].value;

  if (input !== "") {
    document.getElementById("messageList1").classList.add("dont-show");
    let itemIDonList1 = Date.now();

    let newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.setAttribute(
      "onclick",
      "onAddItemToList2(list1Item" + itemIDonList1 + ")"
    );
    let newLabel = document.createElement("span");
    newLabel.innerHTML = input;
    let itemSpan = document.createElement("span");

    let newTrashIcon = document.createElement("i");
    newTrashIcon.setAttribute("class", "fa fa-trash icons-size cursor-pointer");
    newTrashIcon.setAttribute(
      "onclick",
      "onRemoveItemFromList1(list1Item" + itemIDonList1 + ")"
    );
    let newPencilIcon = document.createElement("i");
    newPencilIcon.setAttribute(
      "class",
      "fa fa-pencil icons-size cursor-pointer"
    );
    newPencilIcon.setAttribute(
      "onclick",
      "onGetItemOnList1(list1Item" + itemIDonList1 + ")"
    );
    let iconsSpan = document.createElement("span");

    let newItemLi = document.createElement("li");
    newItemLi.setAttribute("id", "list1Item" + itemIDonList1);
    newItemLi.classList.add("space-between-flex");

    iconsSpan.appendChild(newPencilIcon);
    iconsSpan.appendChild(newTrashIcon);
    itemSpan.appendChild(newCheckbox);
    itemSpan.appendChild(newLabel);
    newItemLi.appendChild(itemSpan);
    newItemLi.appendChild(iconsSpan);
    itemUList1.appendChild(newItemLi);
  }

  newItemForm.elements["inputBoxAddItem"].value = "";
  event.preventDefault();
}

newItemForm.addEventListener("submit", onAddItemToList1, false);
