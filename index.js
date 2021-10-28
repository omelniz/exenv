function convertEnvToExample(str) {
  if (!str || typeof str !== 'string') {
    throw new Error('Please provide string')
  }

  return str
    .split('')
    .map((i) => (i === '-' || i === '@' || i === ':' || i === '.' ? i : 'x'))
    .join('')
}

console.log(convertEnvToExample(process.argv.slice(2)[0]))
