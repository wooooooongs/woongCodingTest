const a = 5
const b = 24

const date = new Date(`2016-${a}-${b}`)

console.log(date.toDateString().substring(0,3).toUpperCase());