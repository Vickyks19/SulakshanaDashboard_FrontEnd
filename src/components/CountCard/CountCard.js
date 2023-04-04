import Card from 'react-bootstrap/Card';
import React from 'react';
import './CountCard.css';

export const CountCard = ({ count, title, background, icon }) => {
  return (
    <Card style={{ background }} text='white' className='card-container'>
      <Card.Header className='card-header'>
        {icon} &nbsp;&nbsp;
        {title}
      </Card.Header>
      <Card.Body style={{ padding: 0 }}>
        <Card.Text className='card-text'>{count}</Card.Text>
      </Card.Body>
    </Card>
  );
};
