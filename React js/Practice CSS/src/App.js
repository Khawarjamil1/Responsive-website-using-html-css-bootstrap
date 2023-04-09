import logo from './logo.svg';
import './App.css';
import images from '../src/images/image-qr-code.png'

function App() {
  return (
    <div className="container">
      <div className="qr">
        <div className="elements">
          <div className="img">
            <img src={images} alt="qr" />
          </div>
          <h1>Improve your front-end skills by building projects</h1>
          <p>Scan the Qr Code to visit frontend mentor and take your coding skills to next level</p>
        </div>
      </div>
    </div>
  );
}

export default App;
