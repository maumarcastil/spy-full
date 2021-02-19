import React, { useState } from "react";
import Device from "components/Devices";

const ListDevices = () => {
  const data = [
    {
      id: "1",
      name: "EatFit",
      logo:
        "https://www.creativefabrica.com/wp-content/uploads/2020/04/25/Vintage-restaurant-logo-and-badge-logo-Graphics-3951682-1-1-580x348.jpg",
      productos: [
        {
          name: "Hamburguesa sencilla",
          price: 20000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Hamburguesa doble",
          price: 15000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Hamburguesa trifásica",
          price: 24000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
      ],
    },
    {
      id: "2",
      name: "Cucayo",
      logo:
        "https://i.pinimg.com/736x/f6/0a/bb/f60abb167e90097da13594a963c9a715.jpg",
      productos: [
        {
          name: "Producto Prueba 1",
          price: 20000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 2",
          price: 15000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 3",
          price: 24000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
      ],
    },
    {
      id: "3",
      name: "Sharmala",
      logo:
        "https://www.sosfactory.com/wp-content/uploads/2016/12/mr-bolat-logo.png",
      productos: [
        {
          name: "Producto Prueba 1",
          price: 20000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 2",
          price: 15000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 3",
          price: 24000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
      ],
    },
    {
      id: "4",
      name: "KFC",
      logo:
        "https://www.vectorbranddesigns.com/wp-content/uploads/2020/02/UPAMBE-DISHES-LOGO4-1024x870.jpg",
      productos: [
        {
          name: "Producto Prueba 1",
          price: 20000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 2",
          price: 15000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 3",
          price: 24000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
      ],
    },
    {
      id: "5",
      name: "Mr Panda",
      logo:
        "https://s3.amazonaws.com/thumbnails.venngage.com/template/b400a596-e7ce-431f-a2dd-97d299e43093.png",
      productos: [
        {
          name: "Producto Prueba 1",
          price: 20000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 2",
          price: 15000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 3",
          price: 24000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
      ],
    },
    {
      id: "6",
      name: "Long hang",
      logo:
        "https://images.freecreatives.com/wp-content/uploads/2016/03/Restaurant-logos.jpg",
      productos: [
        {
          name: "Producto Prueba 1",
          price: 20000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 2",
          price: 15000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 3",
          price: 24000,
          quantity: 90,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
      ],
    },
    {
      id: "1",
      name: "EatFit",
      logo:
        "https://www.creativefabrica.com/wp-content/uploads/2020/04/25/Vintage-restaurant-logo-and-badge-logo-Graphics-3951682-1-1-580x348.jpg",
      productos: [
        {
          name: "Hamburguesa sencilla",
          price: 20000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Hamburguesa doble",
          price: 15000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Hamburguesa trifásica",
          price: 24000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
      ],
    },
    {
      id: "2",
      name: "Cucayo",
      logo:
        "https://i.pinimg.com/736x/f6/0a/bb/f60abb167e90097da13594a963c9a715.jpg",
      productos: [
        {
          name: "Producto Prueba 1",
          price: 20000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 2",
          price: 15000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 3",
          price: 24000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
      ],
    },
    {
      id: "3",
      name: "Sharmala",
      logo:
        "https://www.sosfactory.com/wp-content/uploads/2016/12/mr-bolat-logo.png",
      productos: [
        {
          name: "Producto Prueba 1",
          price: 20000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 2",
          price: 15000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 3",
          price: 24000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
      ],
    },
    {
      id: "4",
      name: "KFC",
      logo:
        "https://www.vectorbranddesigns.com/wp-content/uploads/2020/02/UPAMBE-DISHES-LOGO4-1024x870.jpg",
      productos: [
        {
          name: "Producto Prueba 1",
          price: 20000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 2",
          price: 15000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 3",
          price: 24000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
      ],
    },
    {
      id: "5",
      name: "Mr Panda",
      logo:
        "https://s3.amazonaws.com/thumbnails.venngage.com/template/b400a596-e7ce-431f-a2dd-97d299e43093.png",
      productos: [
        {
          name: "Producto Prueba 1",
          price: 20000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 2",
          price: 15000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 3",
          price: 24000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
      ],
    },
    {
      id: "6",
      name: "Long hang",
      logo:
        "https://images.freecreatives.com/wp-content/uploads/2016/03/Restaurant-logos.jpg",
      productos: [
        {
          name: "Producto Prueba 1",
          price: 20000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 2",
          price: 15000,
          quantity: 20,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
        {
          name: "Producto Prueba 3",
          price: 24000,
          quantity: 90,
          image:
            "https://www.clikisalud.net/wp-content/uploads/2015/01/comida-rapida-D.jpg",
        },
      ],
    },
  ];

  const [restaurantes, guardarRestaurantes] = useState(data);

  return (
    <>
      <main>
        <section>
          <div className="child-content">
            <h2>Devices</h2>
            <hr />
            <div className="content-devices">
              {restaurantes.map((restaurante) => (
                <Device key={restaurante.id} restaurante={restaurante} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        main {
          margin-top: 1rem;
          width: 100%;
          display: flex;
          justify-content: center;
          height: 90vh;
        }

        section {
          width: 100%;
        }

        .content-devices {
          height: 100%;
          overflow-y: scroll;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        .content-devices::-webkit-scrollbar {
          display: none;
        }

        .child-content {
          display: block;
          overflow: hidden;
          height: 100%;
          padding: 0.5rem;
          margin-bottom: 1rem;
          border-radius: 0.5rem;
          background-color: #fff;
          --tw-shadow: 10px 10px 10px -1px rgba(0, 0, 0, 0.05),
            -10px 10px 10px -1px rgba(0, 0, 0, 0.05);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }

        @media (min-width: 640px) {
          section {
            width: 90%;
          }
        }

        @media (min-width: 768px) {
          section {
            width: 80%;
          }
        }

        @media (min-width: 1024px) {
          section {
            width: 70%;
          }
        }
        @media (min-width: 1280px) {
          section {
            width: 60%;
          }
        }

        @media (min-width: 1536px) {
          section {
            width: 30%;
          }
        }
      `}</style>
    </>
  );
};

export default ListDevices;
