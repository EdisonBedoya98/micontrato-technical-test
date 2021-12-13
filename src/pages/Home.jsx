import React from "react";
import "@styles/Home.css";
import reactIcon from "@icons/react.jpg";
const Home = () => {
  const title = "< Sobre mi />";
  return (
    <>
      <h1 className="home__title"> {title}</h1>
      <div className="home__reacticon">
        <img
          className="home__reacticon__img"
          src={reactIcon}
          alt="React Icon"
        />
      </div>
      <article className="home__aboutme">
        <p>
          Mi nombre es Edison Bedoya García, actualmente trabajo en la
          Universidad de Antioquia dentro de la división de gestión informática,
          ya llevo 2 años en el puesto de desarrollador full stack, actualmente
          estoy cursando la ultima materia del pregrado de ingenieria de
          sistemas y la meta es obtener el titulo a principios del próximo año.
        </p>
        <p>
          Soy una persona que le apasionan diversas cosas, como por ejemplo el
          deporte que practico llamado Calistenia, el cual me ha llevado a
          participar en varias competencias a nivel nacional y he logrado ganar
          en algunas ocasiones. También me encanta viajar, conocer nuevas
          culturas y personas, me apasiona mucho el mundo de la programación y
          por esto intento aprender día a día nuevas cosas y estar a la
          vanguardia, intentando superarme a mí mismo cada día.
        </p>
        <p>
          Son muchos los sueños que tengo a mediano y largo plazo, uno de estos
          es ser Senior React Developer manejando con experticia todo el
          ecosistema del mismo, también me visualizo viajando por todo el mundo,
          para aprender más de todas las experiencias que hay ahí afuera y me
          encantaria como primer destino ir a un país de habla inglesa, ya que
          quiero mejorar mi nivel de inglés y veo esto como una gran
          oportunidad.
        </p>
        <p>
          Me considero una persona muy disciplinada que se le mide a cualquier
          reto que vaya surgiendo en el camino, sin importar lo dificil que
          pueda parecer; ademas de eso, soy empático con las demás personas y me
          gusta mantener una buena relación de trabajo con los demás, para así
          hacer más amena la jornada laboral y generar un ambiente de ayuda
          mutua.
        </p>
      </article>
    </>
  );
};

export default Home;
