import { Cookies } from "react-cookie";
const cookies = new Cookies();

export default class AuthCookies {
  SetAccessToken = (accessToken) => {
    return cookies.set("access_token", accessToken, {
      path: "/",
      expires: new Date(new Date().getTime() + 28 * 60 * 1000), // 28 minutes
    });
  };

  SetRefreshToken = (refreshToken) => {
    return cookies.set("refresh_token", refreshToken, {
      path: "/",
      expires: new Date(new Date().getTime() + 10000 * 60 * 1000), // Approximately 6.94 days
    });
  };

  GetAccessToken = () => {
    return cookies.get("access_token", { path: "/" });
  };

  GetRefreshToken = () => {
    return cookies.get("refresh_token", { path: "/" });
  };

  ClearAll = () => {
    cookies.remove("access_token", { path: "/" });
    cookies.remove("refresh_token", { path: "/" });
  };
}
