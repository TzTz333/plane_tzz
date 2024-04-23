import { useState } from "react";

import { useRouter } from "next/router";
import type { GetServerSidePropsContext, NextPage } from "next";
import dynamic from "next/dynamic";

import useSWR, { mutate } from "swr";

// types
import { IPage, TPageViewProps, UserAuth } from "types";
// fetch-keys
import {
  ALL_PAGES_LIST,
  MY_PAGES_LIST,
  PROJECT_DETAILS,
  RECENT_PAGES_LIST,
} from "constants/fetch-keys";

const ProjectPages: NextPage<UserAuth> = (props) => {
  
  return (
    <div>
      <h1>Project Pages</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  

  return {
    props: {

    },
  };
};

export default ProjectPages;
