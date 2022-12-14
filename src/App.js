import Dictaphone from './Components/Dictaphone';
import CaptionsRaw from './Components/CaptionsRaw';
import './App.css';

const captions = `
WEBVTT

00:00.000 --> 00:02.000
This is the first two seconds

00:02.000 --> 00:04.000
This is the second two seconds
This is multiple lines
Another

00:05.000 --> 00:06.000
This is the third caption
`.trim();

function App() {
  return (
    <div className="App">
      <Dictaphone />
      {/* <CaptionsRaw raw={captions} /> */}
    </div>
  );
}

export default App;
