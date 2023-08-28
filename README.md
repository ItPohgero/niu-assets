# To Words Rupiah
Membaca angka rupiah. Anda cukup install package to-words-rupiah dan gunakan function 

### Cara Install

dengan NPM
`npm i to-words-rupiah --save`

dengan YARN
`yarn add to-words-rupiah --save`

### Penggunaan
```javascript-4-index.tsx
import RupiahWords from 'to-words-rupiah';

const Index = () => {
    let data =  RupiahWords(12000);
    return (
        <div>{data}</div>
        // dua belas ribu
    )
}
```

created by wahyu agus arifin - owner itpohgero.com