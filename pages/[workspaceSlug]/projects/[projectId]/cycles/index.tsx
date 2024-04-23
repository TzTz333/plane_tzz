import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import useSWR from "swr";

// icons
// types
import { SelectCycleType, UserAuth } from "types";
import type { NextPage, GetServerSidePropsContext } from "next";
// fetching keys
import {
  CYCLE_CURRENT_AND_UPCOMING_LIST,
  CYCLE_DRAFT_LIST,
  PROJECT_DETAILS,
} from "constants/fetch-keys";


const ProjectCycles: NextPage<UserAuth> = (props) => {
  

  return (
    <div>
      <h1>Project Cycles</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  
  return {
    props: {
        
    },
  };
};

export default ProjectCycles;
