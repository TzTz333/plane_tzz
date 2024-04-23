import React, { useState } from "react";

import { useRouter } from "next/router";

import useSWR from "swr";


// types
import { IProject, UserAuth } from "types";
import type { NextPageContext, NextPage } from "next";
// fetch-keys
import { PROJECT_DETAILS, WORKSPACE_INTEGRATIONS } from "constants/fetch-keys";


const ProjectIntegrations: NextPage<UserAuth> = (props) => {
  
  return (
    <div>
      <h1>Project Integrations</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {

  return {
    props: {
     
    },
  };
};

export default ProjectIntegrations;
