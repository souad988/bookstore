import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Categories from './Categories';
import Header from './Header';
import Books from './Books';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Books />} />
            <Route path="/Categories" element={<Categories />} />

          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
