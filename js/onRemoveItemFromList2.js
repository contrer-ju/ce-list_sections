let itemList2 = document.getElementById("itemList2");

function onRemoveItemFromList2(event) {
  let itemList2Length = document
    .getElementById("itemList2")
    .getElementsByTagName("li").length;
  if (itemList2Length === 1)
    document.getElementById("messageList2").classList.remove("dont-show");

  itemList2.removeChild(event);
}
