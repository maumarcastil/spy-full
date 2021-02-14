import React, { useState, useEffect } from "react";
import FormLogin from "components/FormLogin";
import Spinner from "components/Spinner/index";

const SignIn = () => {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2000);  
  }, []);
  return (
    <>
    {spinner ? <Spinner /> : null}
      <div className="content-center">
        <FormLogin />
      </div>

      <style jsx>{`
        .content-center {
          display: grid;
          place-items: center;
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default SignIn;
