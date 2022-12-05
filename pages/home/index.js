import React from "react";

export default function HomePage() {
  const getConfigs = async () => {
    const res = await fetch("/api/config/getSetting", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    // return res;
  };
  //   const getCookiesConfigMessage = async () => {
  //     const res = await fetch("/api/config/getCookieConfig", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     return res;
  //   };

  return (
    <div>
      <button onClick={() => getConfigs()}>set data cookies</button>
      {/* <button>get data cookies</button> */}
    </div>
  );
}
