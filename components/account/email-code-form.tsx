import React, { useEffect, useState } from "react";

// ui
import { CheckCircleIcon } from "@heroicons/react/20/solid";

// services
import authenticationService from "services/authentication.service";
import useToast from "hooks/use-toast";

// icons

// types
type EmailCodeFormValues = {
  email: string;
  key?: string;
  token?: string;
};

export const EmailCodeForm = ({ onSuccess }: any) => {
 
  return (
    <h1>EmailCodeForm</h1>
  );
};
