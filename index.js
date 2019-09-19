//Page Code
//Variables
let drop1 = $("#b1");
let abo = $(".About");
let drop2 = $("#b2");
let pro = $(".Proj");
let drop3 = $("#b3");
let con = $(".Cont");
let drop4 = $("#gform");
let goggle = $("#forms");
let drop5 = $("#bbutton");
let drop6 = $("#page1");
let flect = $("#reflect2");
let drop7 = $("#page2");
let pro2 = $("#pro2");
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

//Swap to About Me page
drop1.on("click", function () {
    abo.fadeToggle("1000");
    count1++;
    console.log(count1);
    if(count5 !==0 && count5 % 2 !==0){
        count5  = 0;
        flect.slideToggle("500");
        pro2.fadeToggle("500");
        if(count2 !==0 && count2 % 2 !==0){
            count2 = 0;
            pro.slideToggle("1000");
        }
    }
    else if (count2 !==0 && count2 % 2 !==0){
        count2 = 0;
        pro.slideToggle();
    }
    else if ((count3 !==0 && count3 % 2 !==0) && (count4 !==0 && count4 % 2 !==0)){
        count3 = 0;
        count4  =0;
        con.slideToggle();
        goggle.slideToggle();
    }
    else if (count3 !==0 && count3 % 2 !==0){
        count3 = 0;
        con.slideToggle();
    }
});

//Swap to Projects Page
drop2.on("click",function () {
     pro.fadeToggle();
     count2++;
     console.log(count2);
    if (count1 !==0 && count1 % 2 !==0){
        count1 = 0;
        abo.slideToggle();
    }
    else if ((count3 !==0 && count3 % 2 !==0) && (count4 !==0 && count4 % 2 !==0)){
        count3 = 0;
        count4  =0;
        con.slideToggle();
        goggle.slideToggle();
    }
    else if (count3 !==0 && count3 % 2 !==0){
        count3 = 0;
        con.slideToggle();
    }

});

//Swap to Contact Me Page
drop3.on("click", function () {
    con.fadeToggle();
    count3++;
    console.log(count3);
    if (count1 !==0 && count1 % 2 !==0){
        count1 = 0;
        abo.slideToggle();
    }
    else if(count5 !==0 && count5 % 2 !==0){
        count5  = 0;
        flect.slideToggle();
        pro2.fadeToggle();
        if(count2 !==0 && count2 % 2 !==0){
            count2 = 0;
            pro.slideToggle();
        }
    }
    else if (count2 !==0 && count2 % 2 !==0){
        count2 = 0;
        pro.slideToggle();
    }
});

//Opening and Closing Google form
drop4.on("click", function () {
    goggle.slideToggle();
    count4++;
    console.log(count4);
});

drop5.on("click", function () {
    goggle.slideToggle();
    count4++;
    console.log(count4);
});

// Moving Pages for Weekly Reflections
drop6.on("click", function () {
    count5++;
    flect.slideToggle();
    pro2.fadeToggle();
    console.log(count5);
});
drop7.on("click", function () {
    count5++;
   flect.fadeToggle();
    pro2.slideToggle();
    console.log(count5);
});
//done