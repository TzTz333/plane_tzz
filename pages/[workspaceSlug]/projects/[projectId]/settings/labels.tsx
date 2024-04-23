import React, { useState, useRef } from "react";

import { useRouter } from "next/router";

import useSWR from "swr";

// types
import { IIssueLabels, UserAuth } from "types";
import type { GetServerSidePropsContext, NextPage } from "next";
// fetch-keys
import { PROJECT_DETAILS, PROJECT_ISSUE_LABELS } from "constants/fetch-keys";

const LabelsSettings: NextPage<UserAuth> = (props) => {
  
  return (
    <div>
      <h1>Labels Settings</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {

  return {
    props: {
      
    },
  };
};

export default LabelsSettings;
