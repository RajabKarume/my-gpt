import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <button className="sidemenu-button"><FontAwesomeIcon icon={faPlus} style={{paddingRight:"10px"}} />New Chat</button>
      </aside>
      <section className="chatbox">
        <div className='chat-textarea-holder'>
          <textarea rows="1" className='chat-textarea'  />
        </div>
      </section>
    </div>
  );
}

export default App;
