import axios from "axios";

function getApiBaseUrl(): string {
  if (typeof window === "undefined") {
    return "http://localhost:8000/api";
  }

  return `http://${window.location.hostname}:8000/api`;
}

export const api = axios.create({
  baseURL: getApiBaseUrl(),
  withCredentials: true,
});

function getCookie(name: string): string | null {
  if (typeof document === "undefined") {
    return null;
  }

  const cookies = document.cookie.split("; ");

  const cookiesItem = cookies.find((item) =>
    item.startsWith(`${name}=`),
  );

  if (!cookiesItem) {
    return null;
  }

  return decodeURIComponent(
    cookiesItem.substring(name.length + 1),
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