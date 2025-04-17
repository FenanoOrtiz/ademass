/* situacion a resolver
3 chicos entra a una heladeria y quieren saber con su dinero
cual es el helado mas caro que pueden comprar
roberto 1.5 usd
pedro 1.7 usd
cofla 3 usd

helados
palito de helado 0.6 usd
palito helado crema 1 usd
bombóm helado heladix 1.6 usd
bombóm helado heladovich 1.7 usd
bombóm helado helardo 1.8 usd
potecito de helado confites 2.9 usd
pote 1/4 kg 2.9 usd

pedirle que ingresen el monto y mostrarles el helado mas caro que pueden comprar
si hay dos con el mismo precio mostrar ambos
cofla quiere saber cuanto es elvuelto
*/

//1:48
let dineroRoberto = prompt ("Roberto, ¿cuanto dinero tienes?");
let dineroPedro = prompt ("Pedro, ¿cuanto dinero tienes?");
let dineroCofla = prompt ("Cofla, ¿cuanto dinero tienes?");

//pasamos de texto que es lo que se introduce por el prompt a numero
// por medio de la funcion parseInt// para poder hacer la resta
// de los vueltos

dineroCofla= parseInt(dineroCofla);
if (dineroCofla >= 0.6 && dineroCofla< 1){
	alert("Cofla; compra el palito de helado");
	alert("cofla te sobra "+ (dineroCofla - 0.6));
}
else if (dineroCofla >=1 && dineroCofla < 1.6){
	alert("Cofla; compra el palito de crema");
	alert("cofla te sobra "+ (dineroCofla - 1));
}
else if (dineroCofla >=1.6 && dineroCofla < 1.7){
	alert("Cofla; compra el heladix");
	alert("cofla te sobra "+ (dineroCofla - 1.6));
}
else if (dineroCofla >=1.7 && dineroCofla < 1.8){
	alert("Cofla; compra el heladovich");
	alert("cofla te sobra "+ (dineroCofla - 1.7));
}
else if (dineroCofla >=1.8 && dineroCofla < 2.9){
	alert("Cofla; compra el helardo");
	alert("cofla te sobra "+ (dineroCofla - 1.8));
}
else if (dineroCofla >=2.9 ){
	alert("Cofla; compra el helado con confites o el pote de 1/4");
	alert("cofla te sobra "+ (dineroCofla - 2.9));
}
else{
	alert ("Cofla, no te alcanza para nada");
}

if (dineroPedro  >= 0.6 && dineroPedro< 1){
	alert("Pedro; compra el palito de helado");
}
else if (dineroPedro  >=1 && dineroPedro < 1.6){
	alert("Pedro; compra el palito de crema");
}
else if (dineroPedro  >=1.6 && dineroPedro < 1.7){
	alert("Pedro; compra el heladix");
}
else if (dineroPedro  >=1.7 && dineroPedro < 1.8){
	alert("Pedro; compra el heladovich");
}
else if (dineroPedro >=1.8 && dineroPedro < 2.9){
	alert("Pedro; compra el helardo");
}
else if (dineroPedro >=2.9 ){
	alert("Pedro; compra el helado con confites o el pote de 1/4");
}
else{
	alert ("Pedro; no te alcanza para nada");
}


if (dineroRoberto  >= 0.6 && dineroRoberto< 1){
	alert("Roberto; compra el palito de helado");
}
else if (dineroRoberto  >=1 && dineroRoberto < 1.6){
	alert("Roberto; compra el palito de crema");
}
else if (dineroRoberto  >=1.6 && dineroRoberto < 1.7){
	alert("Roberto; compra el heladix");
}
else if (dineroRoberto  >=1.7 && dineroRoberto < 1.8){
	alert("Roberto; compra el heladovich");
}
else if (dineroRoberto >=1.8 && dineroRoberto < 2.9){
	alert("Roberto; compra el helardo");
}
else if (dineroRoberto >=2.9 ){
	alert("Roberto; compra el helado con confites o el pote de 1/4");
}
else{
	alert ("Roberto; no te alcanza para nada");
}