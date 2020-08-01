import React, { memo } from "react";
import { Avatar, Divider } from "antd";
import { IconFont } from "../config/utils.config";

const Introduction = () => {
  return (
    <div className='intro'>
      <div className='avatar'>
        <Avatar
          size={100}
          src='https://eswang.gitee.io/blog_pic/image/default.png'
        />
      </div>
      <div className='author'>
        <h2>ESWang</h2>
        <h4>前端开发时长一年的练习生~</h4>
        <Divider>Follow me By</Divider>
      </div>
      <div className='iconfont'>
        <div>
          <IconFont
            type='icon-github'
            style={{ fontSize: "2rem", margin: "0 .4rem" }}
            onClick={() => {
              window.location.href = "https://github.com/starinsun";
            }}
          />
        </div>
        <div>
          <IconFont
            type='icon-csdn'
            style={{ fontSize: "2rem", margin: "0 .4rem" }}
            onClick={() => {
              window.location.href = "https://blog.csdn.net/weixin_43870742";
            }}
          />
        </div>
        <div>
          <IconFont
            type='icon-jianshu'
            style={{ fontSize: "2rem", margin: "0 .4rem" }}
            onClick={() => {
              window.location.href = "https://www.jianshu.com/u/3d27a986167e";
            }}
          />
        </div>
        <div>
          <IconFont
            type='icon-juejin'
            style={{ fontSize: "2rem", margin: "0 .4rem .8rem .4rem" }}
            onClick={() => {
              window.location.href =
                "https://juejin.im/user/5d3654a16fb9a07ea33c550e";
            }}
          />
        </div>
      </div>
      <style jsx>
        {`
          .avatar,
          .author {
            text-align: center;
            padding: 1rem;
            font-size: 1rem;
          }

          .iconfont {
            display: flex;
            justify-content: center;
            text-align: center;
          }

          .intro {
            background-color: #fff;
            margin-top: 1.2rem;
            padding: 0.3rem;
            border-radius: 0.3rem;
            border: 0.1rem solid #000;
          }

          .iconfont > div {
            transition: all 100ms;
            margin: 0 3px 0 3px;
          }

          .iconfont div :hover {
            transform: translateY(-5px);
          }
        `}
      </style>
    </div>
  );
};

export default memo(Introduction);
