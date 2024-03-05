// import { useEffect } from "react";
// import { useGetMyMeetupsQuery } from "../../features/meetupApi.js";
// // import { useGetAllMeetupsQuery } from "../../features/meetupApi.js";
// import { Link } from "react-router-dom";

// const MyMeetupsPage = () => {
//   const {
//     data: meetups,
//     isLoading,
//     isError,

//   } = useGetMyMeetupsQuery();
//   console.log("Meetups data:", meetups);

//   // const MyMeetupsPage = () => {
//   //   const {
//   //     data: meetups,
//   //     isLoading,
//   //     isError,
//   //     refetch,

//   //   } = useGetAllMeetupsQuery();
//   //   console.log("Meetups data:", meetups);

//   // useEffect(() => {
//   //   refetch();
//   // }, [refetch]);

//   console.log(meetups)
//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error fetching meetups</div>;

//   // Check if meetups is an object
//   if (typeof meetups !== "object" || meetups === null) {
//     return <div>No meetups found.</div>;
//   }
//   // console.log(`ffadafwe ${meetups.id}`);

//   return (
//     <div>
//       <h1>My Meetups</h1>
//       {Object.keys(meetups).map((key) => {
//         const meetup = meetups[key];
//         console.log(`meetups id : ${meetup.title}`);
//         return (
//           <div key={meetup.id}>
//             <h2>{meetup.title}</h2>
//             <p>Day, Date, local hour: {meetup.date}</p>
//             <p>
//               Location:{" "}
//               <a
//                 href={`https://maps.google.com/?q=${meetup.location}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {meetup.location}
//               </a>
//             </p>
//             <p>Cost: {meetup.price}</p>
//             <p>Description: {meetup.description}</p>
//             {/* <p>Attendees: {meetup.attendees.length}</p> */}
//             <Link to={`/attendees/${meetup.id}`}>View Attendees</Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default MyMeetupsPage;

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { MeetupFormWrapper, Circle } from '../../styles/Meetup/MeetupStyledPage.jsx';
// import { useGetMyMeetupsQuery } from '../../features/meetupApi.js';
// import { StyledMargin, StyledPage} from '../../styles';
// import Header from '../../components/Header.jsx';
// import ArrowLeft from '../../assets/ArrowLeft.jsx';
// import { DividerLine } from '../../styles/Meetup/MeetupStyledPage.jsx';

// const MyMeetupPage = () => {
//   const { data: allMeetups, isLoading, isError } = useGetMyMeetupsQuery();
//   const [randomAvatars, setRandomAvatars] = useState([]);

//   useEffect(() => {
//     if (allMeetups && allMeetups.data) {
//       const avatars = Array.from({ length: 7 }, (_, index) => `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${index + 1}.jpg`);
//       setRandomAvatars(avatars);
//     }
//   }, [allMeetups]);
//   console.log(allMeetups)

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error fetching meetups</div>;
//   console.log(isError)
//   return (
//     <div>
//       <StyledMargin direction="vertical" margin="5%">
//         <Header
//           leftIcon={
//             <Link to="/MeetupsHomePage">
//               <ArrowLeft />
//             </Link>
//           }
//           title="Meetup Page"
//         />
//       </StyledMargin>
//       <StyledPage>
//         <MeetupFormWrapper>
//           <form>
//             {allMeetups.data.map((meetup) => (
//               <div key={meetup.id}>
//                  <Link to={`/meetup/${meetup.id}`}>
//                 <h1>{meetup.title}</h1>
//                 </Link>
//                 <br />
//                 <br />
//                 <p>{meetup.date}</p>
//                 <DividerLine />
//                 <a
//                   href={`https://maps.google.com/?q=${meetup.location}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {meetup.location}
//                 </a>
//                 <DividerLine></DividerLine>
//                 <p>{meetup.price}</p>
//                 <DividerLine></DividerLine>
//                 <h3>About</h3>
//                 {meetup.description}
//                 <DividerLine></DividerLine>
//                 <h3>Attendees</h3>
//                 {randomAvatars.map((avatar, index) => (
//                   <Circle key={index}>
//                     <img src={avatar} alt={`Avatar ${index + 1}`} />
//                   </Circle>
//                 ))}
//               </div>
//             ))}
//           </form>
//         </MeetupFormWrapper>
//       </StyledPage>
//     </div>
//   );
// };

// export default MyMeetupPage;

//

import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar";
import {
  UpcomingStyledPage,
  StyledMargin,
  MeetupListStyle,
  UpcomingDisplay,
  CenteredText,
} from "../../styles";
import { SmallGlass, ArrowLeft } from "../../assets";
import { useGetMyMeetupsQuery } from "../../features/meetupApi";

const MyMeetupPage = () => {
  const [isSideBar, setIsSideBar] = useState(false);
  const { data, error, isLoading, refetch } = useGetMyMeetupsQuery();

  useEffect(() => {
    // Automatically refetch data every 10 seconds
    const intervalId = setInterval(() => {
      refetch();
    }, 10 * 1000);
    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    console.log(error);
    return <div>Error occurred while fetching meetups.</div>;
  }

  const meetups = data?.data;

  return (
    <div>
      {isSideBar && (
        <div>
          <SideBar openSideBar={setIsSideBar} />
        </div>
      )}
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <Link to="/meetupsHomePage">
              <ArrowLeft />
            </Link>
          }
          title="Meetups"
        />
      </StyledMargin>
      <UpcomingStyledPage>
        <CenteredText>My Meetups</CenteredText>

        {Array.isArray(meetups) && meetups.length !== 0 ? (
          <MeetupListStyle>
            {meetups.map((meetup, i) => (
              <UpcomingDisplay
                key={i}
                title={meetup.title}
                date={meetup.date}
                time={meetup.time}
                location={meetup.location}
                attendeesCount={meetup.attendees.length}
              />
            ))}
          </MeetupListStyle>
        ) : (
          <CenteredText>
            <div>No Meetups created</div>
          </CenteredText>
        )}
      </UpcomingStyledPage>
    </div>
  );
};

export default MyMeetupPage;
