import { useState } from "react";
import Form from "./Form.jsx";
import CVContainer from "./CVContainer.jsx";

export default function App() {
  return (
    <div className="grid grid-cols-2">
      <section className="formContainer">
        <Form />
      </section>
      ;
      <section className="cvTemplateContainer">
        <CVContainer />
      </section>
    </div>
  );
}
