// src/Card.js
import React from 'react';

function Card({ title, amount, features }) {
  return (
    <div className="card shadow-sm" style={{ width: '18rem', margin: '20px', borderRadius: '10px', backgroundColor: 'white', color: '#007bff' }}>
      <div className="card-body">
        <h5 className="card-title font-weight-bold text-center">{title}</h5>
        <h6 className="card-subtitle mb-2 text-center">{amount}</h6>
        <hr className="bg-light" />
        <ul className="list-group list-group-flush">
          {features.map((feature, index) => (
            <li key={index} className="list-group-item d-flex align-items-center" style={{ backgroundColor: 'white', color: '#007bff' }}>
              <i className={`bi ${feature.enabled ? 'bi-check-circle-fill text-success' : 'bi-x-circle-fill text-danger'}`}></i>
              <span className="ms-3">{feature.text}</span>
            </li>
          ))}
        </ul>
        <a href="#" className="btn btn-primary mt-3 w-100">Choose Plan</a>
      </div>
    </div>
  );
}

export default Card;
