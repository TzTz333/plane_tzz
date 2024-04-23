import React, { createContext, useCallback, useReducer } from "react";

// components
import ToastAlert from "components/toast-alert";
// uuid
import { v4 as uuid } from "uuid";

export const toastContext = createContext<ContextType>({} as ContextType);

// types
//一种结构化和类型安全的方式管理toast通知
type ToastAlert = {
    id: string;
    title: string;
    message?: string;
    type: "success" | "error" | "warning" | "info";
};

//定义了 reducer 函数可以处理的动作类型
type ReducerActionType = {
  //添加新通知还是移除现有通知
    type: "SET_TOAST_ALERT" | "REMOVE_TOAST_ALERT";
    payload: ToastAlert;
};

//
type ContextType = {
    //可选数组，存储当前活跃的 Toast 通知
    alerts?: ToastAlert[];
    //接受一个 Toast 的 ID 并移除对应的 Toast
    removeAlert: (id: string) => void;
    //创建并显示一个新的 Toast
    setToastAlert: (data: {
      title: string;
      type?: "success" | "error" | "warning" | "info" | undefined;
      message?: string | undefined;
    }) => void;
  };

//定义了状态对象的结构
type StateType = {
    //数组中存储当前活跃的所有 Toast 通知
    toastAlerts?: ToastAlert[];
};

//定义了 reducer 函数的签名
//reducer 函数接受当前状态 (StateType) 和要处理的动作 (ReducerActionType) 作为参数，
//并返回新状态 (StateType)。这是 Redux 和类似库中常见的模式，用于根据当前状态和给定动作计算出新状态。
type ReducerFunctionType = (state: StateType, action: ReducerActionType) => StateType;


export const initialState: StateType = {
    toastAlerts: [],
};

export const reducer: ReducerFunctionType = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "SET_TOAST_ALERT":
        return {
          ...state,
          toastAlerts: [...(state.toastAlerts ?? []), payload],
        };
  
      case "REMOVE_TOAST_ALERT":
        return {
          ...state,
          toastAlerts: state.toastAlerts?.filter((toastAlert) => toastAlert.id !== payload.id),
        };
  
      default: {
        return state;
      }
    }
};


/**
 * ToastContextProvider组件是一个React函数组件，用于提供ToastContext的上下文。
 * @param children - 子组件
 */
export const ToastContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
        
    /**
     * removeAlert函数用于移除指定id的提示信息。
     * @param id - 提示信息的唯一标识符
     */

    const removeAlert = useCallback((id: string) => {
        dispatch({
            type: "REMOVE_TOAST_ALERT",
            payload: { id, title: "", message: "", type: "success" },
        });
    }, []);

    /**
     * setToastAlert函数用于设置提示信息。
     * @param data - 提示信息的数据
     * @param data.title - 提示信息的标题
     * @param data.type - 提示信息的类型，可选值为 "success" | "error" | "warning" | "info"
     * @param data.message - 提示信息的内容
     */

    const setToastAlert = useCallback(
        (data: {
            title: string;
            type?: "success" | "error" | "warning" | "info";
            message?: string;
        }) => {
            const id = uuid();
            const { title, type, message } = data;
            dispatch({
                type: "SET_TOAST_ALERT",
                payload: { id, title, message, type: type ?? "success" },
            });

            const timer = setTimeout(() => {
                removeAlert(id);
                clearTimeout(timer);
            }, 3000);
        },
        [removeAlert]
    );
    
    
    return (
        <toastContext.Provider value={{ setToastAlert, removeAlert, alerts: state.toastAlerts }}>
            <ToastAlert />
            {children}
        </toastContext.Provider>
    );
};
  