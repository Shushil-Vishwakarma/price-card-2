// src/App.js
import React from 'react';
import Card from './Card';
import { cards } from './data';

function App() {
  return (
    <div style={{ backgroundColor: '#007bff', padding: '50px 0' }}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          {cards.map((card) => (
            <div key={card.id} className="col-md-4 d-flex justify-content-center">
              <Card
                title={card.title}
                amount={card.amount}
                features={card.features}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
