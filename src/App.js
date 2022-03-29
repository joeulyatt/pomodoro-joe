import './App.css';
import Pomodoro from './Components/Pomodoro';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="app">
      {/* invisible div is for right-alinging ReactPlayer with flex */}
      <div className="invisible"/>
      <Pomodoro />
      <ReactPlayer className="react-player"
                config={{
                    soundcloud: {
                    options: { show_user: false }
                    }
                }}            
                url="https://soundcloud.com/chillhopdotcom/sets/lofihiphop?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                // controls={true}
                height="500px"
                width="200px"
            />
    </div>
  );
}

export default App;