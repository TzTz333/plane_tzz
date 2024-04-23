import React, { useState } from "react";

import { useRouter } from "next/router";

import useSWR from "swr";

// types
import { UserAuth } from "types";
import type { NextPage, GetServerSidePropsContext } from "next";
// fetch-keys
import { PROJECT_DETAILS, STATE_LIST } from "constants/fetch-keys";

const StatesSettings: NextPage<UserAuth> = (props) => {
  
  return (
    <div>
      <h1>States Settings</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {

  return {
    props: {
      
    },
  };
};

export default StatesSettings;
