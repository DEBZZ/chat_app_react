import './App.css';
import React, {useEffect, useState,forwardRef} from 'react';
import FlipMove from 'react-flip-move';
import { Button, FormControl, Input, InputLabel} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([]);
  const [username,setUsername] = useState('');
  console.log(messages)
  useEffect(()=>{
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc=>({id:doc.id, message:doc.data()})))
    })
  },[])

  useEffect(() => {
    setUsername(prompt("Enter UserName..").toUpperCase())
  }, [])

  const sendMessage =(event) =>{
    event.preventDefault();
    // setMessages([...messages,{
      // username: username,
      // text: input,
      // timestamp:firebase.firestore.FieldValue.serverTimestamp()
    // }]);
    db.collection('messages').add({
      username: username,
      message: input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  };
  return (
    <div className="App">
      <img src="https://www.nicepng.com/png/full/874-8743554_chat-on-the-mac-app-store-rocket-chat.png" width="100" height="100"/>
      <h1>Hello folks👨‍💻!! (Try this chat app 🚀 build in React)</h1>
      <h5>Developer:: Debzz</h5>
      <h2>Welcome {username ===''? 'Unknown':username}</h2>
      <form class='app__form'>
      <FormControl className='app__formControl'>
        <Input className='app__input' placeholder='Enter message..' value={input} onChange={event=>setInput(event.target.value)}/>
        <IconButton className='app__iconButton' disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
        <SendIcon />
      </IconButton>
      </FormControl>
      </form>
      <FlipMove>
        {
        messages.map(({id,message}) =>(
          <Message key={id} username={username} message={message} />
        ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
