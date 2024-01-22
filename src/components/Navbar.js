import { useContext } from "react";
import {NotesContext} from "../contexts/notesContext";

const Navbar = () => {
    const {notes} = useContext(NotesContext);
    
    return (
        <div className="navbar">
            <div className="top">
                <i className="fa-regular fa-note-sticky fa-2x"></i>
                <h1>NoteApp</h1>
            </div>
            <p>Toplam { notes.length } adet not mevcut</p>
        </div>
    )
}

export default Navbar;