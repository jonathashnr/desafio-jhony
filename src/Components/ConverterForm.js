import React from 'react';
import NumberFormat from 'react-number-format';

const ConverterForm = props => {
  const formHandler = (values) => {
    const { formatted, value } = values;
    props.setInput({ value , formatted });
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
          value={props.input.formatted}
          onValueChange={formHandler}
        />
        <span id='formCoin' style={createCoinColorStyle(props.error)} className='size1'>{props.coin}</span>
      </div>
    </div>
  )
}

export default ConverterForm
