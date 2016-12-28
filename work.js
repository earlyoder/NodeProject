var f = function () {console.log('Boo from function');}
f.boo = 1;
f(); //outputs Boo
console.log(f.boo); //outputs 1
f();
