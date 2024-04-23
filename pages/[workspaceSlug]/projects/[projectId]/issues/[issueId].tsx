import React, { useCallback, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import useSWR, { mutate } from "swr";

// types
import { IIssue, UserAuth } from "types";
import type { GetServerSidePropsContext, NextPage } from "next";
// fetch-keys
import { PROJECT_ISSUES_ACTIVITY, ISSUE_DETAILS, SUB_ISSUES } from "constants/fetch-keys";

const defaultValues = {
  name: "",
  description: "",
  description_html: "",
  state: "",
  assignees_list: [],
  priority: "low",
  blockers_list: [],
  blocked_list: [],
  target_date: new Date().toString(),
  issue_cycle: null,
  issue_module: null,
  labels_list: [],
};

const IssueDetailsPage: NextPage<UserAuth> = (props) => {
 
  return (
    <div>
      <h1>Issue Details</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  
  return {
    props: {
      
    },
  };
};

export default IssueDetailsPage;
