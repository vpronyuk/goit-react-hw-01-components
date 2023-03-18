export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span
        className={isOnline ? 'status is-online' : 'status is-offline'}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width={48} />
      <p className="name">{name}</p>
    </li>
  );
};
