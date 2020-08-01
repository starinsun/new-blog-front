import React, { memo, useContext } from "react";
import { techSymbol } from "../config/utils.config";
import { TagContext } from "../pages";

const HeadTag = () => {
  const tag = useContext(TagContext);
  return (
    <div className='headTag'>
      <img src={techSymbol(tag)} alt={tag} className='headTag_img' />
      <p className='headTag_font'>{tag.toUpperCase()}</p>
      <style jsx>
        {`
          .headTag {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 2rem 5rem 0 5rem;
            border: 0.4rem #000000 solid;
            border-radius: 0.5rem;
            box-shadow: 0.3rem 0.3rem 0 0;
          }

          .headTag_font {
            font-size: 5rem;
            margin-bottom: 0;
            font-style: italic;
          }

          .headTag_img {
            padding-top: 0.4rem;
            width: 10rem;
            height: 10rem;
          }
        `}
      </style>
    </div>
  );
};

export default memo(HeadTag);
