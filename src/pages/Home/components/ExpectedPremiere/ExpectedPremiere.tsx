import { mockSlider } from "../mock";
import MovieItem from "../../../../components/MovieItem/MovieItem";

const ExpectedPremiere = () => {
  return (
    <section className="section section--bg" data-bg="img/section/section.jpg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section__title">Expected premiere</h2>
          </div>
          {/* {mockSlider.map((movie, index) => {
            return <MovieItem movie={movie} key={index} />;
          })}
          {mockSlider.map((movie, index) => {
            return <MovieItem movie={movie} key={index} />;
          })} */}

          <div className="col-12">
            <a href="#" className="section__btn">
              Show more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectedPremiere;
