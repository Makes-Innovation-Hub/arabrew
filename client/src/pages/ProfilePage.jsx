import { Link } from "react-router-dom";
import Header from "../components/Header";
import { StyledMargin } from "../styles";
import { ArrowLeft, LanguageIcon, ChatIcon } from "../assets";
import { useContext } from "react";
import { UserContext } from "../contexts/loggedUser.context";
import { useSelector } from "react-redux";
const ProfilePage = () => {
  const { userData: profileData1 } = useContext(UserContext);
  const { userData: profileData2 } = useSelector((state) => state.userRegister);
  const profileData = profileData1 || profileData2;
  console.log("profileData", profileData);
  return (
    <div>
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <Link to="/">
              <ArrowLeft />
            </Link>
          }
          title="Profile"
        />
      </StyledMargin>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          id="profileImg"
          style={{
            flexGrow: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <img
            src={profileData.avatar}
            alt="profile"
            width="80%"
            height="60%"
            style={{
              borderRadius: "5%",
            }}
          />
        </div>
        <div
          id="rest"
          style={{
            flexGrow: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div
            id="title"
            style={{
              flexGrow: 0.05,
              display: "flex",
              justifyContent: "space-around",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontweight: 600,
              fontSize: "3rem",
              borderBottom: "1px solid lightgray",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {profileData.name}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LanguageIcon
                letter={
                  profileData.userDetails.nativeLanguage === "AR"
                    ? "ع"
                    : profileData.userDetails.nativeLanguage === "HE"
                    ? "He"
                    : "En"
                }
              />
            </div>
          </div>
          <div id="intests" style={{ margin: "5% auto 5% 3%" }}>
            My Interest
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {profileData.userDetails.interests.map((hobby, i) => {
              return (
                <div
                  style={{
                    backgroundColor: "#EDF2F7",
                    borderRadius: "2rem",
                    margin: "0.5rem 1.5rem",
                    padding: "1% 1.5%",
                  }}
                  key={i}
                >
                  {" "}
                  {hobby}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
