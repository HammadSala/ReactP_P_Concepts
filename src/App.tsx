import './styles/Styles.css';
import Header from './components/Header';
import Home from './components/Home';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <>
        <div id="sig-in"></div>
        <div id="page"></div>

        <Header />

        <ErrorBoundary>
          <Home />
        </ErrorBoundary>

        </>
  );
}

export default App;
