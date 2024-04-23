import dynamic from "next/dynamic"; 

// 样式
import "styles/globals.css";
import "styles/editor.css";
import "styles/command-pallette.css";
import "styles/nprogress.css";

//router
import Router from "next/router"; 
// nprogress
import NProgress from "nprogress";

//contexts
import { UserProvider } from "contexts/user.context";
import { ToastContextProvider } from "contexts/toast.context";
import { ThemeContextProvider } from "contexts/theme.context";

//types
import type { AppProps } from "next/app";

//这个是为了解决nextjs的ssr问题，因为nextjs是ssr的，所以会导致一些第三方库无法使用
const CrispWithNoSSR = dynamic(() => import("constants/crisp"), { ssr: false });

// nprogress,页面顶部加载进度条
NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeError", NProgress.done);
Router.events.on("routeChangeComplete", NProgress.done);

function MyApp({Component,pageProps}:AppProps) {
    return(
        <UserProvider>
            <ToastContextProvider>
                <ThemeContextProvider>
                    <CrispWithNoSSR/>
                    <Component {...pageProps}/>
                </ThemeContextProvider>
            </ToastContextProvider>
        </UserProvider>
    );
}

export default MyApp;