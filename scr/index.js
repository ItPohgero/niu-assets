import React from 'react'
import rupiahWords from 'to-words-rupiah';

const Index = () => {
    const e = rupiahWords(12000);
    // dua belas ribu
    
    return (
        <div>
            <p>{e}</p>
        </div>
    )
}

export default Index