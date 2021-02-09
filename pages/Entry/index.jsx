import Head from "next/head";
import FormLogin from "components/FormLogin";

const Entry = () => {
  return (
    <>
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

export default Entry;
