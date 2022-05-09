import { CATEGORY } from "../../../../constants/constant";

const HeaderNewItem = () => {
  return (
    <ul
      className="nav nav-tabs content__tabs"
      id="content__tabs"
      role="tablist"
    >
      {CATEGORY.map((category, index) => {
        return (
          index <= 5 && (
            <li className="nav-item" key={index}>
              <a
                className={index !== 0 ? `nav-link` : `nav-link active`}
                data-toggle="tab"
                href={`#tab-${index}`}
                role="tab"
                aria-controls={`tab-${index}`}
                aria-selected={index === 0}
              >
                {category.name}
              </a>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default HeaderNewItem;
