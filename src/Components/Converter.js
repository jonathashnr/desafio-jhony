import React, { useEffect, useRef, useState } from 'react';
import ConverterForm from './ConverterForm';
import ConverterSection from './ConverterSection';
import simulation from '../Functions/Services'

const INITIAL_RATES = {
  bank: {
    tax: 0,
    amount: 0,
  },
  remessa: {
    tax: 0,
    amount: 0,
  }
}

const Converter = ({ coinFrom = 'BRL', coinTo = 'USD' }) => {
  
  const [formInput, setFormInput] = useState({ value:'', formatted:''});
  const [convertedRates, setConvertedRates] = useState(INITIAL_RATES);
  const caughtSomeError = useRef(false);

  useEffect(() => {
    simulation(formInput.value, coinFrom, coinTo)
      .then(res => wasSimulationResolved(true, res))
      .catch(err => wasSimulationResolved(false))
  }, [formInput.value])

  const wasSimulationResolved = (isResolved, res = INITIAL_RATES) => {
    caughtSomeError.current = !isResolved;
    setConvertedRates(res)
  }

  return (
    <div id='conveterContainer'>
      <ConverterForm
        value={formInput}
        setValueFunction={setFormInput}
        coin={coinFrom}
        error={caughtSomeError.current}
      />
      <ConverterSection
        title='Bancos Tradicionais'
        coin={coinTo}
        value={convertedRates.bank.amount}
        tax={convertedRates.bank.tax}
        showConversion={!!formInput.value && !caughtSomeError.current}
      />
      <ConverterSection
        title='Remessa Online'
        coin={coinTo}
        value={convertedRates.remessa.amount}
        tax={convertedRates.remessa.tax}
        showConversion={!!formInput.value && !caughtSomeError.current}
      />
    </div>
  );
}


export default Converter;
