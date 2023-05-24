import { Chat, Message, asyncHandler } from "../index.js";

export const sendMessage = asyncHandler(async (req, res, next) => {
  const { chatId, userId: senderId } = req.params;
  const newMessageObg = { chatId: chatId, sender: senderId, ...req.body };
  const newMessge = await Message.create(newMessageObg);

  if (!newMessge)
    return next(
      new Error(
        `failed creating/sending message chatid:${chatId} , senderId:${senderId}`
      )
    );

  const { id } = newMessge;
  const chatUpdateOptions = [
    chatId,
    { latestMessage: id },
    { new: true, runValidators: true },
  ];

  const updateChat = await Chat.findByIdAndUpdate(...chatUpdateOptions);
  if (!updateChat) return next(new Error("failed updating Chat DOC"));
  res.status(200).json({
    success: true,
    data: newMessge,
  });
});

export const getMessagesByChatId = asyncHandler(async (req, res, next) => {
  const { chatId } = req.params;
  let userMessages = await Message.find({ chatId: chatId })
    .populate("sender", { name: 1, _id: 0 })
    .sort({ createdAt: 1 })
    .lean();
  if (!userMessages)
    return next(new Error(`error finding chats for chatID: ${chatId}`));

  const userMsgArr = userMessages.map((msg) => {
    const { createdAt, sender } = msg;
    msg.id = msg._id;

    let msgObj = {
      ...msg,
      sender: sender.name,
      createdAt: createdAt.toLocaleString("en-US", {
        timeZone: "Asia/Jerusalem",
        hour12: false,
      }),
    };
    delete msgObj._id;
    delete msgObj.updatedAt;
    return msgObj;
  });

  res.status(200).json({
    success: true,
    data: userMsgArr,
  });
});
