import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import axios from "axios";
import { useCreateMeetupMutation } from "../../features/meetupApi";

import { StyledMargin, StyledPage } from "../../styles";

import {
  MeetupFormWrapper,
  MeetupInput,
  MeetupTextArea,
  MeetupButton,
} from "../../styles/Meetup/MeetupStyledPage";
import { ArrowLeft, ChatIcon } from "../../assets";

const MeetupForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, settime] = useState("");
  const [price, setprice] = useState("");
  const [description, setDescription] = useState("");
  const [remainingChars, setRemainingChars] = useState(30);

  const [createMeetup, { isLoading, isError }] = useCreateMeetupMutation();
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const meetupData = {
      title,
      date,
      time,
      price,
      description,
    };
    console.log("Meetup Data: ffffffff", meetupData);
    try {
      const response = await createMeetup(meetupData);
      console.log("Meetup created successfully:", response);
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

  return (
    <div>
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <Link to="/MeetupsHomePage">
              <ArrowLeft />
            </Link>
          }
          title="Post a Meetup"
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
              <h3>Add Title</h3>
              <MeetupInput
                type="text"
                placeholder="Write Here...For example: AI For Dev"
                value={title}
                onChange={handleTitleChange}
                maxLength={30}
                required
              />
              <p style={{ marginRight: "auto", color: "#666" }}>
                {remainingChars} Character
              </p>
            </div>
            <div>
              <h3>Add Date</h3>
              <MeetupInput
                type="date"
                placeholder="WED,  JAN 22"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div>
              <h3>Add Hour</h3>
              <MeetupInput
                type="time"
                placeholder="09:00 PM GMT+2"
                value={time}
                onChange={(e) => settime(e.target.value)}
                required
              />
            </div>
            <div>
              <h3>Cost</h3>
              <MeetupInput
                type="text"
                placeholder="Free, 5 $..."
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </div>
            <div>
              <h3>Add Event Description</h3>
              <MeetupTextArea
                placeholder="Write Here...For example an amazing event in down town new york.."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <MeetupButton type="submit">Post Meetup</MeetupButton>
          </form>
        </MeetupFormWrapper>
      </StyledPage>
    </div>
  );
};

export default MeetupForm;
