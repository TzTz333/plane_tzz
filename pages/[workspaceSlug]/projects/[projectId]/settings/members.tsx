import { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import useSWR from "swr";

// types
import type { NextPage, GetServerSidePropsContext } from "next";
import { UserAuth } from "types";
// fetch-keys
import {
  PROJECT_DETAILS,
  PROJECT_INVITATIONS,
  PROJECT_MEMBERS,
  WORKSPACE_DETAILS,
} from "constants/fetch-keys";


const MembersSettings: NextPage<UserAuth> = ({ isMember, isOwner, isViewer, isGuest }) => {
  
  return (
    <div>
      <h1>Members Settings</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
 
  return {
    props: {

    },
  };
};

export default MembersSettings;
