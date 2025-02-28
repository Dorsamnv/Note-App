
export default function NoteList({ notes,onDelete,onComplete,sortBy }) {

    let sortedNotes = [...notes]
    if (sortBy === "latest") {
      sortedNotes = sortedNotes.sort((a,b) => b.id - a.id)
    } else if (sortBy === "earliest") {
      sortedNotes = sortedNotes.sort((a,b) => a.id - b.id)
    } else if (sortBy === "completed") {
      sortedNotes = sortedNotes.filter((note) => note.completed)
    }
  return (
    <div className="note-list">
       { sortedNotes.map((note)=> (
        <NoteItem key={note.id} note={note} onDelete={onDelete} onComplete={onComplete}/>
       ))
       }
    </div>
  )
} 
function NoteItem ({note,onDelete,onComplete}){

    const options = {
       year:"numeric",
       month:"long",
       day:"numeric" ,
    }

    return <div className={`note-item ${note.completed ? "completed" : ""}`}>
        <div className="note-item__header">
            <div>
                <p className="title">{note.title}</p>
                <p className="desc">{note.description}</p>
            </div>
            <div className="actions">
                <button onClick={() => onDelete(note.id)}>❌</button>
                <input 
                    type="checkbox" 
                    name={note.id}
                    id={note.id}
                    value={note.id}
                    onChange={onComplete}
                    checked={note.completed}
                />
            </div>
        </div>
        <div className="note-item__footer">
            {new Date(note.createdAt).toLocaleDateString("en-US", options)}
        </div>
    </div>
}
