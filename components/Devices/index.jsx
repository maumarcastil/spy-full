import React, { useState } from "react";

const Device = ({ restaurante }) => {
  const { logo, productos } = restaurante;
  let brand = false;
  let dateAdd = false;

  const handleClick = () => {
    changeRestaurante(menu);
    guardarModal(!modal);
  };

  return (
    <>
      <article
        onClick={handleClick}
        className="py-2 flex space-x-4 rounded-lg hover:bg-yellow-400 transition ease-out duration-1000"
      >
        <img
          src={logo}
          alt=""
          className="flex-none w-24 h-24 rounded-lg object-cover lg:w-32 lg:h-28"
        />

        <div className="w-3/4 min-w-0 relative flex items-start lg:pr-0 xl:pr-20 ">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-black mb-0.5 capitalize">
              {brand || "Mi 9T PRO"}
            </h2>
            <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
              <div>
                <dt className="sr-only">Brans</dt>
                <dd>
                  <abbr title={name}>{name || "XIAOMI"}</abbr>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Model</dt>
                <dd> {brand || "Mi 9T PRO"}</dd>
              </div>
              <div className="flex-none w-full mt-0.5 font-normal">
                <dt className="inline">Added {dateAdd || "06/03/2000"}</dt>{" "}
                <dd className="inline text-black capitalize">{name}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="flex flex-row-reverse w-1/4">
          <div className="flex top-0 right-0 rounded bg-amber-50 text-amber-900 px-2 py-0.5 sm:flex xl:flex items-center space-x-1">
            <dt>
              <span className="sr-only">Rating</span>
              <i className="fas fa-chevron-right"></i>
            </dt>
          </div>
        </div>
      </article>
    </>
  );
};

export default Device;
