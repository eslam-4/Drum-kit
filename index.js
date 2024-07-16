
var test = document.querySelectorAll(".drum")

for (let i = 0; i < test.length; i++) {   
    test[i].addEventListener("click",function() {
        var clicked = test[i].innerHTML
             action(clicked)
             animate(clicked)
    })
}
document.addEventListener("keydown",function(event) {
    var pressed = event.key
      action(pressed)
      animate(pressed)
})







function action(key) {
    switch (key) {
    case "w":
        var sound = new Audio('./sounds/crash.mp3');
                sound.play();
        break;
    case "a":
         sound = new Audio('./sounds/kick-bass.mp3');
                sound.play();
    break;
    case "s":
         sound = new Audio('./sounds/snare.mp3');
    sound.play();
    break;
    case "d":
         sound = new Audio('./sounds/tom-1.mp3');
    sound.play();
    break;
    case "j":
         sound = new Audio('./sounds/tom-2.mp3');
    sound.play();
    break;
    case "k":
         sound = new Audio('./sounds/tom-3.mp3');
    sound.play();
    break;
    case "l":
         sound = new Audio('./sounds/tom-4.mp3');
    sound.play();
    break;
    default:
        console.log(key)
        break;
}
}

function animate(key){
    document.querySelector("." + key ).classList.add("pressed")
    setTimeout(function(){
        document.querySelector("."+ key).classList.remove("pressed")
    }, 150)
}