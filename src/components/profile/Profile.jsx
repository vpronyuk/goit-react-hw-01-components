import propTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
  return (
    <div className={css['profile']}>
      <h2 className="section-title">Profile</h2>
      <div className={css['profile-card']}>
        <div className="description">
          <img src={avatar} alt="User avatar" className={css['avatar']} />
          <p className={css['name']}>{username}</p>
          <p className={css['tag']}>@{tag}</p>
          <p className={css['location']}>{location}</p>
        </div>
        <div className={css['stats-container']}>
          <ul className={css['stats']}>
            <li className={css['stats-item']}>
              <span className={css['label']}>Followers</span>
              <span className={css['quantity']}>{stats.followers}</span>
            </li>
            <li className={css['stats-item']}>
              <span className={css['label']}>Views</span>
              <span className={css['quantity']}>{stats.views}</span>
            </li>
            <li className={css['stats-item']}>
              <span className={css['label']}>Likes</span>
              <span className={css['quantity']}>{stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: propTypes.shape({
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.shape({
      followers: propTypes.number.isRequired,
      views: propTypes.number.isRequired,
      likes: propTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;
