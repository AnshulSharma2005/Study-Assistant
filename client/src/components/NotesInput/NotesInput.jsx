import "./NotesInput.css";
import { useState } from "react";
import { FaMagic } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";


function NotesInput({

notes,
setNotes,

flashcardCount,
setFlashcardCount,

difficulty,
setDifficulty,

loading,
setLoading,

handleGenerate

}) {
    const [fileName, setFileName] = useState("");
    const loadExample=()=>{

        setNotes(

        `React is a JavaScript library used to build user interfaces.

        JSX lets developers write HTML inside JavaScript.

        The Virtual DOM improves performance by updating only changed elements.`

        )

    } 
        const handleFileUpload = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setFileName(file.name);

        const reader = new FileReader();

        reader.onload = (event) => {

            setNotes(event.target.result);

        };

        reader.readAsText(file);

    }

    return (
        

        <div className="notes-card">

            <div className="notes-header">

                <div>

                    <h2>

                        <FaFileAlt className="header-icon"/>

                        Enter Your Notes

                    </h2>

                    <p>
                        Paste your notes or any topic below.
                    </p>

                </div>

                <button className="example-btn" onClick={loadExample}>

                    <FaMagic/> Example

                </button>

            </div>

            <div className="upload-section">

                <label htmlFor="fileUpload" className="upload-btn">

                    📄 Upload TXT File

                </label>

                <input

                    id="fileUpload"

                    type="file"

                    accept=".txt,.md,.pdf"

                    hidden

                    onChange={handleFileUpload}

                />

                <span className="upload-text">

                    {

                        fileName

                        ?

                        `✅ ${fileName}`

                        :

                        "No file selected"

                    }

                </span>

            </div>
           <textarea

                value={notes}

                onChange={(e)=>setNotes(e.target.value)}

                placeholder="Paste your notes here..."

                maxLength={5000}

            />
            <div className="character-counter">

                {notes.length}/5000

            </div>

            <div className="notes-footer">

                <div className="dropdowns">

                    <div>

                        <label>

                            Number of Flashcards

                        </label>

                        <select

                            value={flashcardCount}

                            onChange={(e)=>setFlashcardCount(Number(e.target.value))}

                        >

                            <option>5</option>

                            <option>8</option>

                            <option>10</option>

                            <option>15</option>

                        </select>

                    </div>

                    <div>

                        <label>

                            Difficulty

                        </label>

                        <select

                            value={difficulty}

                            onChange={(e)=>setDifficulty(e.target.value)}

                        >

                            <option>Easy</option>

                            <option>Medium</option>

                            <option>Hard</option>

                        </select>

                    </div>

                </div>

                <button

                    disabled={!notes.trim() || loading}

                    className={`generate-btn ${!notes.trim()?"disabled":""}`}
                    onClick={handleGenerate}

                >

                    <FaMagic/>

                    {

                       loading

                        ?

                        "✨ AI is creating flashcards..."

                        :

                        "Generate Flashcards"

                    }

                </button>

            </div>

            <p className="powered">

                ✨ AI Flashcards in Seconds

            </p>

        </div>

    )

}
export default NotesInput;