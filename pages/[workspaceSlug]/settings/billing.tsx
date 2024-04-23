import React from "react";

import { useRouter } from "next/router";

import useSWR from "swr";

// types
import type { NextPage, GetServerSideProps } from "next";
// fetch-keys
import { WORKSPACE_DETAILS } from "constants/fetch-keys";

type TBillingSettingsProps = {
  isOwner: boolean;
  isMember: boolean;
  isViewer: boolean;
  isGuest: boolean;
};

const BillingSettings: NextPage<TBillingSettingsProps> = (props) => {
 
  return (
    <div>
      <h1>Billing Settings</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  return {
    props: {
      
    },
  };
};

export default BillingSettings;
