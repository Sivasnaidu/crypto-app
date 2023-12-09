import React, { useState, useEffect } from 'react';
import './homepage.css';

const HomePage = () => {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
         

        const data = await res.json();
        setCrypto(data);
      } catch (error) {
        console.error('Error fetching crypto:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Coin Name</th>
            <th>Current Price USD </th>
            <th>24h%</th>
            <th>7d%</th>
          </tr>
        </thead>
        <tbody>
          {crypto.map((cryptos) => (
            <tr key={cryptos.id}>
              <td>{cryptos.name}</td>
              <td>{cryptos.current_price}</td>
              <td style={{ color: cryptos.price_change_percentage_24h > 0 ? 'green' : 'red' }}>
                {cryptos.price_change_percentage_24h}
              </td>
              <td style={{ color: cryptos.price_change_percentage_7d > 0 ? 'green' : 'red' }}>
                {cryptos.price_change_percentage_7d}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;



/**61k+cbxMol15LvvKEUQKPiKEEm7ZLn2JGoSkjLOTZ6k= 
 * 
 * 
*/