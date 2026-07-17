import "./TipsCard.css";

import {

FaStar,
FaPen,
FaShieldAlt,
FaBook

} from "react-icons/fa";

function TipsCard(){

    return(

        <div className="tips-card">

            <h2>

                ⭐ Tips for Best Results

            </h2>

            <div className="tip">

                <FaPen/>

                <div>

                    <h4>Be Specific</h4>

                    <p>Detailed notes generate better flashcards.</p>

                </div>

            </div>

            <div className="tip">

                <FaBook/>

                <div>

                    <h4>Include Concepts</h4>

                    <p>Add formulas, definitions and examples.</p>

                </div>

            </div>

            <div className="tip">

                <FaShieldAlt/>

                <div>

                    <h4>Review Output</h4>

                    <p>You can regenerate anytime.</p>

                </div>

            </div>

        </div>

    )

}

export default TipsCard;