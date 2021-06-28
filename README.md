# Proof Of Work
## _Prueba de trabajo para encontrar substring específico en string resultante de sha256_

## Instalación

Proof Of Work requiere de [Node.js](https://nodejs.org/) v14+ para correr.

Instalar dependencias e iniciar script.

```sh
cd proof-of-word
npm i
node app
```

## Funcionamiento

Al ejecutar el script, se solicitará un string que contenga los caracteres ***a-f 0-9***, una vez validados estos datos, iniciarán los intentos de búsqueda string. Cuando el script finalice su ejecución, se escribirá en terminal el ***string base (str), hash (sha256), contador de intentos (count), tiempo de ejecución (time)***

```
✔ substring to find (min 1 character lowercase a-f and 0-9): … b00da
Searching b00da...

str: d8aOiGeC8V
sha256: 730434a27060c6aff7d360279131b00daff90275eb1f47678ab0ee24d709f734
count: 30099
time: 0.199 seconds
```
