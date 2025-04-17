//Interface vs Types

//ejercicio para explicacion

//price
//paymentMethod
//nameClient

//templateName
//format

//productName
//clientAddress
//quantity

//el selector tambien se puede hacer con un type y esta si esta recomendada
//esto lo coloque en la parte superior pues pienso que se debe definir antes
// de la interface o del type pero voy hacer pruebas 
type PaymentMethodType = 'debito' | 'credito' | 'efectivo';
//podemos hacer el selector de esta forma pero no es una buena practica
interface IPaymentMethod{paymentMthod:'debito' | 'credito' | 'efectivo'}


//creamos una interfaz, normalmente se le agrega I al nombre para identificar
//como buena practica que es una Interface
interface IProductoBase {
    price: number;
    //paymentMethod: 'debito' | 'credito' | 'efectivo';//utilizamos un selector para metodo de pago
    //paymentMethod: IPaymentMethod['paymentMthod'];//no es buena practica
    paymentMethod: PaymentMethodType;//es lo mas recomendado
    nameClient: string;
}

//para crear un type al final del nombre se escribe Type y se utiliza el = antes de
//las llaves
type ProductoBaseType = {
    price: number;
    //paymentMethod: 'debito' | 'credito' | 'efectivo';
    paymentMethod: PaymentMethodType;
    nameClient: string;
}


// herencia

interface IFisica extends IProductoBase {
    productName: string;
    clientAddress: string;
    quantity: number;
}

type VirtualType = ProductoBaseType &{ //el type no hereda combina 
    templateName: string;
    format: 'jpg' | 'png' | 'pdf';
}  //con el simbolo (&) combina obligatoriamente asegurando que todos los atributos
// de ProductoBaseType van a llegar a type Virtual

/*
type VirtualType = ProductoBaseType |{ //con el simbolo de or se dinamiza y no obliga
    //a llamar todos los datos de el type productoBasetype pero al crear la clase
    //genera error 
    templateName: string;
    formas: 'jpg' | 'png' | 'pdf';
}*/
class ProductoVirtual implements VirtualType{
    price: number = 500;
    paymentMethod: PaymentMethodType = 'efectivo';
    nameClient: string= 'Fernando';
    templateName: string= 'Folleto1';
    format: "jpg" | "png" | "pdf"="pdf";

}

class ProductoFisico implements IFisica{
    price: number = 500;
    paymentMethod: PaymentMethodType = 'efectivo';
    nameClient: string= 'Fernando';
    productName: string= 'folleto';
    clientAddress: string='calle 50 14-21';
    quantity: number= 100;
}