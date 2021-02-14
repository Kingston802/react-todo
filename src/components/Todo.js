import Item from './Item';
import { useState, useEffect } from 'react';

function Todo() {
  const [content, setContent] = useState([]);

  return (
    <>
      <ul>
        { content }
      </ul>
      <input></input>
      <button onClick={() => setContent([...content, <Item value={document.querySelector('input').value} />])}>Add</button>
    </>
  )
}

export default Todo 