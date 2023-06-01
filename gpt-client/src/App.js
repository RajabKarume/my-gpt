import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBrain } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function App() {

  const [input, setInput] = useState("")
  const [chatLog, setChatLog] = useState([{
    user: 'gpt',
    message: 'How can I help?'
  }])

  function clearChat(){
    setChatLog([])
  }
  async function handlesubmit(e){
    e.preventDefault()
    let chatLogNew = [...chatLog, {user: 'me' , message: `${input}`}]
    setInput("")
    setChatLog(chatLogNew)
    const messages = chatLogNew.map((message) => message.message).join("")
    const response = await fetch("http://localhost:3080/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: messages
      })
    })
    const data = await response.json()
    await setChatLog([...chatLogNew, {user: 'gpt' , message: `${data.message}`}])
    console.log(data.message)
  }

  return (
    <div className="App">
      <aside className="sidemenu">
        <button onClick={clearChat} className="sidemenu-button"><FontAwesomeIcon icon={faPlus} style={{paddingRight:"10px"}} />New Chat</button>
      </aside>
      <section className="chatbox">
        <div className='chat-log' >
          {chatLog.map((message, index)=>(
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div className='chat-textarea-holder'>
          <form onSubmit={handlesubmit}>
          <input value={input} onChange={(e)=>setInput(e.target.value)} rows="1" className='chat-textarea'  />
          </form>
        </div>
      </section>
    </div>
  );
}

const ChatMessage = ({message}) => {
  return(
    <div className={`chat-message ${message.user === 'gpt' && 'gpt'}`}>
            <div className='chat-message-center'>
              <div className={`chat-image ${message.user === 'gpt' && 'gpt'}`}>
              {message.user === 'gpt' && <FontAwesomeIcon icon={faBrain} size='lg' />}
              </div>
              <div className='message'>{message.message}</div>
            </div>
          </div>
  )
}

export default App;
