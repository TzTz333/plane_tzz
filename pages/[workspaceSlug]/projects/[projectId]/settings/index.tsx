import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import useSWR, { mutate } from "swr";


import { IProject, IWorkspace, UserAuth } from "types";


// types
import type { NextPage, GetServerSidePropsContext } from "next";
// fetch-keys
import { PROJECTS_LIST, PROJECT_DETAILS } from "constants/fetch-keys";


const defaultValues: Partial<IProject> = {
  name: "",
  description: "",
  identifier: "",
  network: 0,
};

const GeneralSettings: NextPage<UserAuth> = ({ isMember, isOwner, isViewer, isGuest }) => {
 
  return (
    <div>
      <h1>General Settings</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      
    },
  };
};

export default GeneralSettings;
