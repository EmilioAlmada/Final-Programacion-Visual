# 📎 Final - Programación Visual - Emilio Almada 💻

## 🏋️‍♂️ Pagina web Deportes y Gimnacio: 🥋

### El proyecto es una simulacion de una pagina web promocional de un o una red de gimnacios.

*   Para poder ingresar a la pagina principal se debe ingresar un usuario y una contraseña de estos [Usuarios](https://jsonplaceholder.typicode.com/users), para las pruebas del proyecto, se puede usar el usuario: "Bret" y la contraseña: "1", en caso de que se ingrese mal la contraseña o el usuario se mostrara una alerta al usuario.
    
*   El proyecto cuenta con una pagina principal de Clases, en donde se muestran las clases, los beneficios y ventajas de las mismas.
        En la cabecera de la pagina se encuentra el nombre de la pagina, una foto de usuario, y un menu desplegable donde para navegar entre las distintas paiginas.
        Ademas se encuentran por debajo una serie de links para las distintas secciones/deportes de la pagina de clases.

    En el main, se pueden ver las lista de las clases y sus descripciones, con una foto "ilustrativa" de la Diciplina/actividad.

    En la parte inferior, En el pie de pagina se ve una pequeña seccion en donde se indica quien fue el creador de la pagina.

    La pagina se adapta tanto a un viewport mobile como tablet y desktop, ubicando tanto el menu superior como las secciones de deportes con un layout distinto segun cada uno.

*   Tambien se puede ver la pagina de Horarios, la cual contieene los horarios para las distintas classes y debajo un mapa con una serie de gimnacios marcados.

    La cabecera en esta seccion solo contiene los menues para el cambio de pagina, el nombre del proyecto y la foto de usuario, al loguearse el en la barra de navegacion se mostrara el nombre del usuario.

    En el main de la pagina de horarios se puede ver segun el tamaño del dispositivo:
    - Para mobile: se puede ver una lista de los horarios y dias para las distintas clases.

    - Para desktop y tablet (rotada): Se puede ver una tabla con las distintas clases y horarios.

*   El diseño en general es Mobile First.
*   Las Fuentes utilizadas para el proyecto fueron: 'Roboto', sans-serif y 'Open Sans', sans-serif.
*   Las Etiquetas utilizadas en el body fueron: header, nav, img, a, main, section, h2, h3, h4, p, footer, span, table, thead, th, tr, td, iframe y div.

*   Theme, Como se menciono, se puede utilizar tanto la aplicacion en modo oscuro como claro, para esto se utiliza el archivo themeControl.js y el localStorage del navegador, para poder almacenar la eleccion del usuario.

*   Se utilizaron cookies para la persistencia de la session y datos de usuario logueado en la web.

*   Se coloco una verificacion por medio de una expresion regular para el ingreso de el usuario en el log-in, para que solo se puedan ingresar letras en mayusculas o minusculas, y en caso contrario se mostrara al usuario un mensaje de error.

*   Las Fuentes utilizadas para el proyecto fueron: 'Roboto', sans-serif y 'Open Sans', sans-serif.

