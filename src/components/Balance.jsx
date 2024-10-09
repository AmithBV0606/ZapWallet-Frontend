import React from "react";
import { useRecoilValue } from "recoil";
import { knowBalance } from "../store/selectors";

function Balance() {
    // Selector
    const balanceCheck = useRecoilValue(knowBalance);

  return (
    <div className="flex">
      <div className="font-bold text-lg">Your balance : </div>
      <div className="font-semibold ml-4 text-lg">Rs {balanceCheck.balance.toPrecision(6)}</div>
    </div>
  );
}

export default Balance;