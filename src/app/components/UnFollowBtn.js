"use client";
import React from 'react';
import { useSession, signOut } from 'next-auth/react';

const UnFollowBtn = () => {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="flex flex-col items-center gap-1 overflow-x-hidden">
      <div className="flex items-center gap-2">
        <img
          src={session.user.image || '/default-avatar.png'}
          alt="User Image"
          className="w-4 h-4 rounded-full"
        />
        <span style={{ fontSize: '13px' }}>{session.user.name}</span>
      </div>
      
      <button
      className="bg-red-600 px-3 py-1 text-xs rounded-full text-white ml-3"
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        Sign Out
      </button>
    </div>
  );
};

export default UnFollowBtn;
