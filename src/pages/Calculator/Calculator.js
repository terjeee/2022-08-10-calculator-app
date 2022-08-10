import Button from '../../components/UI/Button';

import css from './Calculator.module.css';

function Calculator() {
  return (
    <main className={css.calc__main}>
      <div className={css.calc__sum}>
        <p>149,99 j</p>
      </div>
      <div className={css.calc__buttons}>
        <div className={css.grid__01}>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>DEL</Button>
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
        </div>
        <div className={css.grid__02}>
          <Button>Reset</Button>
          <Button>=</Button>
        </div>
      </div>
    </main>
  );
}

export default Calculator;
