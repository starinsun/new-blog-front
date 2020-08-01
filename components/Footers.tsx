import React, { memo } from "react";

const Footer = () => (
  <div className='footer'>
    <div className='insi'>
      Power By ReactHooks, Antd, Next.js, MongoDb, TypeScript
      <a href='https://api.asenwang.top/'>Nest.js</a>,
      <a href='https://admin.asenwang.top'>React-Router</a>
    </div>
    <span>ESWang</span>
    <a className='gx' href='http://www.beian.miit.gov.cn'>
      鲁ICP备19044799号
    </a>
    <style jsx>
      {`
        .footer {
          text-align: center;
          border-top: 0.1rem solid #000;
          background-color: #eee;
          padding-top: 0.5rem;
          margin-top: 0.5rem;
          font-style: italic;
        }
        span {
          margin-right: 20px;
        }
        .insi a {
          text-decoration: none;
          color: rgba(0, 0, 0, 0.65);
          cursor: default;
        }
        .gx {
          text-decoration: none;
          color: rgba(0, 0, 0, 0.65);
        }
        .gx :hover {
          color: blue;
        }
      `}
    </style>
  </div>
);

export default memo(Footer);
