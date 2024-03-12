import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components";
import {
  StyledPage,
  StyledMargin,
  StyledButton,
  StyledPageTitle,
  StyledInput,
  StyledSpan,
  Flex,
} from "../../styles";
import { ArrowLeft } from "../../assets";
import { addDetail } from "../../features/userRegister/userRegisterSlice";
import StyledWorkModelDropDown from "./StyledWorkModelDropDown";
import Modal from "../../styles/Modal/Modal";
import { StyledTextArea } from "../../styles/BioPage/StyledTextArea";
import { useCreateJobMutation } from "../../features/jobStore/jobAPI";
import { addJobDetail } from "../../features/jobStore/JobSlice";
import { useTranslation } from "react-i18next";
import { MeetupButton } from "../../styles/Meetup/MeetupStyledPage";
import { JopPostButton } from "./myPostedJobspage/StyledMyJobPage";

function PostJob() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMaxError, setIsMaxError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [isDetailAdded, setIsDetailAdded] = useState(false);
  const { t, i18n } = useTranslation();

  const [createJob, { isSuccess, isError, error }] = useCreateJobMutation();

  const [jobTitleInput, setJobTitleInput] = useState({
    field: "jobTitle",
    value: "",
  });

  const [companyNameInput, setCompanyNameInput] = useState({
    field: "companyName",
    value: "",
  });

  const [cityInput, setCityInput] = useState({
    field: "city",
    value: "",
  });

  const [workModelInput, setWorkModelInput] = useState({
    field: "workModel",
    value: "",
  });

  const [workDescriptionInput, setWorkDescriptionInputInput] = useState({
    field: "workDescription",
    value: "",
  });

  const { value: jobTitleInputValue } = jobTitleInput;
  const { value: companyNameValue } = companyNameInput;
  const { value: cityValue } = cityInput;
  const { value: workModelValue } = workModelInput;
  const { value: workDescriptionValue } = workDescriptionInput;

  const workDescriptionCharacterCount = workDescriptionValue.length;
  const jobTitleCharacterCount = jobTitleInputValue.length;
  const companyNameCharacterCount = companyNameValue.length;
  const storedUser = JSON.parse(sessionStorage.getItem("loggedUser"));

  const workModelOptions = [
    { label: "On-site", value: "On-site" },
    { label: "Hybrid", value: "Hybrid" },
    { label: "From Home", value: "From Home" },
  ];

  useEffect(() => {
    if (workDescriptionValue.length === 500) {
      setIsMaxError(true);
      setShowModal(true);
      setModalText(t("modal_max_character_error"));
    }
  }, [workDescriptionCharacterCount]);

  useEffect(() => {
    if (jobTitleInputValue.length === 30 || companyNameValue.length === 30) {
      setIsMaxError(true);
      setShowModal(true);
      setModalText(t("modal_max_character_error_title_company"));
    }
  }, [jobTitleCharacterCount, companyNameCharacterCount]);

  const handlePost = async () => {
    if (
      !jobTitleInputValue ||
      !companyNameValue ||
      !cityValue ||
      !workModelValue ||
      !workDescriptionValue
    ) {
      setIsMaxError(true);
      setShowModal(true);
      setModalText("Please fill out all fields");
      return;
    }
    const jobDetails = {
      title: jobTitleInput.value,
      company: companyNameInput.value,
      city: cityInput.value,
      model: workModelInput.value,
      description: workDescriptionInput.value,
      postedBy: storedUser.id,
    };
    try {
      const result = await createJob(jobDetails).unwrap();
      navigate(`/myPostedJob/${result.newJob.id}`);
    } catch (error) {
      console.log("error creating job", error);
    }
  };

  const getTextDirection = () => {
    const lang = i18n.language;
    return lang === "he" || lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <div dir={getTextDirection()}>
      <Header
        leftIcon={
          <Link to="/work">
            <ArrowLeft />
          </Link>
        }
        title={t("post_job")}
      />
      <StyledPage>
        <StyledMargin direction="vertical" margin="1.75rem" />
        <StyledMargin direction="horizontal" margin="35rem">
          <StyledPageTitle>{t("add_job_title")}</StyledPageTitle>
        </StyledMargin>
        <StyledMargin direction="vertical" margin="1.8rem" />
        <StyledInput
          type="text"
          value={jobTitleInputValue}
          maxLength={30}
          onChange={(e) =>
            setJobTitleInput({ ...jobTitleInput, value: e.target.value })
          }
          placeholder={t("write_here_job_title")}
        />
        <StyledMargin direction="vertical" margin="2.6rem" />
        <Flex>
          <StyledMargin direction="horizontal" margin="25rem" />
          <StyledSpan fontSize="12px" color="#7F8790" alignSelf="flex-end">
            {30 - jobTitleCharacterCount} {t("character")}
          </StyledSpan>
        </Flex>

        {/* Company Info */}
        <StyledMargin direction="vertical" margin="2.5rem" />
        <StyledMargin direction="horizontal" margin="35rem">
          <StyledPageTitle>{t("add_company_name")}</StyledPageTitle>
        </StyledMargin>
        <StyledMargin direction="vertical" margin="1.8rem" />
        <StyledInput
          type="text"
          value={companyNameValue}
          maxLength={30}
          onChange={(e) =>
            setCompanyNameInput({ ...companyNameInput, value: e.target.value })
          }
          placeholder={t("write_here_company_name")}
        />
        <StyledMargin direction="vertical" margin="2.6rem" />
        <Flex>
          <StyledMargin direction="horizontal" margin="25rem" />
          <StyledSpan fontSize="12px" color="#7F8790" alignSelf="flex-end">
            {30 - companyNameCharacterCount} {t("character")}
          </StyledSpan>
        </Flex>
        {/* add city */}

        <StyledMargin direction="vertical" margin="1.75rem" />
        <StyledMargin direction="horizontal" margin="35rem">
          <StyledPageTitle>{t("add_city")}</StyledPageTitle>
        </StyledMargin>
        <StyledMargin direction="vertical" margin="1.8rem" />
        <StyledInput
          type="text"
          value={cityValue}
          maxLength={30}
          onChange={(e) =>
            setCityInput({ ...cityInput, value: e.target.value })
          }
          placeholder={t("write_here_city")}
        />
        <StyledMargin direction="vertical" margin="2.6rem" />

        {/* work model */}
        <StyledMargin direction="vertical" margin="1.75rem" />
        <StyledMargin direction="horizontal" margin="35rem">
          <StyledPageTitle>{t("work_model")}</StyledPageTitle>
        </StyledMargin>

        <StyledWorkModelDropDown
          optionsArray={workModelOptions}
          placeHolder={t("select")}
          selected={workModelInput}
          setSelected={setWorkModelInput}
          isSearchable={false}
        />
        <StyledMargin direction="vertical" margin="2.6rem" />

        {/* Add Job Description*/}
        <StyledMargin direction="vertical" margin="2.5rem" />
        <StyledMargin direction="horizontal" margin="35rem">
          <StyledPageTitle>{t("add_job_description")}</StyledPageTitle>
        </StyledMargin>
        <StyledMargin direction="vertical" margin="1.8rem" />
        <StyledTextArea
          value={workDescriptionValue}
          placeholder={t("write_here_job_description")}
          maxLength={500}
          onChange={(e) =>
            setWorkDescriptionInputInput({
              ...workDescriptionInput,
              value: e.target.value,
            })
          }
        ></StyledTextArea>
        <StyledMargin direction="vertical" margin="2.6rem" />
        <Flex>
          <StyledMargin direction="horizontal" margin="25rem" />
          <StyledSpan fontSize="12px" color="#7F8790" alignSelf="flex-end">
            {500 - workDescriptionCharacterCount} {t("character")}
          </StyledSpan>
        </Flex>

        {isMaxError && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            modalText={modalText}
          />
        )}
        <StyledMargin direction="vertical" margin="3rem" />
        <JopPostButton onClick={handlePost} text={t("post_job")}>
          Post Job
        </JopPostButton>
      </StyledPage>
    </div>
  );
}

export default PostJob;
