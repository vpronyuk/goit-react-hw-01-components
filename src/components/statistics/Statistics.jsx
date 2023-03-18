import propTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <div className={css['statistics']}>
      <div className={css['statistics-container']}>
        {title && <h2 className={css['title']}>{title}</h2>}

        <ul className={css['stat-list']}>
          {stats.map(({ id, label, percentage }) => (
            <li
              key={id}
              className={css['item']}
              style={{ backgroundColor: getRandomDarkColor() }}
            >
              <span className={css['label']}>{label}</span>
              <span className={css['percentage']}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const getRandomDarkColor = () => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  return `rgb(${red}, ${green}, ${blue})`;
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
