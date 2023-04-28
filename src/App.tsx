import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { useSelector } from "react-redux";
import { selectDisplay } from "./redux/slices/displayCountrySlice";

function App() {
    const potentials = useSelector(selectPotentials)
    const currentDisplay = useSelector(selectDisplay)

    return (
        <div className="App font-link">
            <Header />
            {currentDisplay ? <MainDisplay/> : <OptionDisplay />}
        </div>
    );
}

export default App;
