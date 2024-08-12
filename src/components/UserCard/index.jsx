import { connect } from "react-redux";
import { switchFavourite } from "./../../store/slices/userCardSlice";
import styles from "./UserCard.module.sass";
import classNames from "classnames";
function UserCard({
  user: { firstName, lastName, isFavourite },
  switchFavourite,
}) {
  const likeClassNames = classNames({
    [styles.likePressed]: isFavourite,
    [styles.likeNotPressed]: "",
  });

  return (
    <div className={styles.userCardWrapper}>
      <h2 className={styles.fullName}>
        {firstName} {lastName}
      </h2>
      <button className={styles.favouriteBtn} onClick={() => switchFavourite()}>
        <i className={`${"fa-solid fa-heart"} ${likeClassNames}`}></i>
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({ user: state.user });

const mapDispatchToProps = { switchFavourite };

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
