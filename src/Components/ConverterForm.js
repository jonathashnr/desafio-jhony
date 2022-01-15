import React from 'react'
import NumberFormat from 'react-number-format'

const ConverterForm = ({ title, value, setValueFunction, coin, error }) => {
  
  const formHandler = (values) => {
    const { value, formatted } = values;
    setValueFunction({ value , formatted });
  }

  const createCoinColorStyle = (error) => {
    const coinColor = error ? '--taxBarColor' : '--barColor';
    return { color: `var(${coinColor})` }
  }

  return (
    <div className='converterSection'>
      <span className='subTitle size2'>{title}</span>
      <div id='formWrapper'>
        <NumberFormat
          className='converterForm size1'
          thousandSeparator={'.'}
          decimalSeparator={','}
          decimalScale={2}
          allowNegative={false}
          value={value.formatted}
          onValueChange={formHandler}
          maxlength="20"
        />
        <span id='formCoin' className='size1 bold' style={createCoinColorStyle(error)}>{coin}</span>
      </div>
    </div>
  )
}

export default ConverterForm
