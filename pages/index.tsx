import Head from "next/head";
import Headers from "../components/Headers";
import Footers from "../components/Footers";
import HeaderTag from "../components/HeaderTag";
import HomeTag from "../components/HomeTag";
import PostList from "../components/PostList";
import Intro from "../components/Intro";
import { createContext } from "react";
import { Affix, Col, Row } from "antd";
import axios from "axios";
import { api_url } from "../config/http.config";

export const TagContext = createContext("");

export default function Home({ data, ctx }) {
  return (
    <div>
      <Head>
        <title>eswang的个人博客</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Affix>
        <Headers />
      </Affix>
      {ctx ? (
        <TagContext.Provider value={ctx}>
          <HeaderTag />
        </TagContext.Provider>
      ) : (
        <></>
      )}

      <Row className='all-main' justify='center'>
        <Col className='left' xs={0} sm={0} md={0} lg={3} xl={3}>
          <Affix offsetTop={60}>
            <HomeTag />
          </Affix>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={14}
          xl={14}
          style={{
            backgroundColor: "#fff",
            margin: "1.3rem",
            padding: "0.8rem",
            borderRadius: "0.3rem",
            border: "0.1rem solid #000",
          }}>
          <PostList data={data} />
        </Col>
        <Col xs={0} sm={0} md={0} lg={5} xl={5} className='right'>
          <Affix offsetTop={60}>
            <Intro />
          </Affix>
        </Col>
      </Row>
      <Footers />
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = ctx.query.tags
    ? await axios.get(api_url + `/posts/list/${ctx.query.tags}`)
    : await axios.get(`${api_url}/posts`);

  return { data: res.data, ctx: ctx.query.tags };
};
