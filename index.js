function addingEventListener() {
  const input = document.getElementById("input")
  
  function clickAlert(){
    alert("I was clicked!")
  }

  input.addEventListener("click", clickAlert)
}
addingEventListener()


//using callback anonymous function
function tryingWithMain1(){
  const main = document.getElementById("main1")

  main.addEventListener("click", function(){
  
    alert("I was clicked second")
  })
}
tryingWithMain()