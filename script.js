$(document).ready(function() {
  console.log("hi jquery");

  function createRow(howManyEl){
    for(let i = 1; i <= howManyEl; i++){
      $(".squares").append(`<div>${i}</div>`);
    }
    $(".squares").append("<br>"); //remove this line when creating css
  }

  function giveClasses() {
    let i = 1;
    $(".squares > div").each(function(){
      $(this).addClass("box" + i);
      i += 1;
    })
  }

  function createSquare(howManyRows, howManyEl) {
    for (let i = 0; i < howManyRows; i++) {
      createRow(howManyEl);
    }
    giveClasses();
  }

  createSquare(3, 3);












});

