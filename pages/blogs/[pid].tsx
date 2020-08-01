/*
 * @Date: 2019-10-20 00:06:46
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-13 22:38:58
 * @content: I
 */
import React from "react";
import Head from "next/head";
import Headers from "../../components/Headers";
import { Row, Col, Affix } from "antd";
import PostTag from "../../components/PostTag";
import Post from "../../components/Post";
import Intro from "../../components/Intro";
import PostNavBar from "../../components/PostNavBar";
import Comment from "../../components/Comment";
import Footers from "../../components/Footers";
import axios from "axios";
import { api_url } from "../../config/http.config";
import { postListType } from "../../types";

const Blogs = (res: postListType) => {
  return (
    <div>
      <Head>
        <title>{res.title}-eswang</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Affix offsetTop={0}>
        <Headers />
      </Affix>
      <Row className='all-main' justify='center'>
        <Col xs={0} sm={0} md={2} lg={2} xl={2}>
          <Affix offsetTop={60}>
            <PostTag data={res} />
          </Affix>
        </Col>

        <Col className='post-center' xs={24} sm={24} md={12} lg={13} xl={13}>
          <Post data={res} />
          <Comment data={res} />
        </Col>

        <Col className='post-right' xs={0} sm={0} md={5} lg={4} xl={5}>
          <Intro />
          <Affix offsetTop={60}>
            <PostNavBar data={res} />
          </Affix>
        </Col>
      </Row>
      <Footers />
      <style jsx global>
        {`
          .post-center {
            background-color: #fff;
            margin: 1.2rem 1.8rem;
            padding: 0.8rem;
            border-radius: 0.3rem;
            border: 0.1rem solid #eee;
          }
          .all-main {
            margin-top: 0.5rem;
          }
        `}
      </style>
    </div>
  );
};

Blogs.getInitialProps = async ({ query }) => {
  const res = await axios.get(api_url + `/posts/post/${query.pid}`);
  return res.data;
};

export default Blogs;
