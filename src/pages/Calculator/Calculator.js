import { useState } from 'react';

import Button from '../../components/UI/Button';

import css from './Calculator.module.css';

function Calculator() {
  const [equation, setEquation] = useState('0');
  const [canAddComma, setCanAddComma] = useState(true);
  const [canAddOperator, setCanAddOperator] = useState(true);

  const handleGetInput = (event) => {
    const keyPressed = event.target.innerHTML;

    if (equation === '0' && keyPressed === '0') return;

    if (equation === '0') setEquation('');
    setEquation((state) => state + keyPressed);
    setCanAddOperator(true);
  };

  const handleGetComma = () => {
    if (!canAddComma) return;
    if (equation.slice(-1) === ('+' || '-' || 'x' || '/')) return;

    setEquation((state) => state + '.');
    setCanAddComma(false);
  };

  const handleGetOperator = (event) => {
    const operator = event.target.innerHTML;

    if (!canAddOperator) return;
    if (equation.slice(-1) !== '.') return;

    setEquation((state) => state + `${operator}`);
    setCanAddComma(true);
    setCanAddOperator(false);
  };

  const handleErase = () => {
    if (equation === '0') return;
    if (equation.length === 1) return setEquation('0');
    setEquation((state) => state.slice(0, -1));
  };

  const handleCalculate = () => {
    console.log('=');
  };

  const handleReset = () => {
    setEquation('0');
  };

  return (
    <main className={css.main}>
      <div className={css.equation}>
        <p>{equation}</p>
      </div>
      <div className={css.buttons}>
        <div className={css.grid}>
          <Button onClick={handleGetInput} color='grey'>
            7
          </Button>
          <Button onClick={handleGetInput} color='grey'>
            8
          </Button>
          <Button onClick={handleGetInput} color='grey'>
            9
          </Button>
          <Button onClick={handleErase} color='blue'>
            DEL
          </Button>
          <Button onClick={handleGetInput} color='grey'>
            4
          </Button>
          <Button onClick={handleGetInput} color='grey'>
            5
          </Button>
          <Button onClick={handleGetInput} color='grey'>
            6
          </Button>
          <Button onClick={handleGetOperator} color='grey'>
            +
          </Button>
          <Button onClick={handleGetInput} color='grey'>
            1
          </Button>
          <Button onClick={handleGetInput} color='grey'>
            2
          </Button>
          <Button onClick={handleGetInput} color='grey'>
            3
          </Button>
          <Button onClick={handleGetOperator} color='grey'>
            -
          </Button>
          <Button onClick={handleGetComma} color='grey'>
            .
          </Button>
          <Button onClick={handleGetInput} color='grey'>
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
