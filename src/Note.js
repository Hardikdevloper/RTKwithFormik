import { useDispatch } from "react-redux";
import { DeleteNote } from "./Redux/CounterSlice";

const Note=({
  title,
  text,
  note,
  handleSelectTodo,
  handleEdit,
  setIsEditMode
}) => {
  const dispatch = useDispatch();

  const EditHandle = (NoteId) => {
    setIsEditMode(true);
    handleEdit();  
    handleSelectTodo(NoteId);
  };
  return (
    <div className="notes">
      <div>
        <h2>All Notes</h2>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="form__buttons">
        <button onClick={() => dispatch(DeleteNote(note.id))}>Delete</button>
        <button onClick={() => EditHandle(note.id)}>Edit Note</button>
      </div>
    </div>
  );
};
export default Note;
