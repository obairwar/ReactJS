import { useState } from 'react'
import { ChatInput } from './components/ChatInput'  //name exports
import ChatMessages from './components/ChatMessages' //default exports

import './App.css'

   function App(){

           const [chatMessages,setChatMessages]= useState([{ 
            message:"Hello Chatbot",
            sender:"user",
            id:'id1',
          },{
              message :"Hello! How can I help You ?" ,
              sender:"robot",
              id:'id2',
           },{
              message:"can you get me todays date" ,
              sender:"user" ,
              id:"id3",
           },{
              message:"Today is September 7",
              sender:"robot", 
              id:'id4',
         }]
         );




      return (
        <div className="app-container">
          
          <ChatMessages
          chatMessages={chatMessages}
          
          />

          <ChatInput
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          />
        
        
        </div>
          
      )
    }
  
      
export default App
