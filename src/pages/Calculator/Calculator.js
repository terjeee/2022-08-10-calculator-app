import { useState } from 'react';

import Button from '../../components/UI/Button';

import css from './Calculator.module.css';

function Calculator() {
  const [getFirstNum, setGetFirstNum] = useState(true);

  const defaultSum = '0';
  const [inputNum, setInputNum] = useState(defaultSum);

  const [firstNum, setFirstNum] = useState(null);
  const [secondNum, setSecondNum] = useState(null);
  const [operator, setOperator] = useState(null);

  console.log('inputNum: ', inputNum);
  console.log('operator: ', operator);
  console.log('firstNum: ', firstNum);
  console.log('secondNum: ', secondNum);

  const handleGetNumber = (event) => {
    const keyPressed = event.target.innerHTML;
    if (inputNum === defaultSum && keyPressed === defaultSum) return;
    if (inputNum === defaultSum) setInputNum('');
    // if (!inputNum.includes(',') && inputNum.replace(/\s/g, '').length % 3 === 0)
    //   setInputNum((state) => state + ' ');
    setInputNum((state) => state + keyPressed);
  };

  const handleGetComma = () => {
    if (inputNum.includes('.')) return;
    setInputNum((state) => state + '.');
  };

  const handleErase = () => {
    if (inputNum === 0) return;
    if (inputNum.length === 1) return setInputNum(defaultSum);
    setInputNum((state) => state.slice(0, -1));
  };

  const handleGetOperator = (event) => {
    const operatorPressed = event.target.innerHTML;
    console.log(operatorPressed, typeof operatorPressed);

    setOperator(operatorPressed);
  };

  const handleCalculate = () => {
    console.log('=');
  };

  const handleReset = () => {
    setInputNum(defaultSum);
    setFirstNum(null);
    setSecondNum(null);
    setOperator(null);
  };

  return (
    <main className={css.main}>
      <div className={css.sum}>
        {firstNum && (
          <p>
            {operator}
            {firstNum}
          </p>
        )}
        <p>{inputNum}</p>
      </div>
      <div className={css.buttons}>
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
          <Button onClick={handleGetOperator} color='grey'>
            -
          </Button>
          <Button onClick={handleGetComma} color='grey'>
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
          <div className={css['grid__item--span']}>
            <Button onClick={handleReset} color='blue'>
              RESET
            </Button>
          </div>
          <div className={css['grid__item--span']}>
            <Button onClick={handleCalculate} color='red'>
              =
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Calculator;
