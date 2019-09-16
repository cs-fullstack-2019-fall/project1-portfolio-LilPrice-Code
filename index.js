let drop1 = $("#b1");
let abo = $(".About");
let drop2 = $("#b2");
let pro = $(".Proj");
let drop3 = $("#b3");
let con = $(".Cont");
let count1 = 0;
let count2 = 0;
let count3 = 0;


drop1.on("click", function () {
    abo.fadeToggle();
    count1++;
    console.log(count1);
    if (count2 !==0 && count2 % 2 !==0){
        count2 = 0;
        pro.slideToggle();
    }
    else if (count3 !==0 && count3 % 2 !==0){
        count3 = 0;
        con.slideToggle();
    }
});

drop2.on("click",function () {
     pro.fadeToggle();
     count2++;
     console.log(count2);
    if (count1 !==0 && count1 % 2 !==0){
        count1 = 0;
        abo.slideToggle();
    }
    else if (count3 !==0 && count3 % 2 !==0){
        count3 = 0;
        con.slideToggle();
    }

});
drop3.on("click", function () {
    con.fadeToggle();
    count3++;
    console.log(count3);
    if (count1 !==0 && count1 % 2 !==0){
        count1 = 0;
        abo.slideToggle();
    }
    else if (count2 !==0 && count2 % 2 !==0){
        count2 = 0;
        pro.slideToggle();
    }
});

