import "./Hero.css";

function Hero() {

    return (

        <section className="hero">

            <div className="hero-content">

                <h1>

                    Hello,
                    <span> Anshul! 👋</span>

                </h1>

                <p>

                    Paste your notes and let AI transform them into
                    interactive flashcards that make learning faster,
                    smarter and more engaging.

                </p>

            </div>

            <div className="hero-image">

                <div className="floating-circle"></div>

                <div className="book">

                    📚

                </div>

            </div>

        </section>

    )

}

export default Hero;