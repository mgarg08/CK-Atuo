import React, { useState } from "react";

function SignupPage() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
//   const [password, setPassword] = useState("");
  //   const [showPassword, setShowPassword] = useState(false);
  const [days, setDays] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const[gender, setGender] = useState("");
  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFirstNameChange = (e) => {
    setFirst(e.target.value);
    setErrorMessage("");
  };

  const handleLastNameChange = (e) => {
    setLast(e.target.value);
    setErrorMessage("");
  };
  const handleChangeDate = (e) => {
    setDays(e.target.value);
    setErrorMessage("");
  };
  const handleMonthChnage = (e) => {
    setMonth(e.target.value);
    setErrorMessage("");
  };
  const handleYearChange = (e) => {
    setYear(e.target.value);
    setErrorMessage("");
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setErrorMessage("");
  };
  console.log(first);
  console.log(last);
  console.log(days);
  console.log(month);
  console.log(year, gender);

  const handleNextStep = () => {
    if (step === 1 && !first) {
      setErrorMessage("Please enter your first name to continue.");
    } else if (step === 1 && !last) {
      setErrorMessage("Please enter your last name to continue.");
    } else if (step === 2 && !days) {
      setErrorMessage("Please enter your birth date  continue.");
    } else if (step === 2 && !month) {
      setErrorMessage("Please select your birth month  continue.");
    } else if (step === 2 && !year) {
      setErrorMessage("Please enter your birth year continue.");
    } else {
      setErrorMessage("");
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    setErrorMessage("");
    setStep(step - 1);
  };
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const Genders=["Male","Female","Rather not to say","Customized"]
  return (
      <div className="signup-section-wrapper">
        {step === 1 && (
          <div className="signup-section">
            <div className="signin-wrapper">
              <div className="signin">
                <h5>Create Your Google Account</h5>
                <p>Enter your name</p>
              </div>
              <div className="input-fields">
                <input
                  type="text"
                  value={first}
                  onChange={handleFirstNameChange}
                  placeholder="First Name"
                  required
                />
                {errorMessage && (
                  <p className="error-message">{errorMessage}</p>
                )}
                <input
                  type="text"
                  value={last}
                  onChange={handleLastNameChange}
                  placeholder="Surname"
                  required
                />
                {errorMessage && (
                  <p className="error-message">{errorMessage}</p>
                )}
                <div className="buttons">
                  <button type="button" onClick={handlePreviousStep}>
                    Previous
                  </button>
                  <button type="button" onClick={handleNextStep}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="signup-section">
            <div className="signin-wrapper">
              <div className="signin">
                <h5>Basic Information</h5>
                <p>Enter your birthday and gender</p>
              </div>
              <div className="input-fields">
                <input
                  type="number"
                  value={days}
                  onChange={handleChangeDate}
                  placeholder="Days"
                />
                <div>
                  <label For="month" className="select-month"></label>
                  <select id="month" value={month} onChange={handleMonthChnage}>
                    <option value="" disabled></option>
                    {Months.map((month, index) => (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="number"
                  value={year}
                  onChange={handleYearChange}
                  placeholder="Year"
                />
                    <div>
                  <label For="gender" className="select-gender"></label>
                  <select id="gender" value={gender} onChange={handleGenderChange}>
                    <option value="" disabled></option>
                    {Genders.map((gender, index) => (
                      <option key={index} value={gender}>
                        {gender}
                      </option>
                    ))}
                  </select>
                </div>
                {errorMessage && (
                  <p className="error-message">{errorMessage}</p>
                )}
                <div className="buttons">
                  <button type="button" onClick={handlePreviousStep}>
                    Previous
                  </button>
                  <button type="button" onClick={handleNextStep}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}

export default SignupPage;
