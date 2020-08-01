import React, { memo, useState } from "react";
import axios from "axios";
import { message } from "antd";
import { IconFont } from "../config/utils.config";
import { api_url } from "../config/http.config";
import { postListType } from "../types";

const PostTag = (props: { data: postListType }) => {
  const [up, setUp] = useState(false);
  const [zan, setZan] = useState(props.data.zan);
  async function handleZan() {
    if (!up) {
      const {
        tags,
        intro,
        title,
        readtime,
        img,
        author,
        content,
        time,
        comment,
        views,
        csdn,
        juejin,
      } = props.data;
      setZan(zan + 1);
      let req = {
        tags,
        intro,
        title,
        readtime,
        img,
        author,
        content,
        time,
        comment,
        views,
        zan: zan + 1,
        csdn,
        juejin,
      };
      await axios.put(`${api_url}/posts/post/${props.data._id}`, req);
      setUp(true);
    } else {
      message.error("已经点赞了，不用再点了");
    }
  }
  function enterComment() {
    window.scrollTo({ top: 9999999 });
  }
  return (
    <div className='main'>
      <div className='guzhang'>
        <IconFont type='icon-guzhang' onClick={handleZan} />
      </div>
      点赞 : {zan}
      <div className='pinglun'>
        <IconFont type='icon-wo-' onClick={enterComment} />
      </div>
      ~评个论~
      <div className='csdn'>
        <IconFont
          type='icon-csdn'
          onClick={() => {
            window.location.href = props.data.csdn;
          }}
        />
      </div>
      ~有文章~
      <div className='github'>
        <IconFont type='icon-github' />
      </div>
      ~有源码~
      <div className='juejin'>
        <IconFont
          type='icon-juejin'
          onClick={() => {
            if (props.data.juejin) {
              window.location.href = props.data.juejin;
            } else {
              message.info("此文章暂无掘金链接");
            }
          }}
        />
      </div>
      ~这也有~
      <style jsx>
        {`
          .main {
            text-align: center;
            margin-top: 1.3rem;
          }
          .guzhang,
          .pinglun,
          .csdn,
          .github,
          .juejin {
            margin-top: 1rem;
            font-size: 2rem;
            transition: all 200ms;
          }
          .github :hover {
            cursor: not-allowed !important;
          }
          .main div :hover {
            cursor: pointer;
            transform: rotate(20deg) scaleY(1.1);
          }
        `}
      </style>
    </div>
  );
};

export default memo(PostTag);
