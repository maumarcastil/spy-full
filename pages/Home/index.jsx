import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import HeaderDashboard from "components/HeaderDashboard";
import ListDevices from "components/ListDevices";
import Spinner from "components/Spinner";

import { recoverySignIn } from "firebase/client";

const Home = () => {
  const [user, setUser] = useState(undefined);
  const [spinner, setSpinner] = useState(true);
  const router = useRouter();

  useEffect(() => {
    recoverySignIn(setUser);
    /* setTimeout(() => {
      setSpinner(false);
    }, 2000); */
  }, []);

  useEffect(() => {
    user && setSpinner(false);
    user === false && router.replace("/");
  }, [user, spinner]);

  return (
    <>
      {spinner ? <Spinner /> : null}

      <HeaderDashboard setUser={setUser} />

      <ListDevices />

      <style jsx>{``}</style>
    </>
  );
};

export default Home;
