import React, { useContext, useState } from "react";
import { VarContext } from "../contexts/VarContextProvider";

const VariableForms = () => {
  const {
    value,
    userName,
    setUserName,
    company,
    setCompany,
    email,
    setEmail,
    date,
    setDate,
    subscriptionPlan,
    setSubscriptionPlan,
    accountBalance,
    setAccountBalance,
    supportPhone,
    setSupportPhone,
    websiteUrl,
    setWebsiteUrl,
    handleChange,
  } = useContext(VarContext);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting values:", {
        userName,
        company,
        email,
        date,
        subscriptionPlan,
        accountBalance,
        supportPhone,
        websiteUrl,
      });
    setSubmitted(true);
  };

  return (
    <>
      {value != null && (
        <div className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
          {!submitted && <h2 className="text-2xl font-semibold text-center mb-4">
            Edit Variables
          </h2>}

          {submitted ? (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-green-600">
                Form Submitted Successfully!
              </h2>
              <p className="mt-4 text-gray-700">Here are the updated values:</p>
              <div className="text-left mt-4 space-y-2">
                {userName && (
                  <p>
                    <strong>User Name:</strong> {userName}
                  </p>
                )}
                {company && (
                  <p>
                    <strong>Company:</strong> {company}
                  </p>
                )}
                {email && (
                  <p>
                    <strong>Email:</strong> {email}
                  </p>
                )}
                {date && (
                  <p>
                    <strong>Date:</strong> {date}
                  </p>
                )}
                {subscriptionPlan && (
                  <p>
                    <strong>Subscription Plan:</strong> {subscriptionPlan}
                  </p>
                )}
                {accountBalance && (
                  <p>
                    <strong>Account Balance:</strong> {accountBalance}
                  </p>
                )}
                {supportPhone && (
                  <p>
                    <strong>Support Phone:</strong> {supportPhone}
                  </p>
                )}
                {websiteUrl && (
                  <p>
                    <strong>Website URL:</strong> {websiteUrl}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {userName !== null && (
                  <div className="flex">
                    <label className="text-gray-700 font-medium">
                      User Name:
                    </label>
                    <input
                      type="text"
                      value={userName}
                      onChange={handleChange(setUserName)}
                      className="input-field"
                    />
                  </div>
                )}
                {company !== null && (
                  <div className="flex">
                    <label className="text-gray-700 font-medium">
                      Company:
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={handleChange(setCompany)}
                      className="input-field"
                    />
                  </div>
                )}
                {email !== null && (
                  <div className="flex">
                    <label className="text-gray-700 font-medium">Email:</label>
                    <input
                      type="email"
                      value={email}
                      onChange={handleChange(setEmail)}
                      className="input-field"
                    />
                  </div>
                )}
                {date !== null && (
                  <div className="flex">
                    <label className="text-gray-700 font-medium">Date:</label>
                    <input
                      type="date"
                      value={date}
                      onChange={handleChange(setDate)}
                      className="input-field"
                    />
                  </div>
                )}
                {subscriptionPlan !== null && (
                  <div className="flex">
                    <label className="text-gray-700 font-medium">
                      Subscription Plan:
                    </label>
                    <input
                      type="text"
                      value={subscriptionPlan}
                      onChange={handleChange(setSubscriptionPlan)}
                      className="input-field"
                    />
                  </div>
                )}
                {accountBalance !== null && (
                  <div className="flex">
                    <label className="text-gray-700 font-medium">
                      Account Balance:
                    </label>
                    <input
                      type="number"
                      value={accountBalance}
                      onChange={handleChange(setAccountBalance)}
                      className="input-field"
                    />
                  </div>
                )}
                {supportPhone !== null && (
                  <div className="flex">
                    <label className="text-gray-700 font-medium">
                      Support Phone:
                    </label>
                    <input
                      type="tel"
                      value={supportPhone}
                      onChange={handleChange(setSupportPhone)}
                      className="input-field"
                    />
                  </div>
                )}
                {websiteUrl !== null && (
                  <div className="flex">
                    <label className="text-gray-700 font-medium">
                      Website URL:
                    </label>
                    <input
                      type="url"
                      value={websiteUrl}
                      onChange={handleChange(setWebsiteUrl)}
                      className="input-field"
                    />
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default VariableForms;
