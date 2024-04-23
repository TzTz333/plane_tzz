// next imports
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
// swr
import useSWR from "swr";

// types
import { UserAuth, IAppIntegrations } from "types";


const ImportExport: NextPage<UserAuth> = (props) => {
  
  return (
    <div>
      <h1>Import Export</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
 

  return {
    props: {
      
    },
  };
};

export default ImportExport;
