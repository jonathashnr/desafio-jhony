import React, { useEffect, useRef, useState } from 'react';
import ConversorForm from './ConversorForm';
import ConversorSection from './ConversorSection';
import simulation from '../Functions/Services'

const DEFAULT_RATES = {
  bank: {
    tax: 0,
    amount: 0,
  },
  remessa: {
    tax: 0,
    amount: 0,
  }
}

const Conversor = props => {
  const [formInput, setFormInput] = useState({ value:'', formatted:''});
  const [convertedRates, setConvertedRates] = useState(DEFAULT_RATES);
  const caughtSomeError = useRef(false);

  useEffect(() => {
    simulation(formInput.value, props.coinFrom, props.coinTo)
      .then(res => afterSimulationResolve(res))
      .catch(err => afterSimulationError())
  }, [formInput.value])

  const afterSimulationResolve = (res) => {
    caughtSomeError.current = false;
    setConvertedRates(res)
  }
  const afterSimulationError = () => {
    caughtSomeError.current = true;
    setConvertedRates(DEFAULT_RATES)
  }
  return (
    <div id='conversorContainer'>
      <ConversorForm
        input={formInput}
        setInput={setFormInput}
        coin={props.coinFrom}
        error={caughtSomeError.current}
      />
      <ConversorSection
        title='Bancos Tradicionais'
        coin={props.coinTo}
        value={convertedRates.bank.amount}
        tax={convertedRates.bank.tax}
        showConversion={!!formInput.value && !caughtSomeError.current}
      />
      <ConversorSection
        title='Remessa Online'
        coin={props.coinTo}
        value={convertedRates.remessa.amount}
        tax={convertedRates.remessa.tax}
        showConversion={!!formInput.value && !caughtSomeError.current}
      />
    </div>
  );
}


export default Conversor;
