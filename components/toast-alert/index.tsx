import React from "react";
// hooks
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import useToast from "hooks/use-toast";
// icons



const ToastAlerts = () => {
  const { alerts, removeAlert } = useToast();

  if (!alerts) return null;

  return (
    <div className="pointer-events-none fixed top-5 right-5 z-50 h-full w-80 space-y-5 overflow-hidden">
      {alerts.map((alert) => (
        <div className="relative overflow-hidden rounded-md text-white" key={alert.id}>
          <div className="absolute top-1 right-1">
            <button
              type="button"
              className="pointer-events-auto inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
              onClick={() => removeAlert(alert.id)}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div
            className={`px-2 py-4 ${
              alert.type === "success"
                ? "bg-[#06d6a0]"
                : alert.type === "error"
                ? "bg-[#ef476f]"
                : alert.type === "warning"
                ? "bg-[#e98601]"
                : "bg-[#1B9aaa]"
            }`}
          >
            <div className="flex items-center gap-x-3">
              <div className="flex-shrink-0">
                {alert.type === "success" ? (
                  <CheckCircleIcon className="h-8 w-8" aria-hidden="true" />
                ) : alert.type === "error" ? (
                  <XCircleIcon className="h-8 w-8" />
                ) : alert.type === "warning" ? (
                  <ExclamationTriangleIcon className="h-8 w-8" aria-hidden="true" />
                ) : (
                  <InformationCircleIcon className="h-8 w-8" />
                )}
              </div>
              <div>
                <p className="font-semibold">{alert.title}</p>
                {alert.message && <p className="mt-1 text-xs">{alert.message}</p>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToastAlerts;
