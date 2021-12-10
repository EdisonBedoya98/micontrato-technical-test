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
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate asperiores autem fuga illo blanditiis, voluptatibus aliquam. Iste repellendus, assumenda repellat minus vel iure facilis laboriosam qui, quasi asperiores voluptates!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi repellendus nam maiores odio? Molestias, nesciunt? Quisquam doloremque suscipit illo quos iste, deleniti, ipsum aperiam perferendis nesciunt nam laboriosam temporibus ea?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate asperiores autem fuga illo blanditiis, voluptatibus aliquam. Iste repellendus, assumenda repellat minus vel iure facilis laboriosam qui, quasi asperiores voluptates!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi repellendus nam maiores odio? Molestias, nesciunt? Quisquam doloremque suscipit illo quos iste, deleniti, ipsum aperiam perferendis nesciunt nam laboriosam temporibus ea?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate asperiores autem fuga illo blanditiis, voluptatibus aliquam. Iste repellendus, assumenda repellat minus vel iure facilis laboriosam qui, quasi asperiores voluptates!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi repellendus nam maiores odio? Molestias, nesciunt? Quisquam doloremque suscipit illo quos iste, deleniti, ipsum aperiam perferendis nesciunt nam laboriosam temporibus ea?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate asperiores autem fuga illo blanditiis, voluptatibus aliquam. Iste repellendus, assumenda repellat minus vel iure facilis laboriosam qui, quasi asperiores voluptates!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi repellendus nam maiores odio? Molestias, nesciunt? Quisquam doloremque suscipit illo quos iste, deleniti, ipsum aperiam perferendis nesciunt nam laboriosam temporibus ea?
    </article>
    </>
  );
};

export default Home;
