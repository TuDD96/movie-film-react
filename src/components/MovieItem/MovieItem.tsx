import { Props } from "./type";
import { Link } from "react-router-dom";
import { getUrlMovie } from "../../utils/helper";

const MovieItem = (props: Props) => {
  const { movie } = props;

  return (
    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
      <div className="card">
        <div className="card__cover">
          <img
            src={getUrlMovie(movie.thumb_url)}
            alt=""
            style={{ height: 240 }}
          />
          <Link to={`${movie.slug}`} className="card__play">
            <i className="icon ion-ios-play"></i>
          </Link>
        </div>
        <div className="card__content">
          <h5 className="card__title">
            <Link
              style={{ whiteSpace: "pre-wrap", fontSize: 16 }}
              to={`${movie.slug}`}
            >
              {movie.name}
            </Link>
          </h5>
          <span className="card__category">
            {movie.category.map((cate, index) => {
              return (
                index <= 1 && (
                  <a key={index} href="#" style={{ whiteSpace: "pre-wrap" }}>
                    {cate.name}
                    {movie.category.length > 2 && index == 1 ? ",..." : ""}
                  </a>
                )
              );
            })}
          </span>
          {/* <span className="card__rate">
            <i className="icon ion-ios-star"></i>
            {8}
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
