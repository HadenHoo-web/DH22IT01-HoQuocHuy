// search-bar
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', ()=>{
    // toggles a class if its there
    search.classList.toggle('active')
    // focuses on the input Element
    input.focus()
})
// slider1
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
let index = 0

rightbtn.addEventListener ("click", function(){
    index = index+1
    if(index>imgNumber.length-1){
        index=0
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
leftbtn.addEventListener ("click", function(){
    index = index-1
    if(index<0){
        index=imgNumber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
//slider1------------------------------------------------------------------------------------
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNumberLi.forEach(function(image,index){
    image.addEventListener("click", function(){
        removeactive ()
        document.querySelector(".slider-content-left-top").style.right = index *100+"%"
        image.classList.add("active")
    })
})
function removeactive (){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
//slider2------------------------------------------------------------------------------------
function imgAuto (){
    index = index + 1
    if(index>imgNumber.length-1){
        index=0
    }
    removeactive ();
    document.querySelector(".slider-content-left-top").style.right = index *100+"%";
    imgNumberLi[index].classList.add("active");
    // console.log(index);
}
setInterval(imgAuto,5000);
 //slider product------------------------------------------------------------------------------------
 const rightbtntwo = document.querySelector('.fa-chevron-right-two')
 const leftbtntwo = document.querySelector('.fa-chevron-left-two')
 const imgNumbertwo = document.querySelectorAll('.slider-product-one-content-items')
 rightbtntwo.addEventListener ("click", function(){
     index = index+1
     if(index>imgNumbertwo.length-1){
         index=0
     }
     document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
 })
 leftbtntwo.addEventListener ("click", function(){
     index = index-1
     if(index<0){
         index=imgNumbertwo.length-1
     }
     document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
 })


/*-----------------------------------BTN---------------- */
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}