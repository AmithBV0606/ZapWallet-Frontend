import React, { useEffect } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { emailAtom, passwordAtom, signinApiCallAtom } from "../store/atoms";
import { signInSelector } from "../store/selectors";

function Signin() {
  // Atoms
  const setEmail = useSetRecoilState(emailAtom);
  const setPassword = useSetRecoilState(passwordAtom);
  const setSigninApiCall = useSetRecoilState(signinApiCallAtom);

  // Selectors
  const signinResult = useRecoilValue(signInSelector);

  useEffect(() => {
    if (signinResult) {
      localStorage.setItem("token", signinResult.token);
    }
  }, [signinResult]);
  
  const handleSigninClick = () => {
    setSigninApiCall(true);
  };

  return (
    <div className="bg-gray-900 opacity-90 h-screen flex justify-center">
      <div className="flex items-center justify-center">
        <div className="rounded-lg bg-white w-80 sm:w-96 text-center p-2 h-max px-4">
          {/* Heading */}
          <Heading label={"Sign in"} />

          {/* Sub-Heading */}
          <SubHeading label={"Enter your credentials to access your account"} />

          {/* Input boxes */}
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
              <Button 
                label={"Sign in"} 
                onClick={handleSigninClick} 
              />
          </div>

          {/* Bottom Text */}
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;