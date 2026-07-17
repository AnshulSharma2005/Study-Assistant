import "./Flashcard.css";
import { useState } from "react";
import { FaRotate } from "react-icons/fa6";

function Flashcard({ index, card }) {

    const [flipped, setFlipped] = useState(false);

    return (

        <div
            className={`flashcard ${flipped ? "flipped" : ""}`}
            onClick={() => setFlipped(!flipped)}
        >

            <div className="flashcard-inner">

                {/* FRONT */}

                <div className="flashcard-front">

                    <div className="flash-top">

                        <span className="card-number">

                            {index}

                        </span>

                    </div>

                    <p className="label">

                        Question

                    </p>

                    <h3>

                        {card.question}

                    </h3>

                    <div className="flip-text">

                        <FaRotate />

                        Click anywhere to reveal answer

                    </div>

                </div>

                {/* BACK */}

                <div className="flashcard-back">

                    <div className="flash-top">

                        <span className="card-number">

                            {index}

                        </span>

                    </div>

                    <p className="label">

                        Answer

                    </p>

                    <h3>

                        {card.answer}

                    </h3>

                    <div className="flip-text">

                        <FaRotate />

                        Click to go back

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Flashcard;