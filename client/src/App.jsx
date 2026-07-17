import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App(){

        const [darkMode, setDarkMode] = useState(true);

        return (
            <div className={darkMode ? "dark-theme" : "light-theme"}>
                <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                />
                <Home />
            </div>
        );
    return(

        <>

            <Navbar/>

            <Home/>

        </>

    )

}

export default App;