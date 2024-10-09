import { selector } from "recoil";
import {
  emailAtom,
  filterAtom,
  firstNameAtom,
  lastNameAtom,
  passwordAtom,
  signinApiCallAtom,
  signupApiCallAtom,
} from "./atoms";
import axios from "axios";

export const signUpSelector = selector({
  key: "signUpSelector",
  get: async ({ get }) => {
    const firstname = get(firstNameAtom);
    const lastname = get(lastNameAtom);
    const username = get(emailAtom);
    const password = get(passwordAtom);
    const signupApiCall = get(signupApiCallAtom);

    if (signupApiCall) {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        {
          username,
          firstname,
          lastname,
          password,
        }
      );
    //   localStorage.setItem("token", response.data.jwt);
      return response.data;
    }
  },
});

export const signInSelector = selector({
  key: "signInSelector",
  get: async ({ get }) => {
    const username = get(emailAtom);
    const password = get(passwordAtom);
    const signinApiCall = get(signinApiCallAtom);

    if (signinApiCall) {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        {
          username,
          password,
        }
      );
    //   localStorage.setItem("token", response.data.token);
      return response.data;
    }
  },
});

export const filterSelector = selector({
  key: "filterSelector",
  get: async ({ get }) => {
    const filter = get(filterAtom);
    const response = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`,{
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    if (response.data.users.length > 0) {
        return response.data.users;
    } else {
        return [];
    }
  },
});

export const searchMe = selector({
    key:"searchMe",
    get: async ({ get }) => {
        const response = await axios.get(`http://localhost:3000/api/v1/user/me`,{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        return response.data.userInfo;
    }
});

export const knowBalance = selector({
    key: "knowBalance",
    get: async ({ get }) => {
        const response = await axios.get(`http://localhost:3000/api/v1/account/balance`,{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        return response.data;
    }
});