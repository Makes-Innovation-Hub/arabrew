import {
  LangSelection,
  Interests,
  Occupation,
  ConversationPage,
  BirthPage,
  Chat,
  NationalityPage,
  BioPage,
  Location,
  GenderSelection,
  SearchFriends,
} from "./pages/exports.js";
import ProfilePage from "./pages/ProfilePage.jsx";
import ProfilePageHobbies from "./pages/ProfilePageHobbies.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderLayout from "./components/HeaderLayout";
import prevConversation from "./pages/DemoArrChatsData";
import { UserProvider } from "./contexts/loggedUser.context.jsx";
import ResumePage from "./pages/OnBoarding/AddResumePage/ResumePage.jsx";
import ChooseHubPage from "./pages/Home/ChooseHubPage.jsx";
import PostJob from "./pages/jobs/PostJob.jsx";
import MeetupsHomePage from "./pages/MeetupsPage/MeetupsPage.jsx";
import MeetupForm from "./pages/Meetup/MeetupForm.jsx";
import ProfilePageWork from "./pages/Work/ProfilePageWork.jsx";
import WorkHomePage from "./pages/Work/WorkHomePage.jsx";
import JobBoardPage from "./pages/Job/JobBoard.jsx";
import MyPostedJob from "./pages/jobs/myPostedJobspage/MyPostedJob.jsx";
import UpcomingMeetupPage from "./pages/MeetupsPage/UpcomingMeetupPage.jsx";
import OtherJob from "./pages/jobs/otherJobPage/OtherJob.jsx";
import Appliers from "./pages/jobs/jobAppliers/Appliers.jsx";
import MyMeetupPage from "./pages/Meetup/MyMeetupsPage.jsx";
import MyJobPosts from "./pages/jobs/myJobPosts/MyJobPosts.jsx";
import Profile from "./pages/ProfilesPages/Profile.jsx";
import MeetupDetailsPage from "./pages/MeetupsPage/MeetupDetailsPage.jsx";
import MyMeetups from "./pages/MeetupsPage/MyMeetups.jsx";
import SpecificMeetup from "./pages/MeetupsPage/SpecificMeetup.jsx";
import SearchColleaguesPage from "./pages/search-colleagues/SearchColleaguesPage.jsx";
import SearchColleaguesConversation from "./pages/chat/SearchColleaguesConversation.jsx";
import MapPage from "./pages/MapPage/MapPage.jsx";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "../Translate/i18n.js";

import { I18nextProvider } from "react-i18next";

const initialLanguage = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources: translations,
  lng: initialLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
import Attendeespage from "./pages/MeetupsPage/Attendeespage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <I18nextProvider i18n={i18n}>
        <HeaderLayout />
      </I18nextProvider>
    ),
    errorElement: <>Error...</>,
    children: [
      { path: "/lang", element: <LangSelection /> },
      { path: "/interests", element: <Interests /> },
      { path: "/location", element: <Location /> },
      { path: "/gender", element: <GenderSelection /> },
      { path: "/resumePage", element: <ResumePage /> },
      { path: "/occupation", element: <Occupation /> },
    ],
  },
  {
    path: "/conversation",
    element: <ConversationPage />,
  },
  {
    path: "/chat-page/",
    element: <Chat />,
    errorElement: <>Error...</>,
  },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/profile-hobbies", element: <ProfilePageHobbies /> },
  { path: "/profile-work", element: <ProfilePageWork /> },
  { path: "/agePage", element: <BirthPage />, errorElement: <>Error...</> },
  { path: "/bioPage", element: <BioPage />, errorElement: <>Error...</> },
  {
    path: "/search-friends",
    element: <SearchFriends />,
    errorElement: <>Error...</>,
  },
  {
    path: "/nationalityPage",
    element: <NationalityPage />,
    errorElement: <>Error...</>,
  },
  {
    path: "/chooseHub",
    element: <ChooseHubPage />,
    errorElement: <>Error...</>,
  },
  {
    path: "/MeetupsHomePage",
    element: <MeetupsHomePage />,
    errorElement: <>Error...</>,
  },
  {
    path: "/UpcomingMeetupPage",
    element: <UpcomingMeetupPage />,
    errorElement: <>Error...</>,
  },
  {
    path: "/postJob",
    element: <PostJob />,
    errorElement: <>Error...</>,
  },
  {
    path: "/work",
    element: <WorkHomePage />,
    errorElement: <>Error...</>,
  },
  {
    path: "/job-board",
    element: <JobBoardPage />,
    errorElement: <>Error...</>,
  },
  {
    path: "/MyPostedJob/:id",
    element: <MyPostedJob />,
    errorElement: <>Error...</>,
  },
  {
    path: "/otherJob/:id",
    element: <OtherJob />,
    errorElement: <>Error...</>,
  },
  { path: "/MeetupForm", element: <MeetupForm />, errorElement: <>Error...</> },
  {
    path: "/appliers/:id",
    element: <Appliers />,
    errorElement: <>Error...</>,
  },
  {
    path: "/MeetupPage",
    element: <MyMeetupPage />,
    errorElement: <>Error...</>,
  },
  {
    path: "/myJobsPosted",
    element: <MyJobPosts />,
    errorElement: <>Error...</>,
  },
  {
    path: "/profiled",
    element: <Profile />,
    errorElement: <>Error...</>,
  },
  {
    path: "/My-meetups-page",
    element: <MyMeetups />,
    errorElement: <>Error...</>,
  },
  {
    path: "/MeetupDetailsPage/:meetupId",
    element: <MeetupDetailsPage />,
    errorElement: <>Error...</>,
  },
  {
    path: "/SpecificMeetupPage/:id",
    element: <SpecificMeetup />,
    errorElement: <>Error...</>,
  },
  {
    path: "/Search-colleagues",
    element: <SearchColleaguesPage />,
    errorElement: <>Error...</>,
  },
  {
    path: "/Work-conversation",
    element: <SearchColleaguesConversation />,
    errorElement: <>Error...</>,
  },
  {
    path: "/Attendeespage/:id",
    element: <Attendeespage />,
    errorElement: <>Error...</>,
  },
  {
    path: "/Map",
    element: <MapPage />,
    errorElement: <>Error...</>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
