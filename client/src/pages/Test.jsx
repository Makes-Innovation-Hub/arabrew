import { useEffect } from "react";
// import { useState } from "react";
import { useGetLoggedUserQuery } from "../features/userDataApi.js";
import { useDispatch } from "react-redux";
import { addAllDetails } from "../features/userRegister/userRegisterSlice";
// import { addDetail } from "../features/userRegister/userRegisterSlice"

const Test = () => {
  const hardCodedSubId = "201";
  const { data, isLoading, isError, isSuccess } =
    useGetLoggedUserQuery(hardCodedSubId);
  const dispatch = useDispatch();
  // const [bio, setBio] = useState({field: "bio",value: ""});
  // const [birthYear, setBirthYear] = useState({field: "birthYear",value: ""});
  // const [selectedInterests, setSelectedInterests] = useState({field: "interests",value: ""});
  // const [language, setLanguage] = useState({field: "lang",value: ""});
  // const [occupation, setOccupation] = useState({field: "occupation",value: ""});
  // const [gender, setGender] = useState({field: "gender",value: ""});
  // const [location, setLocation] = useState({field: "location",value: ""});
  // const [nationality, setNationality] = useState({field: "nationality",value: ""});
  // const [name, setName] = useState({field: "name",value: ""});
  // const [avatar, setAvatar] = useState({field: "avatar",value: ""});
  // const [subId, setSubId] = useState({field: "subId",value: ""});

  const fillStore = () => {
    if (data) {
      console.log("data", data);
      dispatch(addAllDetails(data.data));
    }
  };
  // dispatch(addAllDetails({
  //   name: data.data.name,
  //   avatar: data.data.avatar,
  //   subId: data.data.subId,
  //   lang: data.data.userDetails.nativeLanguage,
  //   interests: data.data.userDetails.interests,
  //   birthYear: data.data.userDetails.yearOfBirth,
  //   nationality: data.data.userDetails.nationality,
  //   location: data.data.userDetails.address,
  //   gender: data.data.userDetails.gender,
  //   occupation: data.data.userDetails.occupation,
  //   bio: data.data.userDetails.bio,
  // }));
  // setBio({ ...bio, value: data?.data.userDetails.bio });
  // setBirthYear({ ...birthYear, value: data?.data.userDetails.yearOfBirth });
  // setSelectedInterests({ ...selectedInterests, value: data?.data.userDetails.interests });
  // setLanguage({ ...language, value: data?.data.userDetails.nativeLanguage });
  // setOccupation({ ...occupation, value: data?.data.userDetails.occupation });
  // setGender({ ...gender, value: data?.data.userDetails.gender });
  // setLocation({ ...location, value: data?.data.userDetails.address });
  // setNationality({ ...nationality, value: data?.data.userDetails.nationality });
  // setName({ ...name, value: data?.data.name });
  // setAvatar({ ...avatar, value: data?.data.avatar });
  // setSubId({ ...subId, value: data?.data.subId });

  // dispatch(addDetail(bio));
  // dispatch(addDetail(birthYear));
  // dispatch(addDetail(selectedInterests));
  // dispatch(addDetail(language));
  // dispatch(addDetail(occupation));
  // dispatch(addDetail(gender));
  // dispatch(addDetail(location));
  // dispatch(addDetail(nationality));
  // dispatch(addDetail(name));
  // dispatch(addDetail(avatar));
  // dispatch(addDetail(subId));

  useEffect(() => {
    isSuccess && data && fillStore();
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching user data.</div>;
  }

  return <div>{JSON.stringify(data?.data)}</div>;
};

export default Test;
