import './App.css'
import Main from "./modules/pages/main/Main";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Main />
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
    </div>
  )
}

export default App
