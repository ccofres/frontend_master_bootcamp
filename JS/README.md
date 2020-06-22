
# JS Short Cut en español
- La concatenación en JS se prefiere de tipo *camel casing*, aunque la concatenación *snake casing* tambien sirve...
    ```
    monthlyRent     //camel casing
    monthly_rent    //snake casing
    ```
- `;` o semi colon, marca el fin de linea en JS, igual que en C. 
    - Ponerlo al final de linea NO es estricto porque JS toma los salto de linea como Python
- Las variables pueden tomar cualquier nombre, excepto *keywords*:
    - *const*
    - *var*
    - *let*
    - *console*
    - *log*
    - *class*
    - *for*
    - *with*
- Algunos usos:
    - **const** es "algo" tomado como constantes, no necesariamente debe ser un NUMERO, es decir, que no cambiarán
        - Es posible usar *screaming cases*: *MONTHS_IN_A_YEAR* para enfatizar que es una
        variable constante.
    - **let** numero que pueden cambiar su valor en el código/ejecución.
    - **var** muy parecido a **let**. Su utilización es prácticamente reemplazada por este.
- OJO: inserta código en JavaScript utilizando *script tag* es considerado una mala práctica.
    - Para agregar un archivo JS en el mismo directorio: `<script src="./experiments.js"></script>`
        - También debería funcional: `<script src="experiments.js"></script>`
    - Para agregar un archivo JS en el directorio superior: `<script src="../experiments.js"></script>`

- Usar `console.log()` es super útil para depuración.
- La ejecución de código en JS es secuencial, es decir, el código en la linea 2 se ejecuta antes que el de la línea 3. Esto es debido a que JS sólo tiene **un hilo de ejecución**.
- Estas dos formas son equivalente. En **(2)**, se utiliza la forma **template string**
que es la forma más conveniente de hacerlo. Característica agregada con ES2015/ES6.
    ``` 
    1.- const sentence = "Hello " + firstName+" "+ lastName + " How are you??";
    2.- const sentence = `Hello ${firstName} ${lastName} How are you??`;                //template string format
    ```
- Al momento de definir una varible como `true` o `false`, se vuelve automáticamente
de tipo **boolean**:
    ```
    const isTheSkyBlue = true; // variable booleana
    ```
- JavaScript es un lenguaje de tipo dinámico, es decir, una variable definida previamente
puede cambiar de tipo `string` a tipo `boolean` sin ningún problema en su ejecución.
    ```
    let myName = `Cristian`;        // string
    console.log(myName);    
    myName = 15;                    // numero
    console.log(myName);
    myName = true;                  // boolean
    console.log(myName);
    ```
- Los numeros en JS son un tipo de variable *primitiva, es decir, un numero es sólo un número.
Los enteros son la misma clase que un numero en punto flotante.
    - JS respeta el orden de la operaciones.
    - Los números en punto flotante depende de la plataforma en la que se está ejecutando el código.
    - `Number.MAX_SAFE_INTEGER` es el máximo valor para el cual el cálculo puede hacerse.
    - `Number.MIN_SAFE_INTEGER` es el mínimo valor para el cual JS cálcula algo.
        - Más allá de estos valores no se garantiza su (coherencia??)
    ```
    const num = 5;
    console.log(num);
    const num2 = 5.0000001;
    console.log(num2);
    const num3 = -5.0000001;
    console.log(num3);
    console.log(num2 + 1.123);
    console.log(num2 + 1.123 / 2);
    console.log(`Máximo valor en JS: ${Number.MAX_SAFE_INTEGER}`);
    console.log(`Mínimo valor en JS: ${Number.MIN_SAFE_INTEGER}`);
    ```
## Control Flow
- Sólo una *condición* sera satisfecha. Es decir, o se ejecuta el *if*, o se ejecuta *else*.
- Puede no existir un *else*. De esta forma, sólo se ejecutará el *if* si se cumple su condición, y después se seguirá ejecutando el resto del código.
```
const isSkyBlue = false;
if (isSkyBlue){
    console.log(`the sky is blue!`);
    console.log(`anything`);
    
} else {
    console.log(`the sky is not blue ??`);
}

let greeting;
if (isSkyBlue){
    greeting = 'it must be nice weather';
} 
else {
    greeting = 'it must be bad weather';
} console.log(greeting);
```

-  En JS cuando se quiere asignar un valor a una variable, se utiliza `=`
- Si lo que se quiere es "preguntar" si cierta variable toma cierto valor, se
utilizar el *triple igual*, `===`
    ```
    if (2+2 === 3) console.log(`math still works!`);
    else console.log(`panic?`);
    ```
- **else if**
    ```
    const friendsAtYourParty = 5;
    if (friendsAtYourParty === 0){
        console.log(`cool, now i have all the nachos`);
    }else if (friendsAtYourParty <= 4){
        console.log("perfect to play mario kart");
    } else {
        console.log(`woooooo`);
    }
    ```
- **while**
    ```
    let friendsAtYourParty = 0;

    friendsAtYourParty = friendsAtYourParty + 1;
    friendsAtYourParty = friendsAtYourParty + 1;
    friendsAtYourParty = friendsAtYourParty + 1;
    friendsAtYourParty = friendsAtYourParty + 1;
    console.log(friendsAtYourParty);

    let friendsInLoop = 0;
    while (friendsInLoop < 10){
    //console.log( friendsInLoop );
    friendsInLoop = friendsInLoop + 1;
    console.log( friendsInLoop );
    }
    console.log(friendsInLoop);

    ```

