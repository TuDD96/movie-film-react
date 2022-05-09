import { useEffect, useState } from "react";
import { Movie } from "../../../../Models/Movie";
import { getUrlMovie } from "../../../../utils/helper";
import { Props } from "./type";

const MOCK = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const Slider = (props: Props) => {
  const { movies } = props;

  const renderSlider = () => {
    return movies.map((item, index) => (
      <div key={index.toString()} className="item">
        <div className="card card--big">
          <div className="card__cover">
            <img src={getUrlMovie(movies[index]?.thumb_url!)} alt="" />
            <a href="#" className="card__play">
              <i className="icon ion-ios-play"></i>
            </a>
          </div>
          <div className="card__content">
            <h3 className="card__title">
              <a href="#">{movies[index]?.name!}</a>
            </h3>
            <span className="card__category">
              {movies[index]?.category.map((cate, indexCate) => {
                return (
                  <a key={indexCate} href="#">
                    {cate?.name!}
                  </a>
                );
              })}
            </span>
            <span className="card__rate">
              <i className="icon ion-ios-star"></i>
              {8}
            </span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="home">
      <div className="owl-carousel home__bg">
        <div className="item home__cover" data-bg="img/home/home__bg.jpg"></div>
        <div
          className="item home__cover"
          data-bg="img/home/home__bg2.jpg"
        ></div>
        <div
          className="item home__cover"
          data-bg="img/home/home__bg3.jpg"
        ></div>
        <div
          className="item home__cover"
          data-bg="img/home/home__bg4.jpg"
        ></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="home__title">
              <b>NEW ITEMS</b> OF THIS SEASON
            </h1>

            <button className="home__nav home__nav--prev" type="button">
              <i className="icon ion-ios-arrow-round-back"></i>
            </button>
            <button className="home__nav home__nav--next" type="button">
              <i className="icon ion-ios-arrow-round-forward"></i>
            </button>
          </div>

          <div className="col-12">
            <div className="owl-carousel home__carousel">{renderSlider()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
