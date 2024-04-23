import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import useSWR from "swr";
// image
import emptyModule from "public/empty-state/empty-module.svg";

// icons
// types
import { IModule, SelectModuleType } from "types/modules";
import { UserAuth } from "types";
import type { NextPage, GetServerSidePropsContext } from "next";
// fetch-keys
import { MODULE_LIST, PROJECT_DETAILS } from "constants/fetch-keys";

const ProjectModules: NextPage<UserAuth> = (props) => {
  
  return (
    <div>
      <h1>Project Modules</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
 

  return {
    props: {

    },
  };
};

export default ProjectModules;
