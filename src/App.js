import "./App.scss";
import Router from "./components/router/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
