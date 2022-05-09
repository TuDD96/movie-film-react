const CommentMovie = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-8">
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="tab-1"
          role="tabpanel"
          aria-labelledby="1-tab"
        >
          <div className="row">
            <div className="col-12">
              <div className="comments">
                <ul className="comments__list">
                  <li className="comments__item">
                    <div className="comments__autor">
                      <img
                        className="comments__avatar"
                        src="img/user.png"
                        alt=""
                      />
                      <span className="comments__name">John Doe</span>
                      <span className="comments__time">30.08.2018, 17:53</span>
                    </div>
                    <p className="comments__text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                    <div className="comments__actions">
                      <div className="comments__rate">
                        <button type="button">
                          <i className="icon ion-md-thumbs-up"></i>12
                        </button>

                        <button type="button">
                          7<i className="icon ion-md-thumbs-down"></i>
                        </button>
                      </div>

                      <button type="button">
                        <i className="icon ion-ios-share-alt"></i>Reply
                      </button>
                      <button type="button">
                        <i className="icon ion-ios-quote"></i>Quote
                      </button>
                    </div>
                  </li>

                  <li className="comments__item comments__item--answer">
                    <div className="comments__autor">
                      <img
                        className="comments__avatar"
                        src="img/user.png"
                        alt=""
                      />
                      <span className="comments__name">John Doe</span>
                      <span className="comments__time">24.08.2018, 16:41</span>
                    </div>
                    <p className="comments__text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <div className="comments__actions">
                      <div className="comments__rate">
                        <button type="button">
                          <i className="icon ion-md-thumbs-up"></i>8
                        </button>

                        <button type="button">
                          3<i className="icon ion-md-thumbs-down"></i>
                        </button>
                      </div>

                      <button type="button">
                        <i className="icon ion-ios-share-alt"></i>Reply
                      </button>
                      <button type="button">
                        <i className="icon ion-ios-quote"></i>Quote
                      </button>
                    </div>
                  </li>

                  <li className="comments__item comments__item--quote">
                    <div className="comments__autor">
                      <img
                        className="comments__avatar"
                        src="img/user.png"
                        alt=""
                      />
                      <span className="comments__name">John Doe</span>
                      <span className="comments__time">11.08.2018, 11:11</span>
                    </div>
                    <p className="comments__text">
                      <span>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                      </span>
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    <div className="comments__actions">
                      <div className="comments__rate">
                        <button type="button">
                          <i className="icon ion-md-thumbs-up"></i>11
                        </button>

                        <button type="button">
                          1<i className="icon ion-md-thumbs-down"></i>
                        </button>
                      </div>

                      <button type="button">
                        <i className="icon ion-ios-share-alt"></i>Reply
                      </button>
                      <button type="button">
                        <i className="icon ion-ios-quote"></i>Quote
                      </button>
                    </div>
                  </li>

                  <li className="comments__item">
                    <div className="comments__autor">
                      <img
                        className="comments__avatar"
                        src="img/user.png"
                        alt=""
                      />
                      <span className="comments__name">John Doe</span>
                      <span className="comments__time">07.08.2018, 14:33</span>
                    </div>
                    <p className="comments__text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                    <div className="comments__actions">
                      <div className="comments__rate">
                        <button type="button">
                          <i className="icon ion-md-thumbs-up"></i>99
                        </button>

                        <button type="button">
                          35<i className="icon ion-md-thumbs-down"></i>
                        </button>
                      </div>

                      <button type="button">
                        <i className="icon ion-ios-share-alt"></i>Reply
                      </button>
                      <button type="button">
                        <i className="icon ion-ios-quote"></i>Quote
                      </button>
                    </div>
                  </li>

                  <li className="comments__item">
                    <div className="comments__autor">
                      <img
                        className="comments__avatar"
                        src="img/user.png"
                        alt=""
                      />
                      <span className="comments__name">John Doe</span>
                      <span className="comments__time">02.08.2018, 15:24</span>
                    </div>
                    <p className="comments__text">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum' will uncover many web sites still in
                      their infancy. Various versions have evolved over the
                      years, sometimes by accident, sometimes on purpose
                      (injected humour and the like).
                    </p>
                    <div className="comments__actions">
                      <div className="comments__rate">
                        <button type="button">
                          <i className="icon ion-md-thumbs-up"></i>74
                        </button>

                        <button type="button">
                          13<i className="icon ion-md-thumbs-down"></i>
                        </button>
                      </div>

                      <button type="button">
                        <i className="icon ion-ios-share-alt"></i>Reply
                      </button>
                      <button type="button">
                        <i className="icon ion-ios-quote"></i>Quote
                      </button>
                    </div>
                  </li>
                </ul>

                <form action="#" className="form">
                  <textarea
                    id="text"
                    name="text"
                    className="form__textarea"
                    placeholder="Add comment"
                  ></textarea>
                  <button type="button" className="form__btn">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="tab-2"
          role="tabpanel"
          aria-labelledby="2-tab"
        >
          <div className="row">
            <div className="col-12">
              <div className="reviews">
                <ul className="reviews__list">
                  <li className="reviews__item">
                    <div className="reviews__autor">
                      <img
                        className="reviews__avatar"
                        src="img/user.png"
                        alt=""
                      />
                      <span className="reviews__name">
                        Best Marvel movie in my opinion
                      </span>
                      <span className="reviews__time">
                        24.08.2018, 17:53 by John Doe
                      </span>

                      <span className="reviews__rating">
                        <i className="icon ion-ios-star"></i>8.4
                      </span>
                    </div>
                    <p className="reviews__text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </li>

                  <li className="reviews__item">
                    <div className="reviews__autor">
                      <img
                        className="reviews__avatar"
                        src="img/user.png"
                        alt=""
                      />
                      <span className="reviews__name">
                        Best Marvel movie in my opinion
                      </span>
                      <span className="reviews__time">
                        24.08.2018, 17:53 by John Doe
                      </span>

                      <span className="reviews__rating">
                        <i className="icon ion-ios-star"></i>9.0
                      </span>
                    </div>
                    <p className="reviews__text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </li>

                  <li className="reviews__item">
                    <div className="reviews__autor">
                      <img
                        className="reviews__avatar"
                        src="img/user.png"
                        alt=""
                      />
                      <span className="reviews__name">
                        Best Marvel movie in my opinion
                      </span>
                      <span className="reviews__time">
                        24.08.2018, 17:53 by John Doe
                      </span>

                      <span className="reviews__rating">
                        <i className="icon ion-ios-star"></i>7.5
                      </span>
                    </div>
                    <p className="reviews__text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </li>
                </ul>

                <form action="#" className="form">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Title"
                  />
                  <textarea
                    className="form__textarea"
                    placeholder="Review"
                  ></textarea>
                  <div className="form__slider">
                    <div
                      className="form__slider-rating"
                      id="slider__rating"
                    ></div>
                    <div
                      className="form__slider-value"
                      id="form__slider-value"
                    ></div>
                  </div>
                  <button type="button" className="form__btn">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="tab-3"
          role="tabpanel"
          aria-labelledby="3-tab"
        >
          <div className="gallery" itemScope>
            <div className="row">
              <figure
                className="col-12 col-sm-6 col-xl-4"
                itemProp="associatedMedia"
                itemScope
              >
                <a
                  href="img/gallery/project-1.jpg"
                  itemProp="contentUrl"
                  data-size="1920x1280"
                >
                  <img
                    src="img/gallery/project-1.jpg"
                    itemProp="thumbnail"
                    alt="Image description"
                  />
                </a>
                <figcaption itemProp="caption description">
                  Some image caption 1
                </figcaption>
              </figure>

              <figure
                className="col-12 col-sm-6 col-xl-4"
                itemProp="associatedMedia"
                itemScope
              >
                <a
                  href="img/gallery/project-2.jpg"
                  itemProp="contentUrl"
                  data-size="1920x1280"
                >
                  <img
                    src="img/gallery/project-2.jpg"
                    itemProp="thumbnail"
                    alt="Image description"
                  />
                </a>
                <figcaption itemProp="caption description">
                  Some image caption 2
                </figcaption>
              </figure>

              <figure
                className="col-12 col-sm-6 col-xl-4"
                itemProp="associatedMedia"
                itemScope
              >
                <a
                  href="img/gallery/project-3.jpg"
                  itemProp="contentUrl"
                  data-size="1920x1280"
                >
                  <img
                    src="img/gallery/project-3.jpg"
                    itemProp="thumbnail"
                    alt="Image description"
                  />
                </a>
                <figcaption itemProp="caption description">
                  Some image caption 3
                </figcaption>
              </figure>

              <figure
                className="col-12 col-sm-6 col-xl-4"
                itemProp="associatedMedia"
                itemScope
              >
                <a
                  href="img/gallery/project-4.jpg"
                  itemProp="contentUrl"
                  data-size="1920x1280"
                >
                  <img
                    src="img/gallery/project-4.jpg"
                    itemProp="thumbnail"
                    alt="Image description"
                  />
                </a>
                <figcaption itemProp="caption description">
                  Some image caption 4
                </figcaption>
              </figure>

              <figure
                className="col-12 col-sm-6 col-xl-4"
                itemProp="associatedMedia"
                itemScope
              >
                <a
                  href="img/gallery/project-5.jpg"
                  itemProp="contentUrl"
                  data-size="1920x1280"
                >
                  <img
                    src="img/gallery/project-5.jpg"
                    itemProp="thumbnail"
                    alt="Image description"
                  />
                </a>
                <figcaption itemProp="caption description">
                  Some image caption 5
                </figcaption>
              </figure>

              <figure
                className="col-12 col-sm-6 col-xl-4"
                itemProp="associatedMedia"
                itemScope
              >
                <a
                  href="img/gallery/project-6.jpg"
                  itemProp="contentUrl"
                  data-size="1920x1280"
                >
                  <img
                    src="img/gallery/project-6.jpg"
                    itemProp="thumbnail"
                    alt="Image description"
                  />
                </a>
                <figcaption itemProp="caption description">
                  Some image caption 6
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentMovie;
