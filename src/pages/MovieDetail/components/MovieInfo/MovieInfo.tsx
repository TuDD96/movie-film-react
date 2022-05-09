import { getUrlMovie } from "../../../../utils/helper";
import { Props } from "./types";

const MovieInfo = (props: Props) => {
  const { movie } = props;

  function createMarkup() {
    return { __html: movie?.content };
  }

  return (
    <>
      <div className="col-12">
        <h1 className="details__title">{movie?.name}</h1>
      </div>

      <div className="col-10">
        <div className="card card--details card--series">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
              <div className="card__cover">
                <img
                  style={{ height: 320 }}
                  src={getUrlMovie(movie?.thumb_url)}
                  alt={movie?.name}
                />
              </div>
            </div>

            <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-9">
              <div className="card__content">
                <div className="card__wrap">
                  <span className="card__rate">
                    <i className="icon ion-ios-star"></i>8.4
                  </span>

                  <ul className="card__list">
                    <li>{movie?.quality}</li>
                  </ul>
                </div>

                <ul className="card__meta">
                  <li>
                    <span>Genre:</span>
                    {movie?.category.map((elm, index) => {
                      return (
                        <a href="#" key={index}>
                          {elm.name}
                        </a>
                      );
                    })}
                  </li>
                  <li>
                    <span>Release year:</span> {movie?.year}
                  </li>
                  <li>
                    <span>Running time:</span> {movie?.time}
                  </li>
                  <li>
                    <span>Country:</span>{" "}
                    <a href="#">{movie?.country[0].name}</a>
                  </li>
                </ul>

                <div className="card__description card__description--details">
                  {/* {movie?.content} */}
                  {<div dangerouslySetInnerHTML={createMarkup()} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
