"use client";

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const FollowBtn = () => {
  const { data: session, status } = useSession();

  return (
    <span className="bg-green-700 rounded-full inline-flex items-center justify-center">
      {status === "authenticated" ? (
        <button
          className="px-4 py-2 text-sm md:text-base"
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          Sign Out
        </button>
      ) : (
        <button
          className="px-4 py-2 text-sm md:text-base"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      )}
    </span>
  );
};

export default FollowBtn;
