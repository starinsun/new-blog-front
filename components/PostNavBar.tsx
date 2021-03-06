import NavBar from "markdown-navbar";
import React, { useContext, memo } from "react";
import { IconFont } from "../config/utils.config";
import { postListType } from "../types";

const PostNavBar = (props: { data: postListType }) => {
  return (
    <div className='navbar-main'>
      <div className='navbar-tilte'>
        <IconFont
          type='icon-mulu'
          className='mulu'
          style={{ fontSize: "1.8rem", marginRight: ".5rem" }}
        />
        <div className='mulu'>目录</div>
      </div>
      <NavBar
        className='navbar'
        source={props.data.content}
        ordered={false}
        headingTopOffset={50}
      />
      <style jsx>
        {`
          .navbar-main {
            background-color: #fff;
            margin-top: 1.5rem;
            padding: 0.3rem;
            border-radius: 0.3rem;
            border: 0.1rem solid #000;
          }

          .navbar-main .navbar {
            font-size: 0.8rem;
          }

          .navbar-tilte {
            text-align: left;
            font-size: 1rem;
            margin-bottom: 0.3rem;
            padding: 0.8rem 0.3rem 0.3rem 0.8rem;
            display: flex;
            align-items: center;
          }
          .mulu {
            font-size: 1.3rem;
            font-weight: 600;
          }
        `}
      </style>
      <style jsx global>
        {`
          .markdown-navigation .title-anchor {
            margin: 0.4rem 0;
          }
        `}
      </style>
    </div>
  );
};

export default memo(PostNavBar);
