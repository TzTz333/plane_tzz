import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import useSWR, { mutate } from "swr";

// types
import type { IWorkspace, UserAuth } from "types";
import type { GetServerSideProps, NextPage } from "next";
// fetch-keys
import { WORKSPACE_DETAILS, USER_WORKSPACES } from "constants/fetch-keys";


const defaultValues: Partial<IWorkspace> = {
  name: "",
  url: "",
  company_size: null,
  logo: null,
};

const WorkspaceSettings: NextPage<UserAuth> = (props) => {
 
  return (
    <div>
      <h1>Workspace Settings</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  return {
    props: {
     
    },
  };
};

export default WorkspaceSettings;
