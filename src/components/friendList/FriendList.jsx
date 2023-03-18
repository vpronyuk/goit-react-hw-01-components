import propTypes from 'prop-types';

// import TransactionHistory from '../transactionHistory/TransactionHistory';
import { FriendListItem } from '../friendListItem/FriendListItem';
// import transactions from 'data/transactions.json';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
      <div>
        <h2>Transaction History</h2>
        {/* <TransactionHistory items={transactions} /> */}
      </div>
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
