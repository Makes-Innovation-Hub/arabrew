export const genRoomId = (namesArr) => {
  return namesArr.map((user) => user.replace(" ", "_")).join("-");
};
// return `${name.replace(" ", "_")}-${userObj.name.replace(
//     " ",
//     "_"
//   )}`;
