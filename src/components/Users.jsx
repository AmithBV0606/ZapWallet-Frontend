import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filterAtom } from "../store/atoms";
import { filterSelector } from "../store/selectors";
import Button from "./Button";

function Users() {
  // Atoms
  let setFilter = useSetRecoilState(filterAtom);

  //   Selectors
  let filterResult = useRecoilValue(filterSelector);

  // Local input state
  const [localFilter, setLocalFilter] = useState("");

  // Debounce logic: Update Recoil state only after a delay
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setFilter(localFilter); // Update filterAtom after delay
    }, 1000);

    return () => clearTimeout(delayDebounce); // Cleanup on unmount
  }, [localFilter, setFilter]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>

      <div className="my-2">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
          onChange={(e) => setLocalFilter(e.target.value)}
        />
      </div>

      {filterResult.length > 0 ? (
        <div>
          {filterResult.map((user) => {
            return (
              <div
                key={user._id}
                className="shadow-lg border-2 rounded-lg p-2 mt-4"
              >
                <User user={user} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-red-500 font-bold mt-4">No such user exists!</div>
      )}
    </>
  );
}

const User = ({ user }) => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful mt-auto">
        <Button label={"Send Money"} />
      </div>
    </div>
  );
};

export default Users;