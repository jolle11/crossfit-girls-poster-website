import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Poster } from './pages';

function App() {
    return (
        <>
            <Router>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Poster />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
