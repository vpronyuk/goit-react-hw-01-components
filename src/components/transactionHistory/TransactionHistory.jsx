import propTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  console.log(css);
  return (
    <div className={css['transaction-history']}>
      <h2 className="section-title">Transaction History</h2>
      <div className={css['table-container']}>
        <table className={css['transaction-history__table']}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map(({ id, type, amount, currency }) => (
              <tr key={id}>
                <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
