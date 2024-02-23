import { TVShowAPI } from "./api/tv-show";
import s from "./style.module.css";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import Logo from "./components/Logo/Logo";
import logoImg from "./assets/images/logo.png";
import TVShowList from "./components/TVShowList/TVShowList";
import SearchBar from "./components/SearchBar/SearchBar";

TVShowAPI.fetchPopularTVShows();

const App = () => {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopularTVShows() {
    try {
      const response = await TVShowAPI.fetchPopularTVShows();
      if (response.length > 0) {
        setCurrentTVShow(response[0]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchRecommendations(tvShowId) {
    try {
      const response = await TVShowAPI.fetchRecommendations(tvShowId);
      if (response.length > 0) {
        setRecommendationList(response.slice(0, 10));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchByTitle(title) {
    try {
      const response = await TVShowAPI.fetchByTitle(title);
      if (response.length > 0) {
        setCurrentTVShow(response[0]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPopularTVShows();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  console.log(recommendationList);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
           url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImg}
              title={"Watowatch"}
              subtitle={"Find a show you may like"}
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTVShow && (
          <TVShowList
            tvShowList={recommendationList}
            onClickItem={(tvshow) => setCurrentTVShow(tvshow)}
          />
        )}
      </div>
    </div>
  );
};

export default App;
