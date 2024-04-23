import React, { useEffect } from "react";

interface IGithuPostInstallationProps {
  installation_id: string;
  setup_action: string;
  state: string;
  provider: string;
}

const AppPostInstallation = ({
  installation_id,
  setup_action,
  state,
  provider,
}: IGithuPostInstallationProps) => {


  return (
    <div className="absolute top-0 left-0 z-50 flex h-full w-full flex-col items-center justify-center gap-y-3 bg-white">
      <h2 className="text-2xl text-gray-900">Installing. Please wait...</h2>

    </div>
  );
};

//可以在这里获取到query参数，然后根据参数进行相应的操作
//在每次请求页面时在服务器端执行它
export async function getServerSideProps(context: any) {
  console.log(context.query);
  return {
    props: context.query,
  };
}

export default AppPostInstallation;

