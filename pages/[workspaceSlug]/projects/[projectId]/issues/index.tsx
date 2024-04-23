import { useRouter } from "next/router";

import useSWR from "swr";


// types
import type { UserAuth } from "types";
import type { GetServerSidePropsContext, NextPage } from "next";
// fetch-keys
import { PROJECT_DETAILS } from "constants/fetch-keys";

const ProjectIssues: NextPage<UserAuth> = (props) => {
  
  return (
    <div>
      <h1>Project Issues</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
 

  return {
    props: {
      
    },
  };
};

export default ProjectIssues;
