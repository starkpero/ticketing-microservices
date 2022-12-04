import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // We are on the server
    return axios.create({
      baseURL:
        "http://ingress-nginx.ingress-nginx.svc.cluster.local/api/users/currentuser",
      headers: req.headers,
    });
  } else {
    // We are on the browser
    return axios.create({
      baseURL: "",
    });
  }
};
