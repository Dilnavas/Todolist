function addButtonClick() {
  var toDo = $(".add-box").val();
  $(".todos").append("<input>","<button>REMOVE</button>","<br>");
  var elementsInTodosClass = $(".todos").children();
  console.log(elementsInTodosClass);
  for (var i = 0; i < elementsInTodosClass.length; i = i + 3) {
    $(elementsInTodosClass[i]).addClass("remove-box");
    $(elementsInTodosClass[i + 1]).addClass("remove-btn");
    $(elementsInTodosClass[i]).addClass("box" + i);
    $(elementsInTodosClass[i + 1]).addClass("btn" + i);
    $(elementsInTodosClass[i + 2]).addClass("br" + i);
    if ($(".box" + i).val() == "") {
      $(".add-box").val("");
      $(".box" + i).val(toDo);
    }

  }
  $(".remove-btn").click(function(){
    var clickedButtonClassList = this.classList;
    var buttonClass = clickedButtonClassList[1];
    var buttenClassNumber = buttonClass.substring(3,buttonClass.length);
    $(".box" + buttenClassNumber).remove();
    $(this).remove();
    $(".br" + buttenClassNumber).remove();
    var elementsInTodosClass2 = $(".todos").children();
    console.log(elementsInTodosClass2);
  });
}
