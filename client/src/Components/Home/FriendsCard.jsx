import React, { useState } from "react";

function FriendsCard({ dp, Fname, Lname, friend, setFriend1, profile, setFriend2, url }) {
  function handleFriend1() {
    //friend=true

    setFriend1()
  }
  function handleFriend2() {
    //friend=false

    setFriend2()
  }

  return (
    <div className="relative justify-between border-[1px] border-slate-600 rounded-lg hover:bg-blue-400 dark:hover:bg-blue-500 cursor-pointer transition-[background-color] p-4 items-center bg-white dark:bg-slate-800 flex gap-4">
      <div className="flex items-center gap-4">
        {dp ? (
          <div className="rounded-full h-12 aspect-square border-black dark:border-slate-300 border-[1px]">
            <img src={dp} className="object-cover h-full w-full" alt="Profile" />
          </div>
        ) : (
          <div className="rounded-full h-12 aspect-square border-black bg-slate-500 dark:border-slate-300 border-[1px]"></div>
        )}
        <a href={url} className="text-slate-800 cursor-pointer dark:text-slate-300 ">{Fname}</a>
      </div>

      <div className="flex items-center gap-4">
        {!profile && (
          !friend ? (
            <div onClick={handleFriend1} className="rounded bg-green-500 py-2 px-3 flex w-fit">Add Friend</div>
          ) : (
            <div onClick={handleFriend2} className="rounded bg-red-500 py-2 px-3 flex w-fit">Remove Friend</div>
          ))}
        <div className="cursor-pointer text-slate-800 dark:text-slate-100">
          <span className="material-symbols-outlined">more_vert</span>
        </div>
      </div>
    </div>
  );
}

export default FriendsCard;
