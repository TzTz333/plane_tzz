import React, { useState } from "react";

import { useRouter } from "next/router";

import useSWR, { mutate } from "swr";
import { GetServerSidePropsContext } from "next";
// types
import { UserAuth } from "types";
// fetch-keys
import {
  CYCLE_ISSUES,
  CYCLE_LIST,
  PROJECT_DETAILS,
  CYCLE_DETAILS,
  PROJECT_ISSUES_LIST,
} from "constants/fetch-keys";

const SingleCycle: React.FC<UserAuth> = (props) => {
  

  return (
    <div>
      <h1>Single Cycle</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
        
    },
  };
};

export default SingleCycle;
