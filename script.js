$(document).ready(function() {
  console.log("hi jquery");

  let imageUrls = [
    "./assets/img1.png",
    "./assets/img2.png",
    "./assets/img3.png",
    "./assets/img4.png",
    "./assets/img5.png",
    "./assets/img6.png",
    "./assets/img7.png",
    "./assets/img8.png",
    "./assets/img9.png",
    "./assets/img10.png"
  ];

  function createRow(howManyCol, idNum) {
    for (let i = 1; i <= howManyCol; i++) {
      $(".squares").append(
        `<div class="${"img" + i}" id="square${idNum}"></div>`
      );
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

  $(".squares > div").click(clickEvent);

  function clickEvent(e) {
    //give a div an image.
    if ($(this).children("img").length == 0) {
      // ^give me an arr of imgs of the clicked div. If it's an empty arr, give it an image.
      var image = $("<img/>");
      image.attr(
        "src",
        imageUrls[Math.floor(Math.random() * imageUrls.length)]
      );
      image.attr("height", "100");
      image.attr("width", "100");
      image.attr("alt", "myImage");
      $(this).append(image);

      // $(this).append(
      //   `<img src="${
      //     imageUrls[$(this).attr("class")]
      //   }" height="100" width="100" alt="${$(this).attr("class")}">`
      // );

      // setTimeout(function(){  //hide cards after 1 second(s):
      //   console.log($(this).remove("img"));
      // }, 300);

      var userClick = $(this);

      clickedImages.push(userClick);
      //console.log("length of clickedImages", clickedImages.length);
      if (clickedImages.length === 2) {
        // check for matches
        checkForMatch(clickedImages);
      }

      if (clickedImages.length >= 2) {
        // reset clickedImages array
        setTimeout(function() {
          clickedImages = [];
        }, 1000);
      }
    }
  }

  function checkForMatch(images) {
    console.log(images);
    if (images.length === 2) {
      if (images[0].attr("class") === images[1].attr("class")) {
        console.log("CORRECT");
        for (var i = 0; i < images.length; i++) {
          images[i].hide();
        }
      } else {
        console.log("WRONG");
        for (var i = 0; i < images.length; i++) {
          images[i]
            .find("img")
            .attr(
              "src",
              "http://www.clker.com/cliparts/j/W/M/s/V/w/wrong-mark-md.png"
            );
          images[i].find("img").addClass("wrong");
        }
      }
    }
  }

  // function testMatch(userClick) {
  //   clickedImages.push(userClick); //array of user clicked divs, in order they were clicked
  //   // let deleteIfTwoExist = 0;
  //   for (let i = 0; i < 1; i++) {
  //     if (
  //       userClick.attr("class") === clickedImages[i].attr("class") &&
  //       clickedImages.length === 2
  //     ) {
  //       console.log("correct");
  //     } else {
  //       console.log("wrong");
  //       clickedImages[i].addClass(".squares");
  //       clickedImages = [];
  //     }
  //     // if (deleteIfTwoExist == 1) {
  //     //   //delete from the clicked element from divs
  //     //   setTimeout(function(){
  //     //     $(".squares").find(`.${clickedImages[i]}`).remove() //deletes the matched divs
  //     //   }, 200);
  //     // }
  //   }
  // }

  // function testMatch(userClick) {
  //   clickedImages.push(userClick); //array of user clicked divs, in order they were clicked
  //   console.log(clickedImages);
  //   if (clickedImages.length <= 2) {
  //     for (var i = 0; i < clickedImages.length; i++) {
  //       if (
  //         clickedImages.length === 2 &&
  //         userClick.attr("class") == clickedImages[i].attr("class")
  //       ) {
  //         console.log("CORRECT!");
  //       } else {
  //         clickedImages[i].addClass(".wrong");
  //         console.log("INCORRECT!");
  //       }
  //     }
  //   } else {
  //     clickedImages = [];
  //   }
  // }

  // if ($(".squares").children("div").length == 0) {
  //   $(".win").append("<div>YOU WIN!</div>");
  // }

  //create function to delete image divs if two are clicked and match, otherwise flip them back facedown
  //flipping card is just a matter of adding/removing the image tags within each div
  //maybe create a function to handle "flipping" the cards
  //create function to shuffle image divs
  //maybe copy divs into an array, delete the divs, shuffle the array, place back divs
});
