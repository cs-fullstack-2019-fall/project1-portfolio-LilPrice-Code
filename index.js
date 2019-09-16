let drop1 = $("#b1");
let abo = $(".About");
let drop2 = $("#b2");
let pro = $(".Proj");
let drop3 = $("#b3");
let con = $(".Cont");


drop1.on("click",function () {
    abo.slideToggle();
});
drop2.on("click",function () {
    pro.slideToggle();
});
drop3.on("click",function () {
    con.slideToggle();
});