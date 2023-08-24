import MyCalculator from '@/components/CalcLogic/CalculatorLogic.jsx'
import style from '@/styles/Calculator.module.css';

const Calculator = () => {
  return (
    <div className={style.matContainer}>
      <div className={style.column}>Let's do some math!</div>
      <MyCalculator />
    </div>
  );
};

export default Calculator;