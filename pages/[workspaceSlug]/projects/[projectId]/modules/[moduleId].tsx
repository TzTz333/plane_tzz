import React, { useState } from "react";

import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import useSWR, { mutate } from "swr";

// types
import { IModule, UserAuth } from "types";

// fetch-keys
import {
  MODULE_DETAILS,
  MODULE_ISSUES,
  MODULE_LIST,
  PROJECT_ISSUES_LIST,
} from "constants/fetch-keys";

const SingleModule: React.FC<UserAuth> = (props) => {

  return (
    <div>
      <h1>Single Module</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {

  return {
    props: {
      
    },
  };
};

export default SingleModule;
