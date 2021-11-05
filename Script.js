var names = new Array();
names[0] = "Yaman";
names[1] = "John";
names[2] = "Jenny";
names[3] = "jack";
names[4] = "pranjal";
names[5] = "frenny";
names[6] = "lavanya";
names[7] = "paran";
names[8] = "sakshi";
names[9] = "jimmy";


for (var i = 0 ; i < names.length; i++) {
    if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j') {
        console.log("Goodbye "+ names[i])
    }
    else {
        console.log("Hello " + names[i])
    }
}