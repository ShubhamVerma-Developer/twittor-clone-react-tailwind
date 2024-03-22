import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="w-[50%]">
      <div>
        <div className="'flex items-center py-2">
          <Link to="/" className="p-2 rounded-full bg-gray-100 cursor-pointer">
            <IoMdArrowBack size="24px" />
          </Link>
          <div className="ml-2">
            <h1 className="font-bold text-lg">Patel</h1>
            <p className="text-gray-5 text-sm">10 Post</p>
          </div>
        </div>
        <img
          src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360"
          alt=""
        />
      </div>
    </div>
  );
}

export default Profile;
