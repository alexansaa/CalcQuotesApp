import propTypes from 'prop-types';
import style from '@/styles/Screen.module.css';

function Screen({ calcScreen }) {
  return (
    <td className={style.zeroPlace} colSpan={4}>{calcScreen}</td>
  );
}

Screen.propTypes = {
  calcScreen: propTypes.string,
};

Screen.defaultProps = {
  calcScreen: '0',
};

export default Screen;
