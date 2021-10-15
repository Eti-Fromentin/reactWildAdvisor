import './css/App.css';

import Footer from './footer';
import Navbar from './navbar';
import Homepage from './homepage';

function App() {
  return (
    <div className="App">
    {/* <Navbar /> */}
    <Homepage />
    <Footer />
    </div>
  );
}

export default App;


// Template: 

//   Homepage: 
//     <Homepage />
//     <Footer />
//   Pages:
//     <Navbar />
//     <CardContainer />
//     <Footer />