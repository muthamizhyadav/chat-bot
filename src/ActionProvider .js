class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  NameHandler = (lowerCase) => {
    const message = this.createChatBotMessage(`Welcome ${lowerCase} `);
    this.setChatbotMessage(message);
  };

  candidatesHandler = () => {
    const message = this.createChatBotMessage(
      "Are You Frsher's OR Experienced ?",
      {
        widget: "candidates"
      }
    );
    this.setChatbotMessage(message);
  };

  handleFresher = () => {
    const message = this.createChatBotMessage(
      "please Enter Your Deatils with your educations status:",
      {
        
      }
    );
  };

  NameErrorHandler = (lowerCase) => {
    const message = this.createChatBotMessage(
      `Hey ${lowerCase} , Please Enter valid details ?`
    );
    this.setChatbotMessage(message);
  };
  setChatbotMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message]
    }));
  };
}

export default ActionProvider;
