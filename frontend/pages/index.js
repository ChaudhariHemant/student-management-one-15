import { useState } from 'react';

export default function Home() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [input, setInput] = useState('');

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input.trim()]);
      setInput('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1>List Manager</h1>
      <ul>
        {items.map((item, idx) => (
          <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            {item}
            <button onClick={() => removeItem(idx)} style={{ marginLeft: '1rem' }}>Delete</button>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '1rem' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New item"
          style={{ padding: '0.5rem', width: '70%' }}
        />
        <button onClick={addItem} style={{ padding: '0.5rem', marginLeft: '0.5rem' }}>Add</button>
      </div>
    </div>
  );
}
