import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home-inner">
        <div className="container">
          <div className="overlay"></div>
          <div className="home-intro">
            <h1>
              Добро пожаловать в <span class="brand">Flaer.uz</span>
            </h1>
            <p>Мы поможем Вам создать флаеры для Ваших нужд</p>
            <a href="#create" class="btn">
              Узнать больше
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
