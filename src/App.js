//import logo from './logo.svg';
import './App.css';
import { useRef, useState } from "react";

let animationController;

function App() {
  const [file, setFile] = useState(null);
  const canvasRef = useRef();
  const audioRef = useRef();
  const source = useRef();
  const analyzer = useRef();

  const handleAudioPlay = () => {};
  const visualizeData = () => {};

  return (
    <div className="App">
      <input
        type="file"
        onChange={({ target: { files } }) => files[0] && setFile(files[0])}
      />
      {/* <header className="App-header">
       <p>Select A Song:</p>
      </header> */}
      {file && (
        <audio
          ref={audioRef}
          onPlay={handleAudioPlay}
          src={window.URL.createObjectURL(file)}
          controls
        />
      )}
      <canvas ref={canvasRef} width={500} height={200} />
    </div>
  );
}
export default App;
