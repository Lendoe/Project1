$(document).ready(function() {
  console.log("hi jquery");

  let imageUrls = {
    img1: "./assets/img1.png",
    img2: "./assets/img2.png",
    img3: "./assets/img3.png"

  }
  function createRow(howManyEl){
    for(let i = 1; i <= howManyEl; i++){
      $(".squares").append(`<div><img src="${imageUrls["img"+i]}" alt="img${i}" height="100" width="100"></div>`);
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

  createSquare(2, 2);












});

