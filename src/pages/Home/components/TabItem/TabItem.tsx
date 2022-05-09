import { mockSlider } from "../mock";
import MovieItem from "../../../../components/MovieItem/MovieItem";
import { Props } from "./type";

const TabItem = (props: Props) => {
  const { movies, active, index } = props;

  return (
    <div
      className={active ? `tab-pane fade show active` : `tab-pane fade show`}
      id={`tab-${index}`}
      role="tabpanel"
      aria-labelledby={`${index}-tab`}
    >
      <div className="row">
        {movies?.map((mov, index) => {
          return <MovieItem movie={mov} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TabItem;
