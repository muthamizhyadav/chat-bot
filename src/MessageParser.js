class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
    // this.candidate = state.candidates;
  }

  parse(message) {
    const lowerCase = message.toLowerCase();
    if (lowerCase != "" && this.state.candidates.length < 1) {
      this.actionProvider.NameHandler(lowerCase);
      this.actionProvider.candidatesHandler();
      this.state.candidates.push({ name: lowerCase });
    } else {
      this.actionProvider.NameErrorHandler(lowerCase);
    }
    if (lowerCase.includes("Fresher")) {
      this.actionProvider.handleFresher();
      console.log("lowercase", this.actionProvider.handleFresher());
    }
  }
}

export default MessageParser;
