let black = 21;
let user = 0;
let player1num= 0;
let player2num= 0;
let cpucall = 0;
let cpunum = 0;
let cpunum2 = 0;
let num = 0;
let jack = $("#jack");
let usercards = $("#have");
let ran = $("#random");
let hit =$("#adding");
let hold = $("#end");
let menu = $("#menu");
let main = $("#main");
let pvp =$("#pvp");
let pvc =$("#pvc");
let mode = $("#mode");
let turn = $("#turn");
let gamecount = 0;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
menu.on("click",function () {
   main.slideToggle();
});
function cpuplay() {
    cpunum = 0;
    while (0===0) {
        cpucall = getRandomInt(1, 4);
        console.log(cpucall);
        console.log("Cpu has " +cpunum);
        if (cpucall > 1) {
            num = getRandomInt(1, 11);
            cpunum = cpunum + num;
            alert(`CPU Hits and has ${cpunum}`);
            if (cpunum === 21) {
                alert("CPU Hits BlackJack");
                return cpunum;
            } else if (cpunum > 21) {
                alert("CPU Busted");
                return cpunum;
            }

        } else if (cpucall === 1) {
            alert("CPU Holds");
            return cpunum;
        }
    }
    alert("Player it is your turn.")

}

pvc.on("click", function () {
    cpuplay();
    main.slideToggle();
    game1();
    player1num = game1();
    cpunum2 = cpuplay();
    console.log(cpunum2);
    console.log(player1num);

});

function game1() {
    user = 0;
    while (0===0)
    hit.on("click", function () {
        num = getRandomInt(1, 11);
        user = user + num;
        black = black - num;
        ran.text(num);
        usercards.text(user);
        jack.text(black);
        if (user === 21) {
            alert("BlackJack!!!!!");
            black = 21;
            ran.text(num);
            usercards.text(user);
            jack.text(black);
            return user;
        } else if (user > 21) {
            alert(`Bust!!! with ${user}`);
            black = 21;
            ran.text(num);
            usercards.text(user);
            jack.text(black);
            return user;

        }
    });
    hold.on("click", function () {
        alert(`You have ${user} points. You needed ${21 - user}!!!`);
        black = 21;
        ran.text(num);
        usercards.text(user);
        jack.text(black);
        return user;
    });
}