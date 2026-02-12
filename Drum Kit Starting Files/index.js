document.querySelector("button").addEventListener("click", handleClick);

function handleClick()
{
    alert("I got clicked!");

}

//or...


document.querySelector("button").addEventListener("click", function(){
      alert("I got clicked!");})


//for all buttons


for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
    document.querySelector(".drum")[i].addEventListener("click", function(){
      alert("I got clicked!");})
}
    
    



