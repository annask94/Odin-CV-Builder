import EmailIcon from "./assets/email-outline.svg";
import PhoneIcon from "./assets/phone.svg";

const PersonalInfo = () => {
  return (
    <div className="bg-gray-700 p-8 text-white grid grid-cols-2 items-center justify-items-center">
      <h1 className="col-span-2 mb-4 text-2xl uppercase">Anna Sobieraj</h1>
      <div className="flex gap-4">
        <img src={EmailIcon} alt="Email icon" className="w-8" />
        <h3>annasobieraj3@gmail.com</h3>
      </div>
      <div className="flex gap-4">
        <img src={PhoneIcon} alt="Phone icon" className="w-8" />
        <h3>724-050-351</h3>
      </div>
    </div>
  );
};

export default function CVContainer() {
  return (
    <div className="bg-white drop-shadow-md m-8 a4size ">
      <PersonalInfo />
    </div>
  );
}
