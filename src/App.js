import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import ErrorBoundary from "./Components/error_boundary/error_boundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Navigation />
      </ErrorBoundary>
      <Main />
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
