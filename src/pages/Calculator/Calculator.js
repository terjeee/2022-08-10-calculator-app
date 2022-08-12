import { useState } from 'react';

import Button from '../../components/UI/Button';

import css from './Calculator.module.css';

function Calculator() {
  const [stateSum, setStateSum] = useState(0);
  // const [stateOperator, setStateOperator] = useState('');

  const handleGetNumber = (event) => {
    const keyPressed = Number(event.target.innerHTML);

    if (stateSum === 0) setStateSum('');
    setStateSum((state) => state + keyPressed);
  };

  const handleGetOperator = (event) => {
    const operatorPressed = event.target.innerHTML;
    console.log(operatorPressed, typeof operatorPressed);
  };

  const handleErase = () => {
    if (stateSum === 0) return;
    if (stateSum.length === 1) return setStateSum(0);

    setStateSum((state) => state.slice(0, -1));
  };

  const handleEraseAll = () => {
    setStateSum(0);
  };

  return (
    <main className={css.calc__main}>
      <div className={css.calc__sum}>
        <p>
          {/* {stateOperator} */}
          {stateSum}
        </p>
      </div>
      <div className={css.calc__buttons}>
        <div className={css.grid}>
          <Button onClick={handleGetNumber} color='grey'>
            7
          </Button>
          <Button onClick={handleGetNumber} color='grey'>
            8
          </Button>
          <Button onClick={handleGetNumber} color='grey'>
            9
          </Button>
          <Button onClick={handleErase} color='blue'>
            DEL
          </Button>
          <Button onClick={handleGetNumber} color='grey'>
            4
          </Button>
          <Button onClick={handleGetNumber} color='grey'>
            5
          </Button>
          <Button onClick={handleGetNumber} color='grey'>
            6
          </Button>
          <Button onClick={handleGetOperator} color='grey'>
            +
          </Button>
          <Button onClick={handleGetNumber} color='grey'>
            1
          </Button>
          <Button onClick={handleGetNumber} color='grey'>
            2
          </Button>
          <Button onClick={handleGetNumber} color='grey'>
            3
          </Button>
          <Button onClick={handleGetNumber} color='grey'>
            -
          </Button>
          <Button onClick={handleGetNumber} color='grey'>
            .
          </Button>
          <Button onClick={handleGetNumber} color='grey'>
            0
          </Button>
          <Button onClick={handleGetOperator} color='grey'>
            /
          </Button>
          <Button onClick={handleGetOperator} color='grey'>
            x
          </Button>
          <div className={css['grid__item--span02']}>
            <Button onClick={handleEraseAll} color='blue'>
              RESET
            </Button>
          </div>
          <div className={css['grid__item--span02']}>
            <Button onClick={handleGetOperator} color='red'>
              =
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Calculator;
