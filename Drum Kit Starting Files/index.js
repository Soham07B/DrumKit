document.querySelector("button").addEventListener("click", handleClick);

function handleClick()
{
    alert("I got clicked!");

}

//or...


document.querySelector("button").addEventListener("click", function(){
      alert("I got clicked!");})
