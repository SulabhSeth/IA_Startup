'use client'

import { useEffect, useState } from 'react';

const YourComponent = () => {
  const [documents, setDocuments] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchDocuments = async () => {
      const response = await fetch('/api/fetchData');
      if (!response.ok) {
        console.error('Failed to fetch the data:', response.statusText);
        return;
      }
      const data = await response.json();
      setDocuments(data);
    };

    fetchDocuments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/fetchData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    if (!response.ok) {
      console.error('Failed to insert data:', response.statusText);
      return;
    }

    const result = await response.json();
    console.log(result);

    // Refresh the documents list
    const fetchDocuments = async () => {
      const response = await fetch('/api/fetchData');
      if (!response.ok) {
        console.error('Failed to fetch data:', response.statusText);
        return;
      }
      const data = await response.json();
      setDocuments(data);
    };

    fetchDocuments();
  };

  return (
    <div>
      <h1>Documents</h1>
      <ul>
        {documents.map((doc) => (
          <li key={doc._id}>{doc.name}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Document</button>
      </form>
    </div>
  );
};

export default YourComponent;
