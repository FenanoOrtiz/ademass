/*
canvas: es un elemento de html que se lleva a una api y podemos genera graficos
		se pueden hacer juegos animaciones y muchas otras cosas

-strokeRect: strokeRect(x, y, width, height)
Dibuja un contorno rectangular.

-strokeStyle

- fillRect:fillRect(x, y, width, height)
Dibuja un rectángulo relleno.

clearRect(x, y, width, height)
Borra el área rectangular especificada, haciéndola totalmente transparente.

- fillStyle

- lineWidth: aumenta el tamaño del borde de las figuras el ancho de la linea

- lineTo: trazar una linea por coordenadas dos puntos se crean los dos puntos
y des pues se hace la figura con stoke


- moveTo

- closePath: es para cerrar un dibujo y poder empezar en otro lugar

- beginPath: despues de cerrar con close se debe abrir para empezar otra
linea en otro lugar

- arc(x, y, radius, startAngle, endAngle, counterclockwise)
Dibuja un arco centrado en la posición (x, y) con radio r que comienza en 
startAngle y termina en endAngle yendo en la dirección indicada por 
counterclockwise (por defecto en el sentido de las agujas del reloj).

-arcTo(x1, y1, x2, y2, radius)
Dibuja un arco con los puntos de control y el radio dados, 
conectado al punto anterior por una línea recta.


*/

//crear elemento canvas se crea en html como una etiqueta <canvas id="canvas"></canvas>	

// lo primero se selecciona el elemento canvas y se configura el entorno

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

//vamos a contruir un rectangulo
//la propiedad strokestyle y las demas de estilo se definen antes de crear la
//figura osea primero va el estilo y despues la figura, si se coloca despues el
//de crear la figura el estilo este no se aplicara


ctx.strokeStyle = "red";
ctx.fillStyle = "green";
ctx.lineWidth = "6"; 
ctx.strokeRect(30,50,400,200);//x, y, altura, ancho
ctx.fillRect(10,20,400,200);//relleno


//ejemplo linea
/*
ctx.lineTo(100,300);//un punto
ctx.lineTo(120,350);//otro punto
ctx.stroke();//se forma la union de esos puntos
*/
//unir varios puntos
ctx.lineTo(100,300);//4 puntos
ctx.lineTo(120,350);
ctx.lineTo(100,400);
ctx.lineTo(120,450);
ctx.stroke();// se unen los puntos
ctx.closePath();//se finaliza la union de puntos
ctx.beginPath();//se inicia otra linea
//creamos otra linea
ctx.lineTo(80,300);
ctx.lineTo(80,200);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.strokeStyle="white";
ctx.lineTo(5,30);
ctx.lineTo(400,30);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineTo(400,30);
ctx.lineTo(400,400);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineTo(400,400);
ctx.lineTo(5,400);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.strokeStyle="orange";
ctx.lineTo(5,400);
ctx.lineTo(5,30);
ctx.stroke();
//9:02
ctx.closePath();
ctx.beginPath();
ctx.arc(120,120,100,10,40);//creamos un sirculo (x,y,radio,?,?)
ctx.stroke();

//ctx.clearRect(0,0,500,500);//borro todo

//creo la figura de la pagina (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
ctx.strokeStyle="black";
ctx.fillStyle="black";
ctx.fillRect(25, 25, 100, 100);// se hace un cuadro relleno x=25 y=25 de 100*100
ctx.clearRect(45, 45, 60, 60);//se borra dentro del cuadro x=45 y=45 60*60
ctx.strokeRect(50, 50, 50, 50);//se hace un cuadro vacio x=50 y=50 de 50*50

//9:08 en la pagina estoy en fill()
//ctx.clearRect(0,0,500,500);//borro todo para el siguiente ejemplo
//dibujar triangulo contorno
ctx.beginPath();
ctx.moveTo(200,75);//el punto siguiente se desplaza a estas coordenadas
ctx.lineTo(100,75);//se crea el punto
ctx.lineTo(100,200);//se crea otro punto
ctx.closePath();//se cierra la figura
ctx.stroke();//se dibuja el contorno

ctx.clearRect(0,0,500,500);//borro todo para el siguiente ejemplo
//dibujar triangulo relleno
ctx.beginPath();
ctx.moveTo(200,75);
ctx.lineTo(100,75);
ctx.lineTo(100,200);
ctx.fill();//se rellena

ctx.lineWidth="2";
ctx.clearRect(0,0,500,500);
/*
ctx.beginPath();
ctx.arc(20,20,20,0, Math.PI*2,true);
ctx.stroke();
ctx.beginPath();
ctx.arc(60,20,20,0, Math.PI*2,true);
ctx.stroke();
*/
for (let i = 20; i < 500; i+=40) {
	for (let j = 20; j <500; j+=40) {
		ctx.strokeStyle="#00f"
		ctx.beginPath();
		ctx.arc(i,j,20,0, Math.PI*2,true);
		ctx.stroke();
	}
	
}