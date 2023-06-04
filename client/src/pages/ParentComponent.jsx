import CommonInterests from "./CommonInterests";

const ParentComponent = () => {
  const hobbies = [
    "🎸 Rock",
    "⚽ Football",
    "🎮 Video Games",
    "🏊‍♂️ Swimming",
    "✏️ Drawing",
  ];
  return <CommonInterests hobbies={hobbies} />;
};
export default ParentComponent;
