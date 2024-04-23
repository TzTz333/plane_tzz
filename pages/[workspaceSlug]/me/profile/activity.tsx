import { GetServerSidePropsContext } from "next";

import useSWR from "swr";

// services
import userService from "services/user.service";

import { USER_ACTIVITY } from "constants/fetch-keys";

const ProfileActivity = () => {

  return (
    <div>
      <h1>Profile Activity</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
 

  return {
    props: {

    },
  };
};

export default ProfileActivity;
