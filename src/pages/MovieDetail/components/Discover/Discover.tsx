const Discover = () => {
  return (
    <div className="content__head">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="content__title">Discover</h2>

            <ul
              className="nav nav-tabs content__tabs"
              id="content__tabs"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#tab-1"
                  role="tab"
                  aria-controls="tab-1"
                  aria-selected="true"
                >
                  Comments
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tab-2"
                  role="tab"
                  aria-controls="tab-2"
                  aria-selected="false"
                >
                  Reviews
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tab-3"
                  role="tab"
                  aria-controls="tab-3"
                  aria-selected="false"
                >
                  Photos
                </a>
              </li>
            </ul>

            <div className="content__mobile-tabs" id="content__mobile-tabs">
              <div
                className="content__mobile-tabs-btn dropdown-toggle"
                role="navigation"
                id="mobile-tabs"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <input type="button" value="Comments" />
                <span></span>
              </div>

              <div
                className="content__mobile-tabs-menu dropdown-menu"
                aria-labelledby="mobile-tabs"
              >
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="1-tab"
                      data-toggle="tab"
                      href="#tab-1"
                      role="tab"
                      aria-controls="tab-1"
                      aria-selected="true"
                    >
                      Comments
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="2-tab"
                      data-toggle="tab"
                      href="#tab-2"
                      role="tab"
                      aria-controls="tab-2"
                      aria-selected="false"
                    >
                      Reviews
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="3-tab"
                      data-toggle="tab"
                      href="#tab-3"
                      role="tab"
                      aria-controls="tab-3"
                      aria-selected="false"
                    >
                      Photos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
