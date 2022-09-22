import React from 'react'
import rupiahwords from 'to-words-rupiah';

const Index = () => {
    const e = rupiahwords(12000);
    // dua belas ribu
    return (
        <div>
            <p>{e}</p>
        </div>
    )
}

export default Index