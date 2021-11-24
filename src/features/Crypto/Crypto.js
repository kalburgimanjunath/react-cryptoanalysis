import React, { useEffect, useState } from 'react';
export default function Crypto() {
  const [crypto, setCrypto] = useState([]);
  useEffect(async () => {
    await fetch('https://api.livecoinwatch.com/coins/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '9fc8e3ea-9089-418f-85dd-aba22ace0bb4',
      },
    })
      .then((response) => response.json())

      .then((data) => {
        setCrypto(data.results);
      });
  });

  return (
    <div>
      Crypto
      {crypto &&
        crypto.map((item) => {
          console.log(item.name);
          return <div key={item.name}>{item.name}</div>;
        })}
    </div>
  );
}
