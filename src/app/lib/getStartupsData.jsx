// src/app/collection/CollectionClientComponent.js
'use client';

export default function CollectionClientComponent({ data }) {
  return (
    <div>
      <h1>Collection Data</h1>
      <ul>
        {data.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
