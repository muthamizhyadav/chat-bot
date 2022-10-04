import { createChatBotMessage } from "react-chatbot-kit";
import Candidates from "./Widgets/candidate";
import LinkList from "../src/Widgets/linkList.jsx";
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
      widgetFunc: props => <Candidates {...props} />,
      mapStateToProps: ["candidates"]
    },
    {
      widgetName: "handleFresher",
      widgetFunc: props => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Fresher's Form",
            url: "Name",

            id: 1
          },
          {
            text: "Degree",
            degree: "Degree",
            id: 2
          },
          {
            text: "passed_Year Masters",
            passYear: "passed_Year",
            id: 3
          },
          {
            text: "your photo",
            photo: "your photo",
            id: 3
          },
          {
            text: "DOB",
            dob: "DOB",
            id: 4
          }
        ]
      }
    }
  ]
};

export default config;
