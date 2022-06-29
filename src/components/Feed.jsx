import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faHeart,
  faPaperPlane,
  faBookmark,
  faEllipsis,
  faPeriod,
} from '@fortawesome/free-regular-svg-icons';
import Comment from '../components/Comment';

const Feed = ({ feed }) => {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = feed.url;
    img.onload = () => {
      setImgSrc(feed.url);
    };
  }, [feed.url]);

  return (
    <FeedContainer>
      {imgSrc === '' ? null : (
        <FeedDiv>
          <FeedArticles>
            <TitleWrap>
              <ProfileImg />
              <div>{feed.userName}</div>
              <span>・・・</span>
            </TitleWrap>
            <ImgContainer>
              <img src={imgSrc} />
            </ImgContainer>
            <IconContainer>
              <FontAwesomeIcon icon={faHeart} />
              <FontAwesomeIcon icon={faComment} />
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>
                <FontAwesomeIcon icon={faBookmark} />
              </span>
            </IconContainer>
            <p>좋아요 0개</p>

            <Comment />
          </FeedArticles>
        </FeedDiv>
      )}
    </FeedContainer>
  );
};

export default Feed;

const FeedContainer = styled.div`
  margin-top: calc(4px * 4);
  flex: 0 0 auto;
  justify-content: flex-start;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  display: flex;
`;

const FeedDiv = styled.div`
  flex-direction: column;
  padding-top: 0px;
`;

const FeedArticles = styled.article`
  max-height: inherit;
  padding: 0;
  margin-bottom: 24px;
  background-color: #fff;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 3px;
  margin-left: -1px;
  margin-right: -1px;

  @media (min-width: 640px) {
    border-radius: 8px;
    margin-bottom: 12px;
  }

  p {
    font-size: 14px;
    padding-left: 12px;
  }
`;

const TitleWrap = styled.div`
  /* flex: 0 0 auto; */
  /* justify-content: start; */
  /* flex-direction: row; */
  align-items: center;
  display: flex;
  height: 56px;
  font-weight: bold;
  font-size: 15px;

  span {
    margin-left: 320px;
  }
`;

const ProfileImg = styled.div`
  /* margin-left: 4px; */
  width: 40px;
  height: 40px;
  background-color: lightGray;
  border-radius: 25px;
  margin-left: 10px;
  margin-right: 10px;
`;

const ImgContainer = styled.div`
  img {
    width: 470px;
    object-fit: cover;
  }
`;

const IconContainer = styled.div`
  padding-left: 6px;
  padding-right: 6px;
  height: 46px;
  font-size: 24px;

  svg {
    padding: 8px;
  }

  span {
    float: right;
  }
`;
