import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    occupation: "Other",
    gender: "Female",
    languages: {
      HTML: true,
      CSS: true,
      Javascript: true,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        languages: {
          ...prev.languages,
          [name]: checked,
        },
      }));
    } else if (name === "gender") {
      setFormData((prev) => ({ ...prev, gender: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <>
    <div className="mt-20">
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded shadow-md space-y-4"
    >
      <div>
        <label className="block font-semibold mb-1">User Name</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Occupation</label>
        <select
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Student">Student</option>
          <option value="Employee">Employee</option>
          <option value="Designer">Designer</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1">Gender</label>
        <div className="space-y-1">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              className="mr-2"
            />
            Male
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
              className="mr-2"
            />
            Female
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
              className="mr-2"
            />
            Other
          </label>
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-1">Languages</label>
        <div className="space-y-1">
          {["HTML", "CSS", "Javascript"].map((lang) => (
            <label key={lang} className="flex items-center">
              <input
                type="checkbox"
                name={lang}
                checked={formData.languages[lang]}
                onChange={handleChange}
                className="mr-2"
              />
              {lang}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
    </div>
    </>
  );
};

export default UserForm;
