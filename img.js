var fullImgBox = document.getElementById("fullImgBox");
var fillImg = document.getElementsById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}