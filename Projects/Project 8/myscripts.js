// JavaScript Document

PrintButton1 = new Image
PrintButton2 = new Image
logo1 = new Image
logo2 = new Image
if (document.images) {
PrintButton1.src = "Images/Print1.jpg"
PrintButton2.src = "Images/Print2.jpg"
logo1.src = "Images/Logo.jpg"
logo2.src = "Images/Logo2.jpg"
}


var imgArray = new Array(
'Image1Lg.jpg',
'Image2Lg.jpg',
'Image3Lg.jpg',
'Image4Lg.jpg'


);


var titleArray = new Array(
'Chef Tasting Dish',
'Salad on Fork',
'Various Ingredients',
'Delicious Cake'

);

var imgPath = "Images/Fullsize/";

function swapImage(imgID) {

var theImage = document.getElementById('theImage');
var textDiv = document.getElementById('bottomText');

var newImg;
var textTitle;

newImg = imgArray[imgID];
theImage.src = imgPath + newImg;

textTitle=titleArray[imgID];

      textDiv.innerHTML = textTitle;
}

function preloadImages() {
for(var i = 0; i < imgArray.length; i++) {
var tmpImg = new Image;
tmpImg.src = imgPath + imgArray[i];
}
}