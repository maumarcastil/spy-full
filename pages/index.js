import Header from "components/Header";
import React, { useState, useEffect } from "react";
import { recoverySignIn } from "firebase/client";

export default function Home() {
  //el usuario
  //undefined = indefinido
  //false = no hay
  //true = hay usuario
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    recoverySignIn(setUser);
  }, []);

  return (
    <>
      <Header user={user} />
      <div className="container">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non inventore
          harum, molestiae iure ea quia, aliquam cupiditate mollitia possimus
          saepe laudantium sed magni provident veritatis adipisci blanditiis,
          quas natus perspiciatis? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Sequi consectetur dolore corrupti dicta, et quis
          deleniti dignissimos repellendus. Alias necessitatibus eum et
          praesentium officia distinctio ipsa eaque iusto rerum harum?Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatum
          omnis accusantium, illo repudiandae ab, dolorum quos fugit reiciendis
          nam perferendis voluptatem suscipit vel, vitae magni. Officia, vero?
          Dolor, porro.
        </p>

        <h3>Price</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          reiciendis ipsam sed, eum reprehenderit perspiciatis? Quaerat, natus.
          Minima, quisquam! Dolores repellat perferendis suscipit quos similique
          cum reiciendis repellendus eos officia?
        </p>
      </div>

      <style jsx>{`
        .container {
          background-color: #fff;
          height: 100vh;
        }
      `}</style>
    </>
  );
}
