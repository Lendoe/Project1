$(document).ready(function() {
  console.log("hi jquery");

  let imageUrls = {
    img1: "./assets/img1.png",
    img2: "./assets/img2.png",
    img3: "./assets/img3.png",
    img4: "./assets/img4.png",
    img5: "./assets/img5.png",
    img6: "./assets/img6.png",
    img7: "./assets/img7.png",
    img8: "./assets/img8.png",
    img9: "./assets/img9.png",
    img10: "./assets/img10.png"
  }

  function createRow(howManyCol, idNum){
    for(let i = 1; i <= howManyCol; i++){
      $(".squares").append(`<div class="${"img" + i}" id="square${idNum}"></div>`);
      idNum += 1;
    }
    $(".squares").append("<br>"); //maybe remove?
  }

  function createSquare(howManyRows, howManyCol) {
    let idNum = 1;
    for (let i = 0; i < howManyRows; i++) {
      createRow(howManyCol, idNum);
      idNum += howManyCol;
    }
  }

  //create the game board
  createSquare(2, 10); //make sure board is a 2 by X since this is a match 2 game, not match 2+


  // click function which adds an image to each div
  let clickedImages = [];

  $(".squares > div").click(function() {
    //give a div an image. 
    if ($(this).children("img").length == 0) {
    // ^give me an arr of imgs of the clicked div. If it's an empty arr, give it an image.
      $(this).append(`<img src="${imageUrls[$(this).attr("class")]}" height="100" width="100" alt="${$(this).attr("class")}">`);  
      
      // setTimeout(function(){  //hide cards after 1 second(s):
      //   console.log($(this).remove("img"));
      // }, 300);

      testMatch($(this));
    }
  })




  function testMatch(userClick){
    clickedImages.push(userClick.attr("class")); //array of user clicked divs, in order they were clicked
    let deleteIfTwoExist = 0;
    for (let i = 0; i < clickedImages.length - 1; i++) {
      if (userClick.attr("class") == clickedImages[i]) {
        deleteIfTwoExist++;
        if (deleteIfTwoExist == 1) {
          //delete from the clicked element from divs
          setTimeout(function(){ 
            $(".squares").find(`.${clickedImages[i]}`).remove() //deletes the matched divs
          }, 200);
        }
      }
    }

   


    if ($(".squares").children("div").length == 0) {
      $(".win").append("<div>YOU WIN!</div>");
    }
  }


//create function to delete image divs if two are clicked and match, otherwise flip them back facedown
  //flipping card is just a matter of adding/removing the image tags within each div
    //maybe create a function to handle "flipping" the cards
//create function to shuffle image divs
  //maybe copy divs into an array, delete the divs, shuffle the array, place back divs





});

