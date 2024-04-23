import React from "react";

import { useRouter } from "next/router";

import useSWR, { mutate } from "swr";


// types
import { IProject, UserAuth } from "types";
import type { NextPage, GetServerSidePropsContext } from "next";
// fetch-keys
import { PROJECTS_LIST, PROJECT_DETAILS } from "constants/fetch-keys";

const FeaturesSettings: NextPage<UserAuth> = (props) => {


  return (
    <div>
      <h1>Features Settings</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {


  return {
    props: {

    },
  };
};

export default FeaturesSettings;
