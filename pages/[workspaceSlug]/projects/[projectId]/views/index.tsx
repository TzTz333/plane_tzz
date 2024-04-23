import React, { useState } from "react";

import { useRouter } from "next/router";

import useSWR from "swr";

// image
import emptyView from "public/empty-state/empty-view.svg";
// fetching keys
import { PROJECT_DETAILS, VIEWS_LIST } from "constants/fetch-keys";

// types
import { IView, UserAuth } from "types";
import type { NextPage, GetServerSidePropsContext } from "next";

const ProjectViews: NextPage<UserAuth> = (props) => {
  
  return (
    <div>
      <h1>Project Views</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  

  return {
    props: {

    },
  };
};

export default ProjectViews;
