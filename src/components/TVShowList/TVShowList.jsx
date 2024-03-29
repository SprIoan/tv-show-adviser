import TVShowListItem from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

const TVShowList = ({ tvShowList, onClickItem }) => {
  return (
    <div>
      <div className={s.title}>You'll probably like :</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => (
          <span key={tvShow.id} className={s.tv_show_item}>
            <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default TVShowList;
