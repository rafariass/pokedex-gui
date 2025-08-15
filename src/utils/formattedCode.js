const formattedCode = (input = 0) => {
  const num = Number(input)
  return isNaN(num) ? '#0000' : `#${String(num).padStart(4, '0')}`
}

export default formattedCode
