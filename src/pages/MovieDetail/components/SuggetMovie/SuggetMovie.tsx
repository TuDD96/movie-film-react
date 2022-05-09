import MovieItem from "../../../../components/MovieItem/MovieItem";
import { mockSlider } from "../../../Home/components/mock";

const SuggetMovie = () => {
  return (
    <div className="col-12 col-lg-12 col-xl-12">
      <div className="row">
        <div className="col-12">
          <h2 className="section__title section__title--sidebar">
            You may also like...
          </h2>
        </div>

        {/* {mockSlider.map((movie, index) => {
          return <MovieItem movie={movie} key={index} />;
        })}
        {mockSlider.map((movie, index) => {
          return <MovieItem movie={movie} key={index} />;
        })} */}
      </div>
    </div>
  );
};

export default SuggetMovie;
