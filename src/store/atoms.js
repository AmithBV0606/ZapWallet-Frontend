import { atom } from "recoil";

export const firstNameAtom = atom({
    key: "firstNameAtom",
    default: ""
});

export const lastNameAtom = atom({
    key: "lastNameAtom",
    default: ""
});

export const emailAtom = atom({
    key: "emailAtom",
    default: ""
});

export const passwordAtom = atom({
    key: "passwordAtom",
    default: ""
});

export const signupApiCallAtom = atom({
    key: "signupApiCallAtom",
    default: false
});

export const signinApiCallAtom = atom({
    key: "signinApiCallAtom",
    default: false
});

export const filterAtom = atom({
    key: "filterAtom",
    default: ""
});