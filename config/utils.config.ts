import { createFromIconfontCN } from "@ant-design/icons";
import { inconf_url } from "./http.config";

export const IconFont = createFromIconfontCN({
  scriptUrl: inconf_url,
});

export const judge_tag_color = (text) => {
  switch (text) {
    case "react":
      return "#3eeeee";
    case "vue":
      return "green";
    case "ecmascript":
      return "#eccc68";
    case "css":
      return "red";
    case "basic":
      return "#57606f";
    case "nest":
      return "volcano";
    case "angular":
      return "#ff4757";
    case "native":
      return "cyan";
    case "life":
      return "#70a1ff";
    default:
      return "silver";
  }
};

export const techSymbol = (ctx) => {
  switch (ctx) {
    case "react":
      return "https://eswang.gitee.io/blog_pic/image/react.png";
    case "vue":
      return "https://eswang.gitee.io/blog_pic/image/vue.png";
    case "css":
      return "https://eswang.gitee.io/blog_pic/image/css.png";
    case "angular":
      return "https://eswang.gitee.io/blog_pic/image/angular.png";
    case "nest":
      return "https://eswang.gitee.io/blog_pic/image/nest.svg";
    case "life":
      return "https://eswang.gitee.io/blog_pic/image/life.png";
    case "native":
      return "https://eswang.gitee.io/blog_pic/image/flutter.png";
    case "ecmascript":
      return "https://eswang.gitee.io/blog_pic/image/js.png";
    case "basic":
      return "https://eswang.gitee.io/blog_pic/image/node.png";
  }
};
