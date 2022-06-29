import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
const Comment = () => {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const postComment = () => {
    setCommentList([...commentList, comment]);
    setComment('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      postComment();
    }
  };

  return (
    // <form onSubmit={() => preventDefault()}>
    <>
      <CommentContent>
        {commentList.length === 0
          ? null
          : commentList.map((comment, idx) => (
              <p key={idx.toString()}>{comment}</p>
            ))}
      </CommentContent>
      <CommentInputContainer>
        <CommentBox>
          <div>
            <FontAwesomeIcon icon={faFaceSmile} />
          </div>
          <div>
            <input
              placeholder="댓글 달기..."
              onChange={handleChange}
              value={comment}
              onKeyUp={handleKeyPress}
            ></input>
          </div>
          <div>
            <button onClick={postComment}>게시</button>
          </div>
          {/* // </form> */}
        </CommentBox>
      </CommentInputContainer>
    </>
  );
};

export default Comment;

const CommentInputContainer = styled.div`
  display: flex;
  border-top: 1px solid rgb(239, 239, 239);
  padding-left: 12px;
  padding-right: 12px;
`;

const CommentBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  /* flex-grow: 1; */
  /* flex-shrink: 1; */
  /* position: relative; */

  input {
    height: 18px !important;
    background: none;
    border: none;
    max-height: 80px;
    width: 380px;
  }

  svg {
    font-size: 23px;
    padding: 8px 12px 8px 0;
  }

  button {
    color: #00a6ffe3;
    font-size: 14px;
    width: 26px;
    padding: 0;
    background-color: #fff;
    font-weight: bold;
  }
`;

const CommentContent = styled.div`
  width: 100%;
  min-height: 10px;
  margin-top: 20px;

  p {
    margin: 4px 0;
  }
`;
