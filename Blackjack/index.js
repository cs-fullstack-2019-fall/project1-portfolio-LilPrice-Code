let black = 21;
let user = 0;
let num = 0;
let jack = $("#jack");
let usercards = $("#have");
let ran = $("#random");
let hit =$("#adding");
let hold = $("#end");



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

hit.on("click",function () {
    num = getRandomInt(1,11);
    user = user + num;
    black = black - num;
    ran.text(num);
    usercards.text(user);
    jack.text(black);

    if(user === 21){
        alert("BlackJack!!!!!");
        black = 21;
        user = 0;
        ran.text(num);
        usercards.text(user);
        jack.text(black);
    }
    else if (user > 21){
        alert(`Bust!!! with ${user}`);
        black = 21;
        user = 0;
        ran.text(num);
        usercards.text(user);
        jack.text(black);

    }
});
hold.on("click", function () {
    alert(`You have ${user} points. You needed ${21 - user}!!!`);
    black = 21;
    user = 0;
    ran.text(num);
    usercards.text(user);
    jack.text(black);
});