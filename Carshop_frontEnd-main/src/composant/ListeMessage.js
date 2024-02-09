import React, { useState } from 'react';
import '../assets/css/listemessage.css'

function ListeMessage() {
    const messages = [
        { id: 1, timestamp: '2024-02-09T12:30:00', sender: 'John', text: 'Salut ! Comment ça va ?', },
        { id: 2, timestamp: '2024-02-09T12:30:00', sender: 'Jane', text: 'Ça va bien, merci !' },
        { id: 3, timestamp: '2024-02-09T12:30:00', sender: 'John', text: 'Quoi de neuf ?' },
        { id: 4, timestamp: '2024-02-09T12:30:00', sender: 'John', text: 'Quoi de neuf ?' },
        { id: 5, timestamp: '2024-02-09T12:30:00', sender: 'John', text: 'Quoi de neuf ?' },
      ];
    
      return (
        <div className="message-list-container">
      <ul className="message-list">
        {messages.map((message) => (
          <li key={message.id} className={message.sender === 'You' ? 'sent' : 'received'}>
            <span className="timestamp" >{new Date(message.timestamp).toLocaleString()}</span>
            <strong>{message.sender}:</strong> {message.text}
          </li>
        ))}
      </ul>
    </div>
      );
}

export default ListeMessage;
