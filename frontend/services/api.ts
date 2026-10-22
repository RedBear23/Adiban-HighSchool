import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

function getCookie(name: string): string | null {
  if (typeof document === "undefined") {
    return null;
  }

  const cookies = document.cookie.split("; ");

  const cookie = cookies.find((item) =>
    item.startsWith(`${name}=`),
  );

  if (!cookie) {
    return null;
  }

  return decodeURIComponent(
    cookie.substring(name.length + 1),
  );
}

api.interceptors.request.use((config) => {
  const csrfToken = getCookie("csrftoken");

  if (csrfToken) {
    config.headers.set(
      "X-CSRFToken",
      csrfToken,
    );
  }

  return config;
});