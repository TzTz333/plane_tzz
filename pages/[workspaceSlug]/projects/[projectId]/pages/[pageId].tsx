import React, { useEffect, useRef, useState } from "react";

import { useRouter } from "next/router";

import useSWR, { mutate } from "swr";

// types
import type { NextPage, GetServerSidePropsContext } from "next";
import { IIssueLabels, IPage, IPageBlock, UserAuth } from "types";
// fetch-keys
import {
  PAGE_BLOCKS_LIST,
  PAGE_DETAILS,
  PROJECT_DETAILS,
  PROJECT_ISSUE_LABELS,
} from "constants/fetch-keys";

const SinglePage: NextPage<UserAuth> = (props) => {
 

  return (
    <div>
      <h1>Single Page</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  
  return {
    props: {

    },
  };
};

export default SinglePage;
