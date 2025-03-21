import React, { createContext, useEffect, useState } from "react";

export const VarContext = createContext();

const VarContextProvider = ({ children }) => {
  const [value, setValue] = useState(null);
  const [userName, setUserName] = useState(null);
  const [company, setCompany] = useState(null);
  const [email, setEmail] = useState(null);
  const [date, setDate] = useState(null);
  const [subscriptionPlan, setSubscriptionPlan] = useState(null);
  const [accountBalance, setAccountBalance] = useState(null);
  const [supportPhone, setSupportPhone] = useState(null);
  const [websiteUrl, setWebsiteUrl] = useState(null);

  useEffect(() => {
    if (value === "user_name") {
      setUserName(value);
    } else if (value === "company") {
      setCompany(value);
    } else if (value === "email") {
      setEmail(value);
    } else if (value === "date") {
      setDate(value);
    } else if (value === "subscription_plan") {
      setSubscriptionPlan(value);
    } else if (value === "account_balance") {
      setAccountBalance(value);
    } else if (value === "support_phone") {
      setSupportPhone(value);
    } else if (value === "website_url") {
      setWebsiteUrl(value);
    }
  }, [value]);

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };


  return (
    <VarContext.Provider
      value={{
        setValue,
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
      }}
    >
      {children}
    </VarContext.Provider>
  );
};

export default VarContextProvider;
