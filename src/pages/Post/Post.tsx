import { rawHTML } from "../../common/constants";

const Post = () => {
  function createMarkup() {
    return { __html: rawHTML };
  }

  return (
    <div className="col-md-9" style={{ paddingLeft: 50 }}>
      <div className="col-md-12 page-body">
        <div className="row">
          <div className="sub-title">
            <a href="index.html" title="Go to Home Page">
              <h2>Back Home</h2>
            </a>
            <a href="#comment" className="smoth-scroll">
              <i className="icon-bubbles"></i>
            </a>
          </div>

          <div className="col-md-12 content-page">
            <div className="col-md-12 blog-post">
              <div className="post-title">
                <h1>
                  How to make your company website based on bootstrap framework
                  on localhost?
                </h1>
              </div>

              <div className="post-info">
                <span>
                  November 23, 2016 / by
                  <a href="#" target="_blank">
                    Alex Parker
                  </a>
                </span>
              </div>

              {/*  */}
              {<div dangerouslySetInnerHTML={createMarkup()} />}
            </div>
          </div>
        </div>

        <div className="col-md-8 col-md-offset-2">
          <form
            id="mc-form"
            method="post"
            action="http://uipasta.us14.list-manage.com/subscribe/post?u=854825d502cdc101233c08a21&amp;id=86e84d44b7"
          >
            <div className="subscribe-form margin-top-20">
              <input
                id="mc-email"
                type="email"
                placeholder="Email Address"
                className="text-input"
              />
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </div>
            <p>Subscribe to my weekly newsletter</p>
            <label htmlFor="mc-email" className="mc-label"></label>
          </form>
        </div>
      </div>

      <div className="col-md-12 page-body margin-top-50 footer">
        <footer>
          <ul className="menu-link">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="work.html">Work</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>

          <p>© Copyright 2016 DevBlog. All rights reserved</p>

          <div className="uipasta-credit">
            Design By
            <a href="http://www.uipasta.com" target="_blank">
              UiPasta
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Post;
