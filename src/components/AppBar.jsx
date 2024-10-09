import React from "react";
import { useRecoilValue } from "recoil";
import { searchMe } from "../store/selectors";

function AppBar() {
    // Selector
    const myAccount = useRecoilValue(searchMe);

  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">ZapWallet App</div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">Hello, {myAccount.firstName}</div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">{myAccount.firstName[0].toUpperCase()}</div>
        </div>
      </div>
    </div>
  );
}

export default AppBar;