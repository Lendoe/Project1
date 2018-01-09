$(document).ready(function() {
  console.log("hi jquery");

  // let cardImages = ["card1", "card2", "card3", "card4", "card5"];

  let cardImages = [
    { name: "card1", img: "./assets/img1.png" },
    { name: "card2", img: "./assets/img2.png" },
    { name: "card3", img: "./assets/img3.png" },
    { name: "card4", img: "./assets/img4.png" },
    { name: "card5", img: "./assets/img5.png" }
  ];

  function createCards() {
    let duplicateArr = cardImages.slice();
    duplicateArr.forEach(function(card) {
      duplicateArr.push(card);
    });
    duplicateArr.forEach(function(card) {
      let $card = $("<img>", { class: `card ${card.name}` });
      // $card.attr("src", card.img);
      $card.attr("src", "./assets/red.png");
      $(".squares").append($card);
    });
  }
  createCards();

  let clickedImages = [];

  $(".card").click(clickEvent);

  function clickEvent(e) {
    let $clicked = $(e.target);
    let filtered = cardImages.filter(
      e => e.name === $clicked["0"].classList[1]
    )[0];
    $clicked.attr("src", filtered.img);
    if ($clicked.is(".card")) {
      $clicked.css("opacity", 1);
      clickedImages.push($clicked);
      if (clickedImages.length === 2) {
        console.log("twice");
        checkForMatch();
      }
    }
  }

  function checkForMatch() {
    for (var i = 0; i < clickedImages.length; i++) {
      if (
        clickedImages[0][0].classList[1] === clickedImages[1][0].classList[1]
      ) {
        // MATCHED !!
        console.log("matched!");
        // let filtered = cardImages.filter(
        //   e => e.name === clickedImages[0][0].classList[1]
        // )[0];
        // clickedImages[i].attr("src", filtered.img);
        setTimeout(clickedImages[i].hide(), 2000);
      } else {
        // NO MATCH!!
        console.log("No match!");
        clickedImages[i].attr("src", "./assets/red.png");
      }
    }

    // RESET ARRAY AFTER CHECKING FOR MATCHES
    clickedImages = [];
  }
});

//     var userClick = $(this);

//     clickedImages.push(userClick);
//     //console.log("length of clickedImages", clickedImages.length);
//     if (clickedImages.length === 2) {
//       // check for matches
//       checkForMatch(clickedImages);
//     }

//     if (clickedImages.length >= 2) {
//       // reset clickedImages array
//       setTimeout(function() {
//         clickedImages = [];
//       }, 1000);
//     }
//   }
// }

// function checkForMatch(images) {
//   console.log(images);
//   if (images.length === 2) {
//     if (images[0].attr("class") === images[1].attr("class")) {
//       console.log("CORRECT");
//       for (var i = 0; i < images.length; i++) {
//         images[i].hide();
//       }
//     } else {
//       console.log("WRONG");
//       for (var i = 0; i < images.length; i++) {
//         // images[i].find("img").attr(
//         //   "src"
//         //   "http://www.clker.com/cliparts/j/W/M/s/V/w/wrong-mark-md.png"
//         // );
//         images[i].find("img").addClass("wrong");
//       }
//     }
//   }
// }

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

//give a div an image.
// if ($(this).children("img").length == 0) {
//   // ^give me an arr of imgs of the clicked div. If it's an empty arr, give it an image.
//   var image = $("<img/>");
//   image.attr(
//     "src",
//     imageUrls[Math.floor(Math.random() * imageUrls.length)]
//   );
//   image.attr("height", "100");
//   image.attr("width", "100");
//   image.attr("alt", "myImage");
//   $(this).append(image);

// $(this).append(
//   `<img src="${
//     imageUrls[$(this).attr("class")]
// }" height="100" width="100" alt="${$(this).attr("class")}">`
// );

// setTimeout(function(){  //hide cards after 1 second(s):
//   console.log($(this).remove("img"));
// }, 300);

//create function to delete image divs if two are clicked and match, otherwise flip them back facedown
//flipping card is just a matter of adding/removing the image tags within each div
//maybe create a function to handle "flipping" the cards
//create function to shuffle image divs
//maybe copy divs into an array, delete the divs, shuffle the array, place back divs
