import { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import useSWR from "swr";

// types
import type { GetServerSideProps, NextPage } from "next";
import { UserAuth } from "types";
// fetch-keys
import { WORKSPACE_DETAILS, WORKSPACE_INVITATIONS, WORKSPACE_MEMBERS } from "constants/fetch-keys";


const MembersSettings: NextPage<UserAuth> = (props) => {

  return (
    <div>
      <h1>Members Settings</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  return {
    props: {
      
    },
  };
};

export default MembersSettings;
