function namegenerator(x , y , z){
  console.log(x+y+z);
 
}


let a="CRAZY";
let b="AMAZING";
let c="FIRE";
let a1="ENGIINE";
let b1="FOOD"
let c1="GARMENTS";
let a2="BORS";
let b2="LIMITED";
let c2="HUB";
let first,second,third
// result1 =namegenerator(first , second , third);
let h = Math.random();
    if(h<0.33){
        first=a;
    }
    else if(h<0.66){
        first=b;
    }
    else
    {
        first=c;
    }

if(h<0.33){
    second=a1;
}
else if(h<0.66){
    second=b1;
}
else
    second=c1;

if(h<0.33){
    third=a2;
}
else if(h<0.66){
    third=b2;
}
else
    third=c2;
result1 =namegenerator(first , second , third);

