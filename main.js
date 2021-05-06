var images=["21-215628_org-detail-298063-female-shopper-shopper-clipart.png",
"clipart-man-transparent-background-4.png",
"download (7).png",
"smiling-brunette-girl-long-hair-dress-smiling-brunette-girl-long-hair-green-dress-kindergarten-cartoon-kid-vector-104773993.jpg"];
var names=["Mummy","Papa","Nenu","Me"];
var i=0;
function next() {

document.getElementById("family").src=images[i];
document.getElementById("name").innerHTML=names[i];
i++;
if(i==4){
    i=0;
}
}