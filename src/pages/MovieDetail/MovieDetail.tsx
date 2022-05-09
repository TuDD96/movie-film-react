import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetail } from "../../apis/movie";
import { Episodes, LinkMovie, Movie } from "../../Models/Movie";

import Discover from "./components/Discover/Discover";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import SuggetMovie from "./components/SuggetMovie/SuggetMovie";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const MovieDetail = () => {
  let { slug } = useParams();
  const queryParams = new URLSearchParams(window.location.search);
  const queryEpisode = queryParams.get("tap");
  const queryServer = queryParams.get("server");

  const [movie, setMovie] = useState<Movie>();
  const [episodes, setEpisodes] = useState<Episodes>();
  const [linkCurrent, setLinkCurrent] = useState<string>();
  const [episodeCurrent, setEpisodeCurrent] = useState<number>(() => {
    return queryEpisode !== null ? +queryEpisode : 0;
  });
  const [serverCurrent, setServerCurrent] = useState<number>(() => {
    return queryServer !== null ? +queryServer : 0;
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    initData();
  }, []);

  const initData = async () => {
    const response = await getMovieDetail({ slug: slug! });

    setMovie(response.item);
    setEpisodes(response.episodes);

    const episodeCurrent = response?.episodes?.episode[0]?.server_data.find(
      (elm) => elm.slug === `${queryEpisode}`
    );

    let link = episodeCurrent?.link_m3u8;
    if (!episodeCurrent) {
      link = response?.episodes?.episode[0]?.server_data[0].link_m3u8;
    }
    setLinkCurrent(link);
  };

  const handleChangeEpisode = ({
    elm,
    indexItem,
    indexElm,
  }: {
    elm: LinkMovie;
    indexItem: number;
    indexElm: number;
  }) => {
    setServerCurrent(indexItem);
    setEpisodeCurrent(indexElm);
    setLinkCurrent(elm.link_m3u8);
  };

  const buttonActive = (indexItem: number, indexElm: number) => {
    let bg = "";

    if (serverCurrent === indexItem && episodeCurrent === indexElm) {
      bg = "#333";
    }

    return bg;
  };

  const renderEpisodes = () => {
    return episodes?.episode?.map((item, indexItem) => {
      return (
        <div key={indexItem}>
          <span style={{ color: "#fff" }}>{item?.server_name}:</span>
          <hr />
          <div className="row">
            {item?.server_data.map((elm: LinkMovie, indexElm) => (
              <Link
                to={`/${slug}?tap=${elm?.slug}&server=${indexItem}`}
                onClick={() =>
                  handleChangeEpisode({
                    elm: elm,
                    indexItem: indexItem,
                    indexElm: indexElm,
                  })
                }
                key={indexElm}
                className="header__sign-in"
                style={{
                  marginLeft: 10,
                  width: 40,
                  height: 40,
                  marginBottom: 10,
                  color: "#fff",
                  cursor: "pointer",
                  background: buttonActive(indexItem, indexElm),
                }}
              >
                {elm?.name}
              </Link>
            ))}
          </div>

          <br />
        </div>
      );
    });
  };

  return (
    <>
      <section className="section details">
        <div className="details__bg" data-bg="img/home/home__bg.jpg"></div>
        <div className="container">
          <div className="row">
            <MovieInfo movie={movie!} />
            {linkCurrent && (
              <VideoPlayer episodes={episodes!} linkCurrent={linkCurrent!} />
            )}

            <div className="col-12 col-xl-12">
              <div style={{ marginTop: 20, paddingLeft: 15 }}>
                {/* <div className="row">{renderEpisodes()}</div> */}
                {renderEpisodes()}
              </div>
            </div>

            <div className="col-12">
              <div className="details__wrap">
                <div className="details__devices">
                  <span className="details__devices-title">
                    Available on devices:
                  </span>
                  <ul className="details__devices-list">
                    <li>
                      <i className="icon ion-logo-apple"></i>
                      <span>IOS</span>
                    </li>
                    <li>
                      <i className="icon ion-logo-android"></i>
                      <span>Android</span>
                    </li>
                    <li>
                      <i className="icon ion-logo-windows"></i>
                      <span>Windows</span>
                    </li>
                    <li>
                      <i className="icon ion-md-tv"></i>
                      <span>Smart TV</span>
                    </li>
                  </ul>
                </div>

                <div className="details__share">
                  <span className="details__share-title">
                    Share with friends:
                  </span>

                  <ul className="details__share-list">
                    <li className="facebook">
                      <a href="#">
                        <i className="icon ion-logo-facebook"></i>
                      </a>
                    </li>
                    <li className="instagram">
                      <a href="#">
                        <i className="icon ion-logo-instagram"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="#">
                        <i className="icon ion-logo-twitter"></i>
                      </a>
                    </li>
                    <li className="vk">
                      <a href="#">
                        <i className="icon ion-logo-vk"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <Discover />

        <div className="container">
          <div className="row">
            {/* <CommentMovie /> */}
            <SuggetMovie />
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetail;
