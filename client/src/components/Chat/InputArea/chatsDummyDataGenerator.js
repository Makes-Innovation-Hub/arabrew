function generateDummyChatData() {
  const dummyData = [];
  const numberOfMessages = 10; // Adjust the number of messages as needed

  const users = ["User1", "User2"]; // List of possible users

  for (let i = 0; i < numberOfMessages; i++) {
    const randomUserIndex = Math.floor(Math.random() * users.length);
    const randomUser = users[randomUserIndex];
    const message = {
      sender: randomUser,
      message: `message number ${
        i + 1
      }. It is intended to simulate in the chat display area.`,
      timestamp: new Date().toISOString(),
    };
    dummyData.push(message);
  }

  return dummyData;
}

const chats = generateDummyChatData();

export default chats;
