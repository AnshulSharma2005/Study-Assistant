import { useState } from "react";

import Hero from "../components/Hero/Hero";
import NotesInput from "../components/NotesInput/NotesInput";
import TipsCard from "../components/TipsCard/TipsCard";
import Flashcards from "../components/Flashcards/Flashcards";
import API from "../services/api";

import "./Home.css";

function Home() {

    const [notes, setNotes] = useState("");
    const [loading, setLoading] = useState(false);

    const [flashcardCount, setFlashcardCount] = useState(5);

    const [difficulty, setDifficulty] = useState("Easy");

    const [flashcards,setFlashcards]=useState([

{
question:"What is React?",
answer:"React is a JavaScript library used for building user interfaces."
},

{
question:"What is JSX?",
answer:"JSX allows HTML-like syntax inside JavaScript."
},

{
question:"What is Virtual DOM?",
answer:"It updates only changed elements for better performance."
},

{
question:"What are Components?",
answer:"Reusable pieces of UI in React."
}

]);
const handleGenerate = async () => {

    if (!notes.trim()) return;

    try {

        setLoading(true);

        const response = await API.post("/generate", {

            notes,

            flashcardCount,

            difficulty

        });

        setFlashcards(response.data);

    }

    catch (err) {

        console.log(err);

        alert("Generation Failed");

    }

    finally {

        setLoading(false);

    }

}
    return (

        <>

            <Hero />

            <div className="home-layout">

                <NotesInput

                    notes={notes}
                    setNotes={setNotes}

                    flashcardCount={flashcardCount}
                    setFlashcardCount={setFlashcardCount}

                    difficulty={difficulty}
                    setDifficulty={setDifficulty}

                    loading={loading}
                    setLoading={setLoading}

                    handleGenerate={handleGenerate} 

                />

                <TipsCard />

            </div>

           <Flashcards

    flashcards={flashcards}

    setFlashcards={setFlashcards}

    setNotes={setNotes}

/>

        </>

    );

}

export default Home;