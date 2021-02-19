import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import FormRegister from "components/FormRegister";
import Spinner from "components/Spinner/index";
import { recoverySignIn } from "firebase/client";

const Register = () => {
  const [user, setUser] = useState(undefined);
  const [spinner, setSpinner] = useState(true);
  const router = useRouter();

  useEffect(() => {
    recoverySignIn(setUser);
    setTimeout(() => {
      setSpinner(false);
    }, 2000);
  }, []);

  useEffect(() => {
    user === false && setSpinner(false);
    user && router.replace("/Home");
  }, [user, spinner]);

  return (
    <>
      {spinner ? <Spinner /> : null}
      <div className="content-center">
        <FormRegister />
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

export default Register;
