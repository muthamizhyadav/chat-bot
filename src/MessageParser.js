class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCase = message.toLowerCase();
    if (lowerCase != "") {
      this.actionProvider.NameHandler(lowerCase);
      this.actionProvider.candidatesHandler();
    } else {
      this.actionProvider.NameErrorHandler(lowerCase);
    }
  }
}

export default MessageParser;
