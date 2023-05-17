import ChatDisplayArea from "../../components/Chat/ChatDisplayArea/ChatDisplayArea";
import Header from "../../components/Chat/Header/Header";
import InputArea from "../../components/Chat/InputArea/InputArea";
import { ChatLayout } from "../../styles/Chat/ChatLayout";

export default function Chat() {
  return (
    <ChatLayout>
      <Header />
      <ChatDisplayArea />
      <InputArea />
    </ChatLayout>
  );
}
