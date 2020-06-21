- concatenar tipo *camel casing*... **monthlyRent**
- La concatenación *snake casing* tambien sirve... **monthly_rent**
- ; o semi colon marca el fin de linea en JS, igual que en C. 
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
    - **const** numeros tomados como constantes, es decir, que no cambiarán
        - Es posible usar *screaming cases*: *MONTHS_IN_A_YEAR* para enfatizar que es una
        variable constante.
    - **let** numero que pueden cambiar su valor en el código/ejecución.
    - **var** muy parecido a **let**. Su utilización es prácticamente reemplazada por este.
- OJO: inserta código en JavaScript utilizando *script tag* es considerado una mala práctica.
    - Para agregar un archivo JS en el mismo directorio: *<script src="./experiments.js"></script>*
        - También debería funcional: *<script src="experiments.js"></script>*
    - Para agregar un archivo JS en el directorio superior: <script src="../experiments.js"></script>

- Usar *console.log()* es super útil para depuración.
- La ejecución de código en JS es secuencial, es decir, el código en la linea 2 se ejecuta antes que el de la línea 3. Esto es debido a que JS sólo tiene **un hilo de ejecución**.
- 