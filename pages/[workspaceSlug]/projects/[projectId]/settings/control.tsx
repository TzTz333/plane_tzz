import React, { useEffect } from "react";

import { useRouter } from "next/router";
import Image from "next/image";

import useSWR, { mutate } from "swr";

// types
import { IProject, IWorkspace } from "types";
import type { NextPage, GetServerSidePropsContext } from "next";
// fetch-keys
import { PROJECTS_LIST, PROJECT_DETAILS, PROJECT_MEMBERS } from "constants/fetch-keys";

type TControlSettingsProps = {
  isMember: boolean;
  isOwner: boolean;
  isViewer: boolean;
  isGuest: boolean;
};

const defaultValues: Partial<IProject> = {
  project_lead: null,
  default_assignee: null,
};

const ControlSettings: NextPage<TControlSettingsProps> = (props) => {
 
  return (
    <div>
      <h1>Control Settings</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  

  return {
    props: {

    },
  };
};

export default ControlSettings;
