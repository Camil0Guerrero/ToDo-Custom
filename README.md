# Prueba técnica para junior developer pero no tan básico

## Enunciado

Debes crear una aplicación web que permita a los usuarios crear y gestionar una lista de tareas. La aplicación debe tener las siguientes características:

- Los usuarios deben poder crear, editar y eliminar tareas.

- Las tareas deben tener un título, una descripción, una fecha de vencimiento y una prioridad.

- Las tareas deben poder clasificarse por título, fecha de vencimiento, estado o prioridad.

- La aplicación debe tener una interfaz de usuario personalizable.

### Requisitos técnicos:

- La aplicación debe estar escrita en TypeScript.

- El código debe estar bien organizado y documentado.

- La aplicación debe ser compatible con los navegadores modernos.

### Preguntas:

- ¿Cómo implementarías la lógica de negocio para la clasificación de tareas por prioridad?

- ¿Cómo implementarías la interfaz de usuario personalizable?

**Nota:** Puedes utilizar cualquier librería o framework que desees. Esta prueba técnica fue creada por bard, por lo que puede tener algunas inconsistencias y cosas para mejorar, sin embargo, la usare para practicar, ver mi nivel actual y Seguir aprendiendo TypeScript con Sass

## Solución

### Tecnologías

- React + TypeScript
- Sass
- Bun

### Instalación

1. Clonar el repositorio
2. Instalar las dependencias con `npm install` o `bun install`
3. Ejecutar el proyecto con `npm start` o `bun start`

### Pasos

He decidido dividir esta prueba técnica en pequeños fragmentos para poder ser mas ordenado y tener mis ideas mas claras. Aunque esto no se debería hacer en una prueba real, esto me puede ayudar para mejorar mi lógica ya que esto se hace inconscientemente.

#### 1. Crear el proyecto

En mi caso use vite para iniciar el proyecto, esto lo puedes hacer con `npm create vite@latest` y elegir la opción de tu preferencia. En mi caso React + TypeScript + SWC

#### 2. Crear la estructura de carpetas

Aunque esto es algo muy personal, me gusta tener una estructura de carpetas ordenada y que sea fácil de entender. En este caso cree las siguientes carpetas:

- **components:** Aquí irán todos los componentes de la aplicación
- **hooks:** Aquí irán todos los hooks personalizados
- **pages:** Aquí irán todas las páginas de la aplicación
- **styles:** Aquí irán todos los estilos de la aplicación
- **types:** Aquí irán todos los tipos personalizados _Si no tengo muchos tipos, los pondré en un mismo archivo llamado types.d.ts_
- **utils:** Aquí irán todas las utilidades de la aplicación

#### 3. Crear el componente de la aplicación

Aunque el component App ya viene creado en el template de vite, en este paso borro todo lo que viene por defecto, me aseguro que mi linter, prettier y las dependencias estén funcionando correctamente.

#### 4. Crear el componente de la página principal

En este paso empezare a mostrar algo en pantalla, para esto cree el componente ToDoCard. Este sera el encargado de mostrar la lista de tareas, para esto cree un archivo de estilos para este componente, también me aseguro de instalar las dependencias y configurar lo necesario para trabajar con Scss. por ultimo, cree una utilidad para simular la llamada a una BD que desarrollare mas adelante.

#### 5. Crear el componente de la tarea

Luego de que nuestras tareas se estén mostrando como lo hemos planeado, es hora de poder agregar una nueva tarea a la lista. Para esto crearemos un nuevo componente

#### 6. Agregar funcionalidad al componente para poder editar una tarea

Usare el mismo componente del paso anterior para tener la posibilidad de modificar una tarea

#### 7. Creación del header

En el header agregaremos todos los filtros que necesitamos para poder ordenar nuestras tareas

#### 8. Mejorar Estilos

Aunque los estilos no están tan mal, creo que se pueden ver un poco mejor, ademas, veré como puedo integrar TypeScript con Sass para realizar nuestro siguiente paso lo mejor posible

#### 9. Creación del footer

En el footer daremos a nuestro usuario la posibilidad de personalizar los colores de nuestro sitio web

#### 10. Refactorizar

Al ver que hay muchas funciones en mi componente App y que estamos pasando muchas Props, usare UseContext para poder tener un mejor control de mi aplicación, ademas, veré si uso useReducer para manejar ciertos estados.

#### 11. Persistencia de datos

No creare una BD, sin embargo, usare localStorage para poder guardar los datos de mi aplicación. Ademas en este paso veré como puedo mejorar mi código para que sea mas legible y fácil de entender en el crud que he hecho ya que tiene falencias.

#### 12. Finalización del proyecto

Aunque el proyecto pueda tener muchas mejoras, creo que ya he cumplido con lo que quería practicar y aprender con este ejercicio. Por ultimo subiré el proyecto para que cualquiera lo pueda ver y usar.
