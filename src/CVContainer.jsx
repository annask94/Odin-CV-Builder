import React from "react";
import EmailIcon from "./assets/email-outline.svg";
import PhoneIcon from "./assets/phone.svg";
import AddedDataEdu from "./AddedDataEdu.jsx";
import AddedDataExp from "./AddedDataExp.jsx";
import AddedDataSkills from "./AddedDataSkills.jsx";
import AddedDataLang from "./AddedDataLang.jsx";

const PersonalInfo = ({ personalInfoAdd }) => {
  const { name, email, phone } = personalInfoAdd;
  return (
    <div className="bg-gray-700 p-8 text-white grid grid-cols-2 items-center justify-items-center">
      <h1 className="col-span-2 mb-4 text-2xl uppercase">{name}</h1>
      <div className="flex gap-4">
        <img src={EmailIcon} alt="Email icon" className="w-8" />
        <h3>{email}</h3>
      </div>
      <div className="flex gap-4">
        <img src={PhoneIcon} alt="Phone icon" className="w-8" />
        <h3>{phone}</h3>
      </div>
    </div>
  );
};

const CategoryHeader = ({ title }) => {
  return <h2 className="text-2xl font-bold text-gray-700">{title}</h2>;
};

export default function CVContainer({
  personalInfoAdd,
  education,
  experience,
  skills,
  languages,
}) {
  return (
    <main>
      <div className="bg-white drop-shadow-md m-8 a4size">
        <PersonalInfo personalInfoAdd={personalInfoAdd} />

        <div className="professionalInroContainer m-8">
          <div className="eduExpContainer grid grid-cols-2 gap-8">
            <section className="educationContainer">
              <CategoryHeader title={"Education"} />
              <AddedDataEdu
                educationData={education}
                customClassNameEdu={"mt-4"}
                customClassNameEduCourse={"text-xl"}
              />
            </section>
            <section className="experienceContainer">
              <CategoryHeader title={"Experience"} />
              <AddedDataExp
                experienceData={experience}
                customClassNameExp={"mt-4"}
                customClassNameExpPosition={"text-xl"}
              />
            </section>
          </div>
          <section className="skillsContainer mt-8">
            <CategoryHeader title={"Skills"} />
            <AddedDataSkills skillsData={skills} />
          </section>
          <section className="languagesContainer mt-8">
            <CategoryHeader title={"Languages"} />
            <AddedDataLang languagesData={languages} />
          </section>
        </div>
      </div>
    </main>
  );
}
