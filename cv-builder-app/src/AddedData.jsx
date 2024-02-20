import React from "react";

export default function AddedData() {
  return (
    <div className="border-b-2 mb-2">
      <section className="AddedData p-4 flex gap-4">
        <div>
          <p className="duration">11.2020 - 03.2023</p>
          <h2 className="course">Masters in Graphic Design</h2>
          <p className="institution">Warsaw University</p>
        </div>
        <button>Del</button>
      </section>
    </div>
  );
}
