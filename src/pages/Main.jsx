import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../data/AppContext';
import axios from 'axios';
import styled from 'styled-components';
import logo from '../img/instagram.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import {
  faUser,
  faPaperPlane,
  faSquarePlus,
  faCompass,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import Feed from '../components/Feed';

const Main = () => {
  const { setIsLoggedIn } = useContext(AppContext);
  const [feedLists, setFeedLists] = useState([]);

  useEffect(() => {
    getFeedList();
  }, []);

  const getFeedList = async () => {
    const res = await axios.get('/data/feedList.json');

    if (res && res.data) {
      setFeedLists(res.data.data);
    } else {
      console.debug('no res');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <MainSection>
      {/* <MainContainer> */}
      {/* <MainFeed> */}
      <MainFeedWrapper>
        <FeedList>
          <MarginDiv />
          {feedLists &&
            feedLists.map((feed, idx) => (
              <Feed key={feed.id + idx} feed={feed} />
            ))}
        </FeedList>
      </MainFeedWrapper>
      {/* </MainFeed> */}
      <MainNav>
        <NavWrap>
          <NavImg>
            <img src={logo} alt="" />
          </NavImg>
          <NavInput>
            <input type="text" placeholder="검색" />
          </NavInput>
          <NavIconWrap>
            <NavIcons>
              <div>
                <FontAwesomeIcon icon={faHouse} />
              </div>
              <div>
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
              <div>
                <FontAwesomeIcon icon={faSquarePlus} />
              </div>
              <div>
                <FontAwesomeIcon icon={faCompass} />
              </div>
              <div>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div>
                <FontAwesomeIcon icon={faUser} onClick={handleLogout} />
              </div>
            </NavIcons>
          </NavIconWrap>
        </NavWrap>
      </MainNav>
      {/* </MainContainer> */}
    </MainSection>
  );
};

export default Main;

const MainSection = styled.section`
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const MainContainer = styled.div`
  flex-grow: 1;
  order: 4;
  background-color: #f8f8f8;
`;

const MainNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(219, 219, 219);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
`;

const NavWrap = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  height: 60px;
  justify-content: center;
  max-width: calc(935px + 40px);
  padding: 0 20px;
  width: 100%;
  z-index: 10;
`;

const NavImg = styled.div`
  flex: 1 0 127px;

  img {
    width: 103px;
    height: 29px;
  }
`;

const NavInput = styled.div`
  align-items: center;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  height: 36px;
  min-width: 125px;
  position: relative;
  border-radius: 8px;
  background: rgb(239, 239, 239);

  @media (max-width: 640px) {
    display: none;
  }

  input {
    background: rgb(239, 239, 239);
    font-size: 16px;
    padding: 3px 16px;
    height: 36px;
    border-radius: 8px;
    outline: none;
    z-index: 2;
  }
`;

const NavIconWrap = styled.div`
  flex: 1 0 127px;
  position: relative;
  align-content: center;
  align-items: center;
  display: flex;
  /* flex: 1 0 0%; */
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const NavIcons = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 24px;
  white-space: nowrap;

  div {
    font-size: 22px;
    display: flex;
    flex-direction: row;
    padding-left: 24px;
    white-space: nowrap;

    svg {
      cursor: pointer;
    }
  }
`;

const MainFeed = styled.main`
  padding-top: 0;
  max-width: calc(470px + 32px + 319px);
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
  position: relative;
  margin: 0 auto;
  width: 100%;
`;

const FeedList = styled.div`
  margin-top: 10px;
  transform: translateY(-56px);
  max-width: 470px;
  /* margin-right: 32px; */
  float: left;
  width: 100%;
`;

const MarginDiv = styled.div`
  margin-top: 130px;
`;

const MainFeedWrapper = styled.div`
  margin: 0 auto;
`;
