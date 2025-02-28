import Toasts from "./Toasts"

export default function NoteStatus({notes}) {
  

  const allNotes = notes.length
  const completedNotes = notes.filter((n) => n.completed).length
  const unCompletedNotes = allNotes - completedNotes

  if(!allNotes) return(
    <Toasts>
      <h2>🔍 No Notes has already been added.</h2>  
     </Toasts>
  )

  return (
    <ul className="note-status">
        <li>
            All <span>{allNotes}</span>
        </li>
        <li>
            Completed <span>{completedNotes}</span>
        </li>
        <li>
            Open <span>{unCompletedNotes}</span>
        </li>
    </ul>
  )
}
