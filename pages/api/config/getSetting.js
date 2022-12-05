/* eslint-disable consistent-return */
import cookie from "cookie";
import { GetDataSettings } from "../../../helper/Ssr/Setting";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  const resData = await GetDataSettings();
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("configMessage", JSON.stringify(resData.data.data), {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: process.env.NODE_ENV !== "development",
      maxAge: 1000 * 60 * 60 * 24, // 1 day,
      sameSite: "lax",
      path: "/",
    })
  );

  res.status(200);
  res.json({
    message: "success",
    data: { configMessage: resData.data },
  });
}

// export const config = {
//   api: {
//     bodyParser: true,
//   },
// };
