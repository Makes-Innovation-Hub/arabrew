import "../components/styles/Occupation.css";

const Occupation = () => {
  return (
    <div className="occupation-page">
      <div className="navbar">
        <div className="back">{"<"}</div>
        <div className="page-title">Add Occupation</div>
        <div></div>
      </div>
      <div className="content">
        <div className="upper">
          <div className="content-title">Add your Occupation</div>
          <input
            type="text"
            maxLength={30}
            placeholder="Write Here...For example: Doctor"
          />
          <label>30 Character</label>
        </div>
        <div className="button-div">
          <button>Save & Next</button>
        </div>
      </div>
    </div>
  );
};
export default Occupation;
