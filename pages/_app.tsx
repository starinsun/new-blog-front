import "../styles/globals.css";
import "antd/dist/antd.css";
import "markdown-navbar/dist/navbar.css";
import "gitalk/dist/gitalk.css";
import "highlight.js/styles/monokai-sublime.css";
import Router from "next/router";
import NProgress from "nprogress";

// @ts-ignore
Router.onRouteChangeStart = () => {
  NProgress.start();
};
// @ts-ignore
Router.onRouteChangeComplete = () => NProgress.done();
// @ts-ignore
Router.onRouteChangeError = () => NProgress.done();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
