import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useCreateMeetupMutation } from "../../features/meetupApi";

import { StyledMargin, StyledPage } from "../../styles";

import {
  MeetupFormWrapper,
  MeetupInput,
  MeetupTextArea,
  MeetupButton,
} from "../../styles/Meetup/MeetupStyledPage";
import { ArrowLeft, ChatIcon } from "../../assets";

import { useTranslation } from "react-i18next";

const MeetupForm = () => {
  const navigate = useNavigate();
  const myUser = JSON.parse(sessionStorage.getItem("loggedUser"));
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, settime] = useState("");
  const [price, setprice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [remainingChars, setRemainingChars] = useState(30);

  const [createMeetup, { isLoading, isError }] = useCreateMeetupMutation();

  const { t, i18n } = useTranslation();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const meetupData = {
      title,
      date,
      time,
      price,
      description,
      location,
      owner: myUser.id,
    };
    console.log("Meetup Data: ffffffff", meetupData);
    try {
      const response = await createMeetup(meetupData).unwrap();
      console.log("Meetup created successfully:", response);
      navigate("/My-meetups-page");
    } catch (error) {
      console.error("Error creating meetup:", error);
      console.error("Error response:", error.response);
    }
  };

  const handleTitleChange = (e) => {
    const inputText = e.target.value;
    setTitle(inputText);
    setRemainingChars(30 - inputText.length);
  };

  // Set text direction to left-to-right for Hebrew or Arabic
  const getTextDirection = useCallback(() => {
    const lang = i18n.language;
    return lang === "he" || lang === "ar" ? "rtl" : "ltr";
  }, [localStorage.getItem("lang")]);

  return (
    <div dir={getTextDirection()}>
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <Link to="/MeetupsHomePage">
              <ArrowLeft />
            </Link>
          }
          title={t("post_meetup")}
          rightIcon={
            <Link to="/">
              <ChatIcon />
            </Link>
          }
        />
      </StyledMargin>
      <StyledPage>
        <MeetupFormWrapper>
          <form onSubmit={handleFormSubmit}>
            <div>
              <h3>{t("add_title")}</h3>
              <MeetupInput
                type="text"
                placeholder={t("write_here")}
                value={title}
                onChange={handleTitleChange}
                maxLength={30}
                required
              />
              <p style={{ marginRight: "auto", color: "#666" }}>
                {remainingChars} {t("character")}
              </p>
            </div>
            <div>
              <h3>{t("add_date")}</h3>
              <MeetupInput
                type="date"
                placeholder="WED,  JAN 22"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div>
              <h3>{t("add_hour")}</h3>
              <MeetupInput
                type="time"
                placeholder="09:00 PM GMT+2"
                value={time}
                onChange={(e) => settime(e.target.value)}
                required
              />
            </div>
            <div>
              <h3>{t("location")}</h3>
              <MeetupInput
                type="text"
                placeholder={t("location")}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
              <h3>{t("cost")}</h3>
              <MeetupInput
                type="text"
                placeholder={t("cost_holder")}
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </div>
            <div>
              <h3>{t("add_event_description")}</h3>
              <MeetupTextArea
                placeholder={t("add_event_description")}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <MeetupButton type="submit">{t("post_meetup")}</MeetupButton>
          </form>
        </MeetupFormWrapper>
      </StyledPage>
    </div>
  );
};

export default MeetupForm;
