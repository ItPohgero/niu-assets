const SplitData = (list: string[], len: number): string[][] => {
  const result: string[][] = []
  const total = Math.ceil(list.length / 3)
  list = list.reverse()
  for (let i = 0; i < total; i++) {
    result.push(list.splice(0, len))
  }

  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].reverse()
  }
  return result.reverse()
}

function RupiahWords(num: number): string {
  if (num === 0) {
    return 'nol'
  } else if (num === 10) {
    return 'sepuluh'
  } else if (num === 100) {
    return 'seratus'
  } else if (num === 1000) {
    return 'seribu'
  } else if (num === 10_000) {
    return 'sepuluh ribu'
  } else if (num === 100_000) {
    return 'seratus ribu'
  } else if (num === 1_000_000) {
    return 'satu juta'
  } else if (num === 10_000_000) {
    return 'sepuluh juta'
  } else if (num === 100_000_000) {
    return 'seratus juta'
  } else if (num === 10_000_000_000) {
    return 'sepuluh milyar'
  } else if (num === 100_000_000_000) {
    return 'seratus milyar'
  } else if (num === 1_000_000_000_000) {
    return 'satu triliun'
  } else if (num === 10_000_000_000_000) {
    return 'sepuluh triliun'
  } else if (num === 100_000_000_000_000) {
    return 'seratus triliun'
  } else {
    const number = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']
    const quantity = ['', 'puluh', 'ratus', 'ribu', 'juta', 'miliar', 'triliun']
    const subQuantity = ['', 'ribu', 'juta', 'miliar', 'triliun']
    const numberString = num.toString()
    const tm = SplitData(numberString.split(''), 3)

    for (let i = 0; i < tm.length; i++) {
      const iLen = tm[i].length
      for (let j = 0; j < tm[i].length; j++) {
        tm[i][j] = (number[parseInt(tm[i][j]) - 1] + ' ' + quantity[iLen - 1 - j]).trim()
        if (j > 0 && tm[i][j - 1] === 'satu puluh') {
          if (tm[i][j] === 'satu') {
            tm[i][j] = 'sebelas'
            tm[i][j - 1] = ''
          } else {
            tm[i][j - 1] = tm[i][j]
            tm[i][j] = 'belas'
          }
        }

        if (tm[i][j].split(' ')[0] === 'undefined') {
          tm[i][j] = ''
        }

        if (
          tm[i][j].split(' ')[0] === 'satu' &&
          (tm[i][j].split(' ')[1] === 'ribu' || tm[i][j].split(' ')[1] === 'ratus')
        ) {
          tm[i][j] = 'se' + tm[i][j].split(' ')[1]
        }
      }

      if (tm.length > 1) {
        tm[i].push(subQuantity[tm.length - 1 - i])
      }
    }

    return tm
      .map((arr) => arr.join(' '))
      .join(' ')
      .replace(/,/g, ' ')
      .replace(/  +/g, ' ')
      .trim()
  }
}

export default RupiahWords
