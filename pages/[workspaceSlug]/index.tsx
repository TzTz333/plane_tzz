import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import useSWR, { mutate } from "swr";

// services
import userService from "services/user.service";

// types
import type { NextPage, GetServerSidePropsContext } from "next";
// fetch-keys
import { USER_WORKSPACE_DASHBOARD } from "constants/fetch-keys";

const WorkspacePage: NextPage = () => {

  return (
    <div>
      <h1>Workspace Page</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {

  return {
    props: {},
  };
};

export default WorkspacePage;
