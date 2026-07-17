import "./Flashcards.css";
import Loader from "../Loader/Loader";
import Flashcard from "./Flashcard";
import jsPDF from "jspdf";

function Flashcards({

flashcards,

setFlashcards,

setNotes

}) {
    const copyCards=()=>{

const text=flashcards.map(

card=>

`Q: ${card.question}

A: ${card.answer}

`

).join("\n");

navigator.clipboard.writeText(text);

}
const downloadPDF=()=>{

const doc=new jsPDF();

flashcards.forEach((card,index)=>{

doc.text(

`${index+1}. ${card.question}`,

10,

20+index*30

);

doc.text(

card.answer,

10,

28+index*30

);

});

doc.save("flashcards.pdf");

}

    return (

        <section className="flashcards-section">

            <div className="section-header">

                <h2>
                    📚 Your Flashcards
                </h2>

                <button

onClick={()=>{

setFlashcards([]);

setNotes("");

}}

>

Clear All

</button>
<button onClick={copyCards}>

Copy All

</button>
<button>

Download PDF

</button>
            </div>

            <div className="cards-grid">

                {
                    loading ? (

                        <Loader/>

                    )

                    :

                    flashcards.length===0 ?

                        (

                            <div className="empty-state">

                                <h2>📚</h2>

                                <h3>No Flashcards Yet</h3>

                                <p>
                                    Paste your notes and click Generate Flashcards.
                                </p>

                            </div>

                        )

                        :

                        flashcards.map((card, index) => (

                            <Flashcard

                                key={index}

                                index={index + 1}

                                card={card}

                            />

                        ))
                }

            </div>

        </section>

    )

}

export default Flashcards;