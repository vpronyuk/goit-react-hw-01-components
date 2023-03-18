import propTypes from 'prop-types';
import css from './FriendList.module.css';

import { FriendListItem } from '../friendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <div className={css['friend']}>
      <h2 className={css['section-title']}>Friend List</h2>
      <ul className={css['friend-list']}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
    })
  ),
};

export default FriendList;

