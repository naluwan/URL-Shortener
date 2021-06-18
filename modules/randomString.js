function checkExisted(...data) {
  let shortStr = randomString()
  const allShortStr = data.map(item => item = item.shortUrl)
  while (allShortStr.find(item => item === shortStr)) {
    shortStr = randomString()
  }
  return shortStr
}

function randomString() {
  const number = '0123456789'
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const allString = (number + lowercase + uppercase).split("")
  let results = ""

  for (let i = 0; i < 5; i++) {
    let str = allString[Math.floor(Math.random() * allString.length)]
    results += str
  }

  return results
}

module.exports = checkExisted
