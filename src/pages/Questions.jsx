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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
          aliquid id consequuntur corporis velit necessitatibus saepe beatae
          cupiditate magnam, temporibus delectus error debitis quo incidunt
          quas, obcaecati eos fugit?
        </p>

        <h3 className="questions__title">
          ¿Qué percibe del proyecto MiContrato?
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
          aliquid id consequuntur corporis velit necessitatibus saepe beatae
          cupiditate magnam, temporibus delectus error debitis quo incidunt
          quas, obcaecati eos fugit?
        </p>

        <h3 className="questions__title">
          ¿Qué es una prueba unitaria, que tipos de pruebas se realizan al
          frontend?
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
          aliquid id consequuntur corporis velit necessitatibus saepe beatae
          cupiditate magnam, temporibus delectus error debitis quo incidunt
          quas, obcaecati eos fugit?
        </p>

        <h3 className="questions__title">
          Explicar al menos un método de consumo de servicios rest de forma
          segura.
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
          aliquid id consequuntur corporis velit necessitatibus saepe beatae
          cupiditate magnam, temporibus delectus error debitis quo incidunt
          quas, obcaecati eos fugit?
        </p>
      </section>
    </>
  );
};

export default Questions;
