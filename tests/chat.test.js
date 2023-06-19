import mongoose from "mongoose";

//* the "export default app;" at the very end of the server.js
import server from "../server/server.js";

import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import {
  access_chatCollection,
  addMessageToChat,
} from "../server/utils/chat_socketIo.js";

const usersArr = ["Spider Man", "Pablo Escobar"];
const content = "from Spider Man";

chai.use(chaiHttp);

describe("all chat functions", () => {
  //    after(async()=>{
  //         await Chat.deleteOne({users:usersArr})
  //    })

  it("should check IF a chat between 2 users EXIST, if NOT create new CHAT", async () => {
    const result = await access_chatCollection(usersArr);
    expect(result).to.be.true;
  });
  it("add message to the chat, and if Success return new Message Object", async () => {
    const [sender, reciever] = usersArr;
    const result = await addMessageToChat(sender, reciever, content);

    expect(result.sender).to.equal(sender);
    expect(result.content).to.equal(content);
  });

  it("should return the newest message in chat history and the participants names", () => {
    const [sender, reciever] = usersArr;

    chai
      .request(server)
      .get(`/api/chat/${sender}/${reciever}`)
      .end((_, res) => {
        const chatObj = res.body;
        const { messagesHistory, users } = chatObj;

        const lstNdx = messagesHistory.length - 1;
        const newestMessage = messagesHistory[lstNdx];
        expect(users[0]).to.equal(usersArr[0]);
        expect(users[1]).to.equal(usersArr[1]);
        expect(newestMessage.sender).to.equal(sender);
        expect(newestMessage.content).to.equal(content);
      });
  });
  it("should return an array of objects, each object consists of : newest message in the requested chat and the reciever(friend) name ", async () => {
    const [sender, friend] = usersArr;
    chai
      .request(server)
      .get(`/api/chat/logged/user/${sender}`)
      .end((_, res) => {
        const conversations = res.body;
        conversations.forEach((conv) => {
          const { lastMessage, recieverName } = conv;
          expect(lastMessage).to.equal(content);
          expect(recieverName).to.equal(friend);
        });
      });
  });
});
