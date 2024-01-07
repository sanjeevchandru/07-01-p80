document.write("44.to check from three given integers whether a number is greater than or equal to 20. It is less than the others"+"<br>");
function test44(x,y,z){
    if((x>=20&&(y>x||z>x))||(y>=20&&(x>y||z>y))||(z>=20&&(x>z||y>z))){
        return true;
    }
    return false;
}
document.write("The numbers are :10,5,10  ,Ans :"+test44(10,5,10)+"<br>");
document.write("The numbers are :10,20,30  ,Ans :"+test44(10,20,30)+"<br><br>");