import Button from '../../components/UI/Button';

import css from './Calculator.module.css';

function Calculator() {
  let sum = 0;

  const handleGetValue = (event) => {
    console.log(event.target.innerText);
  };

  return (
    <main className={css.calc__main}>
      <div className={css.calc__sum}>
        <p>{sum}</p>
      </div>
      <div className={css.calc__buttons}>
        <div className={css.grid}>
          <Button onClick={handleGetValue} value='7'>
            7
          </Button>
          <Button onClick={handleGetValue}>8</Button>
          <Button onClick={handleGetValue}>9</Button>
          <Button onClick={handleGetValue} color='blue'>
            DEL
          </Button>
          <Button onClick={handleGetValue}>4</Button>
          <Button onClick={handleGetValue}>5</Button>
          <Button onClick={handleGetValue}>6</Button>
          <Button onClick={handleGetValue}>+</Button>
          <Button onClick={handleGetValue}>1</Button>
          <Button onClick={handleGetValue}>2</Button>
          <Button onClick={handleGetValue}>3</Button>
          <Button onClick={handleGetValue}>-</Button>
          <Button onClick={handleGetValue}>.</Button>
          <Button onClick={handleGetValue}>0</Button>
          <Button onClick={handleGetValue}>/</Button>
          <Button onClick={handleGetValue}>x</Button>
          <div className={css['grid__item--span02']}>
            <Button onClick={handleGetValue} color='blue'>
              RESET
            </Button>
          </div>
          <div className={css['grid__item--span02']}>
            <Button onClick={handleGetValue} color='red'>
              =
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Calculator;
