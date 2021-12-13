import React from "react";
import "@styles/Questions.css";

const Questions = () => {
  const title = "< Preguntas />";
  return (
    <>
      <h1 className="question__title"> {title}</h1>
      <section className="questions">
        <h3 className="questions__title">
          ¿Para qué son los software de gestión documental?
        </h3>
        <p>
          Dentro de las empresas por lo general hay un alto flujo de documentos,
          que son vitales para el correcto funcionamiento de la misma, pero el
          hecho de tener grandes volúmenes de estos las lleva a incurrir en
          varios problemas, como por ejemplo la complicada organización si no se
          sigue un método establecido, la pérdida de tiempo en el registro de
          cada unos de los documentos si no se mantiene un orden y la
          incompatibilidad de los diferentes formatos: PDF, Excel, Word, etc.
        </p>
        <p>
          Es ahí donde entran los software de gestión documental, los cuales
          ofrecen ventajas como por ejemplo son compatible con cualquier formato
          de documento, tienen conexión directa con escáneres documentales, si
          desea consultar algún documento, podrá hacerlos desde cualquier punto
          de la red y la información estará segura y supervisada en el servidor
          documental.
        </p>

        <h3 className="questions__title">
          ¿Qué percibe del proyecto MiContrato?
        </h3>
        <p>
          MiContrato es una startup con un gran potencial, debido a que suple la
          problemática que viven las empresas a la hora de realizar una correcta
          gestión documental, y teniendo en cuenta el contexto en el que estamos
          en el cual muchas empresas se encuentran buscando la manera de
          optimizar estos procesos y tener sus documentos en un lugar más
          seguro.
        </p>
        <p>
          Además de que tiene un gran abanico de diferentes servicios que son de
          gran utilidad para entidades y personas, la verdad es una herramienta
          muy útil que en el momento no conocía y que me hubiese ayudado en
          varias ocasiones, considero que si se le logra dar una buena difusión
          para que más personas la conozcan va a tener un gran futuro.
        </p>
        <h3 className="questions__title">
          ¿Qué es una prueba unitaria, que tipos de pruebas se realizan al
          frontend?
        </h3>
        <p>
          Una prueba unitaria es la encargada de comprobar el correcto
          funcionamiento de una sola unidad de código. Una unidad de código
          puede ser por ejemplo una función o un método. Al realizar esto nos
          aseguramos que cada una de éstas funcione correcta y eficientemente
          por separado. Lo ideal es tratar de desarrollar los casos de prueba lo
          más desacoplados posible para que sean independientes entre sí,
          siguiendo por ejemplo el principio FIRST que son las siglas de Fast,
          Independent, Repeteable, Self-validating y Timely, además de seguir el
          patrón AAA.
        </p>
        <p>
          En el frontend existen diferentes pruebas como lo son las unitarias,
          pruebas de integración que validan que los diferentes módulos de la
          aplicación funcione en armonía cuando trabajan en conjunto, pruebas
          funcionales que se centran en los requerimientos de negocio de una
          aplicación, pruebas de regresión, pruebas de humo, pruebas de
          aceptación y pruebas de rendimiento.
        </p>
        <h3 className="questions__title">
          Explicar al menos un método de consumo de servicios rest de forma
          segura.
        </h3>
        <p>
          El uso de tokens nos permite agregar una capa de seguridad a nuestra
          API, el uso de JWT es bastante común ya que es un estándar abierto que
          define una forma compacta y segura de URL para transmitir información
          de forma segura como un objeto JSON entre dos partes, pudiéndose usar
          para autenticar un cliente que desee acceder a la API.
        </p>
        <p>
          Cifrar los datos mediante un método como TLS, para que nuestros datos
          viajen de una forma más segura, por ejemplo el navegador Chrome ya
          está exigiendo es método de cifrado.
        </p>
        <p>Clave de API, la cual es una cadena de un solo token.</p>
      </section>
    </>
  );
};

export default Questions;
