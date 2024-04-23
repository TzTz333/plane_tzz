import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";

import useSWR from "swr";


// types
import { UserAuth } from "types";
// fetch-keys
import { PROJECT_DETAILS, VIEWS_LIST, VIEW_DETAILS } from "constants/fetch-keys";


const SingleView: React.FC<UserAuth> = (props) => {

  return (
    <div>
      <h1>Single View</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {

  return {
    props: {
     
    },
  };
};

export default SingleView;
