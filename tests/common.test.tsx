import RupiahWords from '../src/index'
describe('RupiahWords function', () => {
  it('converts numbers to words', () => {
    expect(RupiahWords(100)).toBe('seratus')
    expect(RupiahWords(1000)).toBe('seribu')
    expect(RupiahWords(10000)).toBe('sepuluh ribu')
    expect(RupiahWords(100000)).toBe('seratus ribu')
    expect(RupiahWords(123456789)).toBe(
      'seratus dua puluh tiga juta empat ratus lima puluh enam ribu tujuh ratus delapan puluh sembilan',
    )
  })
})
