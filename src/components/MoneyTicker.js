import React from 'react'
import Ticker from 'react-ticker'
 
const MoneyTicker = () => (
    <Ticker>
        {({ index }) => (
            <>
                <a>This is the Headline of element #{index}!</a>
                {/* Aca voy a poner o headlines en texto linkeado a noticias o cotizaciones de monedas cripto o incluso noticias con fotos linkeadas  */ }
            </>
        )}
    </Ticker>
)
 
export default MoneyTicker