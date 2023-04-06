import './styles/Styles.css';
import Header from './advhooks/Header';
import Home from './advhooks/Home';
import ErrorBoundary from './advhooks/ErrorBoundary';

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
