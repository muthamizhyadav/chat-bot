import "./App.css";
import { Chatbot } from "react-chatbot-kit";
import config from "./Config ";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider ";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className="chat-kit">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
        </div>
      </header>
    </div>
  );
}

export default App;
