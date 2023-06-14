//function that recieves userArr __ ["Taufiq Zayyad","Benny Solmon"]
// sorts the names Array         __ in alphabetical order
// then generates the chat ID    __ "BennySolmon_TaufiqZayyad"
export const genChatId = (userNamesArr) =>
  userNamesArr
    .sort((a, b) => {
      const lowercaseA = a.toLowerCase();
      const lowercaseB = b.toLowerCase();

      if (lowercaseA < lowercaseB) {
        return -1;
      }
      if (lowercaseA > lowercaseB) {
        return 1;
      }
      return 0;
    })
    .map((userName) => {
      return userName.split(" ").join("");
    })
    .join("_");
