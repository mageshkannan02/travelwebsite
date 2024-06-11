var btn=document.querySelector(".header-button")
var over_lay=document.querySelector(".overlay")
var container=document.querySelector(".slide")
var cancel=document.querySelector(".cross")
var log=document.querySelector(".log-btn")
var pakage=document.querySelector(".pakages")
var r_view=document.querySelector(".review")
var w_book=document.querySelector(".bookings")
var w_contact=document.querySelector(".contact")
btn.addEventListener("click",()=>{
    over_lay.classList.toggle("open");
    container.classList.add("blur");
    cancel.classList.add("cross-open");
    pakage.classList.add("blur");
    r_view.classList.add("blur");
    w_book.classList.add("blur");
    w_contact.classList.add("blur");
}
 
)
cancel.addEventListener("click",()=>{
    over_lay.classList.toggle("open");
    container.classList.toggle("blur");
    cancel.classList.toggle("cross-open");
    pakage.classList.toggle("blur");
    r_view.classList.toggle("blur");
   w_book.classList.toggle("blur");
    w_contact.classList.toggle("blur");
     

})
log.addEventListener("click",()=>{
    over_lay.classList.toggle("open");
    container.classList.toggle("blur");
    cancel.classList.toggle("cross-open");
    pakage.classList.toggle("blur");
    r_view.classList.toggle("blur");
    w_book.classList.toggle("blur");
    w_contact.classList.toggle("blur");

})
function myfunction(){
    alert("YOUR TICKET HAS BEEN BOOKED");
    
}
function more(){
    alert("SWIPE DOWN TO SEE  MORE");
}
