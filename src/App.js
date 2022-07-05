import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import photo from './images/téléchargement.png';
import logo from './images/gomycode.png';
function App() {
  return (
    <div className="App">
      <div className='gomycode' >
        <img src={logo} alt="logo"></img>
      </div>
      <div className='forms'>
        <div className="mb-3">
          <label for="formFile" className="form-label">Upload your React final project</label>
          <input className="form-control" type="file" id="formFile"></input>
        </div>
        <div className="mb-3">
          <label for="formFileMultiple" className="form-label">Upload your components files</label>
          <input className="form-control" type="file" id="formFileMultiple" multiple></input>
        </div>
        <div className="mb-3">
          <label for="formFileSm" className="form-label">Upload your first React app </label>
          <input className="form-control form-control-sm" id="formFileSm" type="file"></input>
        </div>
      </div>
      <div className='image'>
        <img src={photo} alt='githublogo'></img>
      </div>
    </div>
  );
};

export default App;
