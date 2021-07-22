var fruits = [ "Apple","Banana"];
//var index=1,2,3;

fruits.splice(1, 0, "Mango");
fruits.splice(2,0,"Orange");
fruits.splice(3,0,"Papaya");
fruits.splice(4,0,"Strawbery");
fruits.splice(5,0,"Pineapple");

document.write(fruits +"<br>");
document.write("Fruit name in index 3: " + fruits[3] +"<br>");
document.write("length of the array: " + fruits.length +"<br>");
document.write(fruits.reverse());
