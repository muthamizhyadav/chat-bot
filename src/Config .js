import { createChatBotMessage } from "react-chatbot-kit";
import Candidates from "./Widgets/candidate";
let botName = "Uyar job-Portal";
const config = {
  initialMessages: [
    createChatBotMessage(`Welcome to ${botName}`),

    createChatBotMessage(`Enter your Name 😎`)
  ],
  botName: "job-Portal",
  customStyles: {
    chatButton: {
      backgroundColor: "#376B7E"
    }
  },
  state: {
    candidates: []
  },
  widgets: [
    {
      widgetName: "candidates",
      widgetFunc: (props) => <Candidates {...props} />,
      mapStateToProps: ["candidates"]
    },
    {
      widgetName: "handleJavascript"
    }
  ]
};

export default config;
