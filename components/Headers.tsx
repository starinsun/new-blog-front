import React from "react";
import Link from "next/link";
import { IconFont } from "../config/utils.config";

const Header2 = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <div className='header-logo'>
          <Link href='/'>
            <a>BLOG</a>
          </Link>
        </div>
        <div className='header-txt'>
          <p>e</p>
          <p>s</p>
          <p>w</p>
          <p>a</p>
          <p>ng</p>
        </div>
      </div>
      <div className='header-option'>
        <Link href='/'>
          <div className='header_blog'>
            <IconFont
              type='icon-tubiaozhizuomoban-'
              style={{ fontSize: 28, marginRight: 5 }}
            />
            Article
          </div>
        </Link>

        <Link href='/life'>
          <div className='header_life'>
            <IconFont
              type='icon-ins'
              style={{ fontSize: 28, marginRight: 5 }}
            />
            Photos
          </div>
        </Link>

        <div className='header_other'>
          <IconFont type='icon-shou' style={{ fontSize: 28 }} />~
        </div>
      </div>
      <style jsx>
        {`
          .header {
            display: flex;
            background-color: #fff;
            padding: 0.4rem;
            overflow: hidden;
            height: 4rem;
            border-bottom: 1px solid #000;
            box-shadow: 1px 1px #555;
          }
          .header-left {
            display: flex;
          }
          .header-logo {
            font-size: 2.3rem;
            font-weight: bolder;
            text-align: left;
            padding-right: 0.8rem;
            border-right: 0.1rem solid #333;
            color: #000;
            text-shadow: 0px 2px 3px #bbb;
          }
          .header-txt {
            font-size: 1.8rem;
            font-weight: 500;
            color: #000;
            margin: 0 0 5px 8px;
            display: flex;
            align-items: flex-end;
          }
          .header-txt p {
            display: inline;
            line-height: 22px;
            text-align: center;
            margin-bottom: 0;
            border-radius: 50%;
            transition: 1s;
          }
          .header-txt p:nth-of-type(1) {
            width: 36px;
            height: 36px;
            font-size: 36px;
            line-height: 27px;
            background-color: #7bed9f;
          }
          .header-txt p:nth-of-type(3) {
            width: 28px;
            height: 28px;
            line-height: 1;
            font-size: 26px;
            background-color: #ffa502;
          }
          .header-txt:hover > p:nth-of-type(1) {
            animation: eswang 1s infinite linear;
          }
          .header-txt:hover > p:nth-of-type(3) {
            animation: esang 1s infinite linear;
          }
          @keyframes eswang {
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes esang {
            to {
              transform: rotate(-360deg);
            }
          }
          .header-option {
            display: flex;
          }

          .header_blog,
          .header_life {
            margin-top: 0.5rem;
            padding: 0 1.2rem 0 1.2rem;
            transition: transform 200ms;
          }
          .header_other {
            margin-top: 0.5rem;
            padding-left: 1.2rem;
          }

          .header_blog :hover {
            transform: scale(1.1);
            cursor: pointer;
          }
          .header_life :hover {
            transform: scale(1.1);
            cursor: pointer;
          }
          .header_other :hover {
            cursor: not-allowed;
          }

          @media (max-width: 768px) {
            .header {
              display: flex;
              justify-content: space-between;
            }
            .header-txt,
            .header_other {
              display: none;
            }
            .header-option {
              transform: scale(0.8);
            }
          }
          @media (min-width: 768px) {
            .header {
              justify-content: space-around;
            }
            .header-logo {
              margin-left: 4rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Header2;
