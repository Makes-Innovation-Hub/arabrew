import {
  Intro,
  LangSelection,
  Interests,
  Occupation,
  ConversationPage,
  BirthPage,
  Chat,
  Nationality,
  BioPage,
  Location,
  GenderSelection,
} from "./pages/exports.js";
import ProfilePage from "./pages/ProfilePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderLayout from "./components/HeaderLayout";
let myProfile = [
  {
    name: "Fatima",
    img: Profile,
    lang: "Arabic",
    hobbies: [
      "🏖️ Beaches",
      "⛰️ Mountains",
      "🌆 City sightseeing",
      "🌍 International destinations",
      "🛣️ Road trips",
    ],
  },
];
import Profile from "./assets/prf.webp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    errorElement: <>Error...</>,
    children: [
      { path: "/lang", element: <LangSelection /> },
      { path: "/interests", element: <Interests /> },
      { path: "/nationality", element: <Nationality /> },
      { path: "/location", element: <Location /> },
      { path: "/gender", element: <GenderSelection /> },
      { path: "/occupation", element: <Occupation /> },
    ],
  },
  { path: "/intro", element: <Intro />, errorElement: <>Error...</> },
  { path: "/chatPage", element: <Chat />, errorElement: <>Error...</> },
  { path: "/agePage", element: <BirthPage />, errorElement: <>Error...</> },
  { path: "/conversation", element: <ConversationPage /> },
  { path: "/profile", element: <ProfilePage profileDate={myProfile[0]} /> },
  { path: "/bioPage", element: <BioPage />, errorElement: <>Error...</> },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
