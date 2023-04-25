# Kubernetes

Edmundo Gomez Alvarez

## Introduccion

Kubernetes se utiliza para crear y gestionar aplicaciones en contenedores, que son unidades de software portátiles y autónomas que encapsulan una aplicación y todas sus dependencias en un paquete único. Los contenedores permiten a los desarrolladores crear aplicaciones que se ejecutan de manera consistente en diferentes entornos, como máquinas locales, servidores de desarrollo, entornos de pruebas y producción, lo que facilita el despliegue y la portabilidad de las aplicaciones.

## Desarrollo

En este caso se creo una sencilla aplicacion que regresa el numero pasado con el parametro "value" al cuadrado.

![Captura de pantalla 2023-04-24 235058](https://user-images.githubusercontent.com/122659695/234185969-fd767af4-c9ef-4be3-8fbf-ef46dab914ad.png)

![Captura de pantalla 2023-04-24 235112](https://user-images.githubusercontent.com/122659695/234185998-5bbfe33e-c7c8-4b55-9380-0f54c62033d0.png)

Para desplegar nuestra aplicacion en kubernetes, primero necesitamos crear una imagen de docker.
Cuando ya tengamos nuestra aplicacion en una imagen de docker.

![Captura de pantalla 2023-04-24 235156](https://user-images.githubusercontent.com/122659695/234186061-96d00655-476b-40a5-9bcc-c947b492a3dc.png)

Realizamos un push a docker

![Captura de pantalla 2023-04-24 235313](https://user-images.githubusercontent.com/122659695/234186296-71e3553c-0c42-46a2-94cb-3ac635f4b6f2.png)




![Captura de pantalla 2023-04-24 224554](https://user-images.githubusercontent.com/122659695/234185552-9344c077-7fb2-4555-82da-0205a58df07d.png)

Creacion

![Captura de pantalla 2023-04-24 225847](https://user-images.githubusercontent.com/122659695/234185581-bfd15105-554c-40e5-be14-d2622d761279.png)

Ver ejecucion

![Captura de pantalla 2023-04-24 225959](https://user-images.githubusercontent.com/122659695/234185706-112a0831-308e-44f5-80ab-473b076c0bad.png)

Eliminacion

![Captura de pantalla 2023-04-24 231309](https://user-images.githubusercontent.com/122659695/234185766-06469cc8-fd3e-4453-bdd2-0ccf5dcf1b2d.png)

Restauracion

![Captura de pantalla 2023-04-24 231320](https://user-images.githubusercontent.com/122659695/234185800-514d18ad-6e60-4972-9d26-b140da5e9372.png)
