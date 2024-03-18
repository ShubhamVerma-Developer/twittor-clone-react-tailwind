import React from "react";
import { CiHome } from "react-icons/ci";

function LeftSidebar() {
  return (
    <div>
      <div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?w=826&t=st=1710773910~exp=1710774510~hmac=e2af4197d0fd55a28a2af4b9b2e658db38a408ece8f6d8f1b868a8af2305a58a"
            width={24}
            alt="twitter logo"
          />
        </div>
        <div className="my-4">
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <CiHome size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Home</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <CiHome size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Home</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <CiHome size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Home</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <CiHome size="24px" />
            </div>
            <h1 className="font-bold text-lg ml-2">Home</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
