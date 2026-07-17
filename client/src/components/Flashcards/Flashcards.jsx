import "./Flashcards.css";
import Loader from "../Loader/Loader";
import Flashcard from "./Flashcard";

function Flashcards({

flashcards,

loading

}) {

    return (

        <section className="flashcards-section">

            <div className="section-header">

                <h2>
                    📚 Your Flashcards
                </h2>

                <button>
                    Clear All
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