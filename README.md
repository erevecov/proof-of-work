# Proof Of Work
## _Prueba de trabajo para encontrar substring especifico en string resultante de sha256_

## Instalación

Proof Of Work requiere de [Node.js](https://nodejs.org/) v14+ para correr.

Instalar dependencias e iniciar script.

```sh
cd proof-of-word
npm i
node app
```

## Funcionamiento

Al ejecutar el script, se irá escribiendo en consola un intento de búsqueda del substring ***b00da***. Cuando el programa se detenga, quiere decir que el último objeto contiene en la key "sha" el valor que contiene el substring ***b00da***.  

```
.
.
.
{
  str: 'NXDOS',
  sha: '5a16eac4bc82b8aa769d8bc2201876b30154550f06d888282b440ca4d02ef1d3',
  it: 8322
}
{
  str: '1iIxm',
  sha: '254acf6ed24b903a9de7932a7107fb6679fbf878200ea0480c6fbecb7d5109fd',
  it: 8323
}
{
  str: 'ckhrB',
  sha: 'ceb3381d9a1d156be3c291bada8589a41e6815e7fd21c58ef2d17a40104b00da',
  it: 8324
}
```
