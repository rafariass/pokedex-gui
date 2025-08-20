const formatNumber = (numero, locale = 'es-CL', options = {}) => {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
    ...options
  }).format(numero)
}

export default formatNumber
