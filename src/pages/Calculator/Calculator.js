import { useState } from 'react';
import { evaluate } from 'mathjs';

import Button from '../../components/Button';

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
    if (
      equation.slice(-1) === '+' ||
      equation.slice(-1) === '-' ||
      equation.slice(-1) === 'x' ||
      equation.slice(-1) === '/'
    ) {
      setEquation((state) => state + '0.');
      setCanAddComma(false);
      setCanAddOperator(true);
      return;
    }

    setEquation((state) => state + '.');
    setCanAddComma(false);
  };

  const handleGetOperator = (event) => {
    const operator = event.target.innerHTML;

    if (!canAddOperator) return;
    if (equation.slice(-1) === '.') setEquation((state) => state.slice(0, -1));

    setEquation((state) => state + operator);
    setCanAddComma(true);
    setCanAddOperator(false);
  };

  const handleErase = () => {
    if (equation === '0') return;
    if (equation.length === 1) return setEquation('0');

    // setState på comma og operator basert på hvilken character som har blitt slicet

    setEquation((state) => state.slice(0, -1));
  };

  const handleCalculate = () => {
    const equationCorrected = equation.replace('x', '*');
    let sum = evaluate(equationCorrected);

    if (!Number.isInteger(sum)) sum = sum.toFixed(2);

    setEquation(String(sum));
    setCanAddComma(true);
    setCanAddOperator(true);
  };

  const handleReset = () => {
    setEquation('0');
    setCanAddComma(true);
    setCanAddOperator(true);
  };

  return (
    <main className={css.main}>
      <div className={css.equation}>
        <p>{equation}</p>
      </div>
      <div className={css.keyboard}>
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
          <Button onClick={handleErase} color='blue' text='fontsize--small'>
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
            <Button onClick={handleReset} color='blue' text='fontsize--small'>
              RESET
            </Button>
          </div>
          <div className={css['grid__item--span']}>
            <Button onClick={handleCalculate} color='red' text='fontsize--small'>
              =
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Calculator;
