import { CATEGORY } from "../../../../constants/constant";

const HeaderNewItemMobile = () => {
  return (
    <div className="content__mobile-tabs" id="content__mobile-tabs">
      <div
        className="content__mobile-tabs-btn dropdown-toggle"
        role="navigation"
        id="mobile-tabs"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <input type="button" value="New items" />
        <span></span>
      </div>

      <div
        className="content__mobile-tabs-menu dropdown-menu"
        aria-labelledby="mobile-tabs"
      >
        <ul className="nav nav-tabs" role="tablist">
          {CATEGORY.map((category, index) => {
            return (
              <li className="nav-item" key={index}>
                <a
                  className={index !== 0 ? `nav-link` : `nav-link active`}
                  id={`${index}-tab`}
                  data-toggle="tab"
                  href={`#tab-${index}`}
                  role="tab"
                  aria-controls={`tab-${index}`}
                  aria-selected={index === 0}
                >
                  {category.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeaderNewItemMobile;
