import { TransactionHistory } from '../transactionHistory/TransactionHistory';
import { FriendListItem } from '../friendListItem/FriendListItem';
import transactions from 'data/transactions.json';

export const FriendList = ({ friends }) => {
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
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
