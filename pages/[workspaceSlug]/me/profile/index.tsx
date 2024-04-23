import React, { useEffect, useState } from "react";

import Image from "next/image";

import { NextPage, GetServerSidePropsContext } from "next";
import type { IUser } from "types";

const defaultValues: Partial<IUser> = {
  avatar: "",
  first_name: "",
  last_name: "",
  email: "",
  role: "",
};

const Profile: NextPage = () => {
 
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {

  return {
    props: {},
  };
};

export default Profile;
