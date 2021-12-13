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
          estoy cursando mi ultima materia de la carrera y la idea es graduarme
          a principios del próximo año. Soy una persona que le apasionan
          diversas cosas, como por ejemplo el deporte que practico llamado
          Calistenia, el cual me ha llevado a participar en varias competencias
          a nivel nacional y he logrado ganar en algunas ocasiones. También me
          encanta viajar y conocer nuevas culturas y personas, me apasiona mucho
          mi carrera y por esto intento aprender día a día nuevas cosas que van
          saliendo, intentando superarme a mí mismo cada día.
        </p>
        <p>
          Son muchos los sueños que tengo a mediano y largo plazo, uno de estos
          es ser Senior React Developer manejando con experticia todo el
          ecosistema del mismo, también me visualizo viajando por todo el mundo,
          intentando aprender cada día más de todas las experiencias que hay ahí
          afuera y me encantaria como primeros destinos ir países de habla
          inglesa, ya que quiero mejorar mi nivel de inglés y veo esto como una
          gran oportunidad.
        </p>
        <p>
          Me considero una persona muy disciplinada que se le mide a cualquier
          reto que vaya surgiendo en su camino, sin importar lo imposible que
          pueda parecer, soy empático con las demás personas, por lo general
          intento generar un agradable ambiente de trabajo con los demás, para
          así hacer más amena la jornada laboral.
        </p>
      </article>
    </>
  );
};

export default Home;
