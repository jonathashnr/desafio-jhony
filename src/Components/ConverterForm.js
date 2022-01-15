import React from 'react'
import NumberFormat from 'react-number-format'

const ConverterForm = ({ value, setValueFunction, coin, error}) => {
  const formHandler = (values) => {
    const { value, formatted } = values;
    setValueFunction({ value , formatted });
  }
  const createCoinColorStyle = (error) => {
    if (error) {
      return { color: 'var(--corOff)' }
    } else {
      return { color: 'var(--corBarra)' }
    }
  }
  return (
    <div className='converterSection'>
      <span className='subTitulo size2'>Você envia</span>
      <div id='formWrapper'>
        <NumberFormat
          className='conversorForm size1'
          thousandSeparator={'.'}
          decimalSeparator={','}
          decimalScale={2}
          allowNegative={false}
          value={value.formatted}
          onValueChange={formHandler}
        />
        <span id='formCoin' style={createCoinColorStyle(error)} className='size1'>{coin}</span>
      </div>
    </div>
  )
}

export default ConverterForm
