var precio = Math.round(399.55);
document.write('precio recomendado es: ', precio);
document.write('<br>');
//este nos sirve para redondear hacia arriba vemos que el 55.9 lo aproxima 
//hacia el siguiente valor entero en este caso 56
var precio = Math.ceil(55.9);
document.write('el precio es: ', precio);
document.write('<br>');
//este nos redoendea hacia abajo si vemos en el caso de 50.9 sigue manteniendo el mismo 50
var precio = Math.floor(50.9);
document.write('el precio es: ', precio);
document.write('<br>');

//con la funcion de sin podemos calcular el seno de un angulo 

var seno = Math.sin(90);
 document.write('el seno de 90 es: ', seno);
document.write('<br>');
 
//para calcular el coseno de 180 usamos la funcion de cos y asi sucesivamente se puede hacer las demas operciones trigonometrales 
var seno = Math.cos(180);
 document.write('el coseno de 180 es: ', seno);
document.write('<br>');

//para calcular un exponencial usamos la funcio exp
var exponencial = Math.exp(150);
 document.write('el valor exponencial de 150 es: ', exponencial);
document.write('<br>');

//para calulcar logaritmo hacemos uso de la funcion log
var logaritmo = Math.log(150);
 document.write('el logarigmo de 150 es: ', logaritmo);
document.write('<br>');

//para calcular valor absoluto hacemos uso de la funcio abs
var absoluto = Math.abs(-10);
document.write('el valor absoluto de -10 es: ', absoluto);
document.write('<br>'); 

//calcular valor maximo de secuencia 
var maximo = Math.max(10000,50000,610000000,100);
document.write('el valor mayor de la lista es: ', maximo);
document.write('<br>');

//el minimo se calcula con la funcion min
var mini = Math.min(10000,50000,610000000,100);
document.write('el valor minimo de la lista es: ', mini);
document.write('<br>');

//valor aleatorio 
var aleatorio = Math.round (Math.random()*20);
document.write('valores aleatorios son: ', aleatorio);
document.write('<br>');

//raiz cuadrada de un numero 
var raiz = Math.sqrt(90);
document.write('la raiz de 90 es: ', raiz);
document.write('<br>');

//para el exponente de un numero 
var expo = Math.pow(4,2);
document.write('el exponente es: ', expo);
document.write('<br>');