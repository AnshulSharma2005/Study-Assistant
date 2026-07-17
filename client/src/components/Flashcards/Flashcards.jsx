import "./Flashcards.css";
import Loader from "../Loader/Loader";
import Flashcard from "./Flashcard";
import jsPDF from "jspdf";
import toast from "react-hot-toast";


function Flashcards({

    flashcards,

    loading,

    setFlashcards,

    setNotes,

    handleGenerate

}) {

    const copyCards = () => {

    const text = flashcards
        .map(card => `Q: ${card.question}\nA: ${card.answer}`)
        .join("\n\n");

    navigator.clipboard.writeText(text);
    toast.success("Flashcards copied!");
};

const downloadPDF = () => {

    const doc = new jsPDF();

    let y = 20;

    flashcards.forEach((card, index) => {

        doc.text(`${index + 1}. ${card.question}`, 10, y);

        y += 8;

        const lines = doc.splitTextToSize(card.answer, 180);

        doc.text(lines, 10, y);

        y += lines.length * 8 + 8;

        if (y > 260) {

            doc.addPage();

            y = 20;

        }

    });

    doc.save("Flashcards.pdf");
    toast.success("Flashcards downloaded as PDF!");
};
    return (

        <section className="flashcards-section">

            <div className="section-header">

    <h2>

        📚 Your Flashcards

    </h2>

    <div className="action-buttons">

        <button

            onClick={() => {

                setFlashcards([]);

                setNotes("");
                toast.success("Workspace cleared!");

            }}

            disabled={flashcards.length === 0}

        >

            Clear All

        </button>

        <button

            onClick={copyCards}

            disabled={flashcards.length === 0}

        >

            Copy All

        </button>

        <button

            onClick={downloadPDF}

            disabled={flashcards.length === 0}

        >

            Download PDF

        </button>

        <button

            onClick={handleGenerate}

            disabled={flashcards.length === 0}

        >

            Regenerate

        </button>

    </div>

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