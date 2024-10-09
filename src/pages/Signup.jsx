import React, { useEffect } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  emailAtom,
  firstNameAtom,
  lastNameAtom,
  passwordAtom,
  signupApiCallAtom,
} from "../store/atoms";
import { signUpSelector } from "../store/selectors";

function Signup() {
  // Atoms
  const setFirstName = useSetRecoilState(firstNameAtom);
  const setLastName = useSetRecoilState(lastNameAtom);
  const setEmail = useSetRecoilState(emailAtom);
  const setPassword = useSetRecoilState(passwordAtom);
  const setSignupApiCall = useSetRecoilState(signupApiCallAtom);

  // Selectors
  // Using the signUpSelector to trigger the API call and capture its return value
  const signupResult = useRecoilValue(signUpSelector);

  useEffect(() => {
    if (signupResult) {
      localStorage.setItem("token", signupResult.token);
      // Handle successful signup (e.g., redirect, display success message)
    }
  }, [signupResult]);

  const handleSignupClick = () => {
    setSignupApiCall(true);
  };

  return (
    <div className="bg-gray-900 opacity-90 h-screen flex justify-center">
      <div className="flex items-center justify-center">
        <div className="rounded-lg bg-white w-80 sm:w-96 text-center p-2 h-max px-4">
          {/* Heading */}
          <Heading label={"Sign up"} />

          {/* Sub-Heading */}
          <SubHeading label={"Enter your infromation to create an account"} />

          {/* Input boxes */}
          <InputBox
            label={"First Name"}
            placeholder={"Jhon"}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <InputBox
            label={"Last Name"}
            placeholder={"Doe"}
            onChange={(e) => setLastName(e.target.value)}
          />

          <InputBox
            label={"Email"}
            placeholder={"jhondoe@gmail.com"}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputBox
            label={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Button */}
          <div className="pt-4">
              <Button label={"Sign up"} onClick={handleSignupClick}/>
          </div>

          {/* Bottom Text */}
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;