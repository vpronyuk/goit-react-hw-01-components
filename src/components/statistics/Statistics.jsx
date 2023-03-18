// import PropTypes from 'prop-types';
// // import statsData from './data.json';
// import { Statistics } from './statistics';

// const Statistics = ({ title, stats }) => {
//   return (
//     <section className="statistics">
//       {title && <h2 className="title">{title}</h2>}

//       <ul className="stat-list">
//         {stats.map(({ id, label, percentage }) => (
//           <li key={id} className="item">
//             <span className="label">{label}</span>
//             <span className="percentage">{percentage}%</span>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

import { FriendList } from 'components/friendList/FriendList';
import friends from 'data/friends.json';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
      <FriendList friends={friends} />
    </section>
  );
};

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

// export default Statistics;
