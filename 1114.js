$(document).ready(function () {

  $(".changeToOne").click(function () {
    //當aaa類別的物件被點擊後的功能
    $("#exam").text(1); //id=bbb 的text內容更改為1
  });
  $(".changeToTwo").click(function () {
    $("#exam").text(2); 
  });

  $(".hide").click(function () {
    $(".main").slideUp(300);
    //main類別的全部物件會有動畫出現
  });
  $(".show").click(function () {
    $(".main").slideDown(300);
  });

  $("#prependBtn1").click(function () {
    $("#prependTest1").prepend("新增的 ");
  });

  $("#addBtn1").click(function () {
    $("#list1").append("<li>list");
  });

  $("#addBtn2").click(function () {
    $("#list2").append("<li>list");
  });
  $("#removeBtn1").click(function (){
    $("#list2 li:last-child").remove();
  });

  $("#addBtn3").click(function () {
    $("#list3").append("<li>新增的 <button class='removeBtn2'>移除</button></li>");
  });
  $("#removeBtn2").click(function (){
    $("#list3 li:last-child").remove();
  });
  $("#list3").on("click", ".removeBtn2", function () {
    $(this).closest("li").remove();
  });
});
