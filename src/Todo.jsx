function Todo({ text, onDelete }) {
  return (
    <li>
      {text} <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Todo;
