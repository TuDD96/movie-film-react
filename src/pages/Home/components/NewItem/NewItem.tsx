import { CATEGORY } from "../../../../constants/constant";
import HeaderNewItem from "../HeaderNewItem/HeaderNewItem";
import HeaderNewItemMobile from "../HeaderNewItemMobile/HeaderNewItemMobile";
import TabItem from "../TabItem/TabItem";
import { Props } from "./types";

const NewItem = (props: Props) => {
  const { movieOfCategory } = props;

  return (
    <section className="content">
      <div className="content__head">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="content__title">New items</h2>
              <HeaderNewItem />
              <HeaderNewItemMobile />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="tab-content" id="myTabContent">
          {CATEGORY.map((cate, index) => {
            const newMovies: any = movieOfCategory;

            return (
              <TabItem
                key={index}
                movies={newMovies[cate.slug]}
                active={index === 0}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewItem;
