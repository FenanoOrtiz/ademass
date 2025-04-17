//8:44

/*
se refiere al objeto pantalla

AnchoTotal = screen.width // ancho total de la pantalla
AlturaTotal = sreen.height // altura total de la pantalla

AnchoDisponible = screen.availWidth //ancho disponible de la pantalla
AlturaDisponible = scren.availHeight //altura disponible de la pantalla

Resolucion = screen.pixelDepth //resolucion de color de la pantalla
profundidad = screen.colorDepth // profundidad de bits de la paleta de colores
*/

//8:44

AnchoTotal = screen.width 
AlturaTotal = screen.height 
AnchoDisponible = screen.availWidth 
AlturaDisponible = screen.availHeight 
Resolucion = screen.pixelDepth 
profundidad = screen.colorDepth 

console.log(`width: ${AnchoTotal}`);
console.log(`height: ${AlturaTotal}`);
console.log(`AvailWidth: ${AnchoDisponible}`);
console.log(`AvailHeight: ${AlturaDisponible}`);
console.log(`pixelDepth: ${Resolucion}`);
console.log(`colorDepth: ${profundidad}`);