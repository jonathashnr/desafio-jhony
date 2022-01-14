import React from 'react'
import NumberFormat from 'react-number-format';


const ConversorSection = function ({ title, value, tax, coin, showConversion }) {
  let taxPercentage, taxWidthStyle, opacityStyle;
  if (showConversion) {
    taxPercentage = `${Math.round(tax*100)}%`;
    taxWidthStyle = { width: `calc(var(--minTaxBarWidth) + ${taxPercentage})`, minWidth: 'var(--minTaxBarWidth)' }
    opacityStyle = { opacity: '1' }
  } else {
    taxPercentage = '';
    taxWidthStyle = { minWidth: 'var(--minTaxBarWidth)' };
    opacityStyle = { opacity: '0.4' };
    value = '';
  }
  return (
    <div className='conversorSection topBorder'>
      <span className='subTitulo size2'>{title}</span>
      <div id='opacityWrapper' style={opacityStyle}>
        <div className='barTitulo size4'><span>Você recebe</span><span>Taxas</span></div>
        <div className='valueBar size3'>
          <span><strong>{coin} </strong>
            <NumberFormat
              className='numberConverted'
              value={value}
              displayType={'text'}
              thousandSeparator={'.'}
              decimalSeparator={','}
              decimalScale={2}
            />
          </span>
          <div className='taxBar size3' style={taxWidthStyle}>{taxPercentage}</div>
        </div>
      </div>
    </div>
  )
}

export default ConversorSection
