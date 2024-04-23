import React from "react";

import { useRouter } from "next/router";

import useSWR from "swr";

// types
import type { NextPage, GetServerSideProps } from "next";
import { UserAuth } from "types";
// fetch-keys
import { WORKSPACE_DETAILS, APP_INTEGRATIONS } from "constants/fetch-keys";

const WorkspaceIntegrations: NextPage<UserAuth> = (props) => {
  

  return (
    <div>
      <h1>Workspace Integrations</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  return {
    props: {
     
    },
  };
};

export default WorkspaceIntegrations;
