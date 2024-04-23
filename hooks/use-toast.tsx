import { useContext } from "react";
import { toastContext } from "contexts/toast.context";
//@ 可能被配置为项目的根目录或某个特定的目录

const useToast = () => {
    const toastContextData = useContext(toastContext);
    return toastContextData;
};

export default useToast; 
