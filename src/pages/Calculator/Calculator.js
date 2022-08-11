import Button from '../../components/UI/Button';

import css from './Calculator.module.css';

function Calculator() {
  let sum = 0;

  return (
    <main className={css.calc__main}>
      <div className={css.calc__sum}>
        <p>{sum}</p>
      </div>
      <div className={css.calc__buttons}>
        <div className={css.grid}>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button color='blue'>DEL</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>+</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>-</Button>
          <Button>.</Button>
          <Button>0</Button>
          <Button>/</Button>
          <Button>x</Button>
          <div className={css['grid__item--span02']}>
            <Button color='blue'>RESET</Button>
          </div>
          <div className={css['grid__item--span02']}>
            <Button color='red'>=</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Calculator;
