$(document).ready(function() {
  console.log("hi jquery");

  let imageUrls = {
    img1: "./assets/img1.png",
    img2: "./assets/img2.png",
    img3: "./assets/img3.png"
  }

  function createRow(howManyCol){
    for(let i = 1; i <= howManyCol; i++){
      $(".squares").append(`<div class="${"img" + i}"></div>`);
    }
    $(".squares").append("<br>");
  }

  function createSquare(howManyRows, howManyCol) {
    for (let i = 0; i < howManyRows; i++) {
      createRow(howManyCol);
    }
  }

  //create the game board
  createSquare(2, 2);


  // click function which adds an image to each div
  let clickedImages = [];
  $(".squares > div").click(function() {
    //give a div an image
    if ($(this).children("img").length == 0) {
      $(this).append(`<img src="${imageUrls[$(this).attr("class")]}" height="100" width="100" alt="${$(this).attr("class")}">`);  
    }

    //copy into a new array, the 'alt' attributes of all clicked images 
    let currentImages = $(".squares > div").find("[img]");
    console.log(currentImages[1]);

    testMatch($(this), currentImages)
  })




  function testMatch(userClick, currentImages){
    // currentImages.filter(img => img == userClick.find("img").attr("alt"))
    // console.log(currentImages);
  }


//create function to delete image divs if two are clicked and match, otherwise flip them back facedown
  //flipping card is just a matter of adding/removing the image tags within each div
    //maybe create a function to handle "flipping" the cards
//create function to shuffle image divs
  //maybe copy divs into an array, delete the divs, shuffle the array, place back divs





});

