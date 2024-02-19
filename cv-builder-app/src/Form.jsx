import React from "react";

const Input = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.id}
      >
        {label}
      </label>
      <input
        {...props}
        className="border border-gray-300 px-2 py-1 rounded-md w-full"
      />
    </div>
  );
};

export default function Form() {
  return (
    <div className="bg-white drop-shadow p-4">
      <form action="">
        <fieldset>
          <legend>
            <h2>PERSONAL INFORMATION</h2>
          </legend>
          <Input label="Full Name" id="name" type="text" />
          <Input label="E-mail adress" id="email" type="email" />
          <Input label="Phone number" id="phone" type="tel" />
        </fieldset>
        <fieldset className="education">
          <legend>EDUCATION</legend>
          <div className="grid grid-cols-2 gap-x-4">
            <Input label="Start date" id="start-date" type="month" />
            <Input label="End date" id="end-date" type="month" />
            <Input
              label="Course"
              id="course"
              type="text"
              placeholder="eg. Masters in Graphic Design"
            />
            <Input label="Insitution" id="institution" type="text" />
          </div>
          <button type="submit">Add</button>
        </fieldset>
      </form>
    </div>
  );
}
