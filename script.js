$(document).ready(function() {
  console.log("hi jquery");

  let imageUrls = {
    img1: "./assets/img1.png",
    img2: "./assets/img2.png",
    img3: "./assets/img3.png"
  }

  function createRow(howManyEl){
    for(let i = 1; i <= howManyEl; i++){
      $(".squares").append(`<div class="${"img" + i}"></div>`);
    }
    $(".squares").append("<br>"); //remove this line when creating css
  }

  function giveClasses() {
    let i = 1;
    $(".squares > div").each(function(){
      $(this).addClass("img" + i);
      i += 1;
    })
  }

  function createSquare(howManyRows, howManyEl) {
    for (let i = 0; i < howManyRows; i++) {
      createRow(howManyEl);
    }
  }

  createSquare(2, 2);

  $(".squares > div").click(function() {
    $(this).append(`<img src="${imageUrls[$(this).attr("class")]}" height="100" width="100">`);
  })


//create function to shuffle image divs
  //maybe copy divs into an array, delete the divs, shuffle the array, place back divs
//create function to delete image divs if two are clicked and match, otherwise flip them back facedown
  //flipping card is just a matter of adding/removing the image tags within each div
    //maybe create a function to handle "flipping" the cards







});

