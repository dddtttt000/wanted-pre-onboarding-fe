import React, { useRef, useState, useContext, useEffect } from 'react';
import { AppContext } from '../data/AppContext';
import styled from 'styled-components';
import logo from '../img/instagram.png';
import appStore from '../img/appstore-img.png';
import googlePlay from '../img/googleplay-img.png';

const Login = () => {
  const { setUsername, setIsLoggedIn } = useContext(AppContext);
  const emailInput = useRef(null);
  const pwInput = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validationCheck();
  }, [emailError, pwError]);

  const emailValidation = (e) => {
    const regExp = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    if (!e.target.value) {
      setEmailError(false);
    } else if (!regExp.test(e.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const passwordValidation = (e) => {
    console.log(e.target.value);
    const regExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!e.target.value) {
      setPwError(false);
    } else if (!regExp.test(e.target.value)) {
      setPwError(true);
    } else {
      setPwError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      if (emailError || pwError) {
        return;
      } else if (!emailError && !pwError) {
        setTimeout(() => {
          setIsLoggedIn(true);
        }, 1000);
      }
    }
  };

  const checkEnter = (e) => {
    if (e.key === 'Enter') {
      if (e.target === emailInput.current) {
        pwInput.current.focus();
      } else if (e.target === pwInput.current) {
        pwInput.current.blur();
      }
    }
  };

  const validationCheck = () => {
    if (email && password) {
      if (!emailError && !pwError) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    } else {
      setIsValid(false);
    }
  };

  return (
    <Container>
      <Article>
        <LoginBox>
          <Logo>
            <LogoImage src={logo} />
          </Logo>
          <FormStyle onSubmit={(e) => handleSubmit(e)}>
            <LoginForm>
              <FormCol color={emailError ? 'red' : null}>
                <InputStyle
                  id="email"
                  type="text"
                  ref={emailInput}
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  onBlur={(e) => emailValidation(e)}
                  // color={emailError ? 'red' : null}
                  onKeyUp={checkEnter}
                />
              </FormCol>
              <FormCol color={pwError ? 'red' : null}>
                <InputStyle
                  id="password"
                  type="password"
                  placeholder="비밀번호"
                  ref={pwInput}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  onBlur={(e) => passwordValidation(e)}
                  onKeyUp={checkEnter}
                />
              </FormCol>
              <LoginButtonDiv>
                <LoginButton color={isValid ? '#0c85fe' : null}>
                  로그인
                </LoginButton>
              </LoginButtonDiv>
            </LoginForm>
            <LineBreakerWrap>
              <Line />
              <LineText>또는</LineText>
              <Line />
            </LineBreakerWrap>
            <LoginButtonDiv>
              <FacebookLogin>Facebook으로 로그인</FacebookLogin>
            </LoginButtonDiv>

            <ForgotText>비밀번호를 잊으셨나요?</ForgotText>
          </FormStyle>
        </LoginBox>

        <LoginBox>
          <SignupTextBox>
            <SignupText>
              <SignupTextP>
                계정이 없으신가요? <SignupTextA>가입하기</SignupTextA>
              </SignupTextP>
            </SignupText>
          </SignupTextBox>
        </LoginBox>
        <DownloadBox>
          <DownloadP>앱을 다운로드하세요.</DownloadP>
          <DownloadAppBox>
            <DownloadAppStoreA href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
              <DownloadApp src={appStore} />
            </DownloadAppStoreA>
            <DownloadAppStoreA href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D4E3F8404-D203-41F4-9622-BE1389C46E5D%26utm_content%3Dlo%26utm_medium%3Dbadge">
              <DownloadApp src={googlePlay} />
            </DownloadAppStoreA>
          </DownloadAppBox>
        </DownloadBox>
      </Article>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  min-height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;
`;

const Article = styled.article`
  padding-bottom: 32px;
  width: 100%;
  max-width: 350px;
  height: 645px;
`;

const LoginBox = styled.div`
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
`;

const Logo = styled.div`
  margin-top: 36px;
  margin-bottom: 12px;
  justify-content: center;
  display: flex;
`;

const LogoImage = styled.img`
  width: 175px;
  height: 100%;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const FormCol = styled.div`
  border: 1px solid ${(props) => props.color || '#dbdbdb'};
  margin: 0 40px 6px;
  border-radius: 3px;
`;

const InputStyle = styled.input`
  width: 100%;
  height: 36px;
  background-color: #f8f8f8;
  padding-left: 10px;
`;

const LoginButtonDiv = styled.div`
  margin: 8px 40px;
`;
const LoginButton = styled.button`
  height: 36px;
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.color || '#92c8fe'};
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

const LineBreakerWrap = styled.div`
  margin: 10px 40px 18px 40px;
  display: flex;
`;

const Line = styled.div`
  flex-shrink: 1;
  height: 1px;
  position: relative;
  top: 0.45em;
  background-color: #dbdbdb;
  width: 100%;
`;

const LineText = styled.div`
  flex-shrink: 0;
  font-size: 13px;
  font-weight: 600;
  line-height: 15px;
  margin: 0 18px;
  color: #8e8e8e;
`;

const FacebookLogin = styled.button`
  color: #385185;
  width: 100%;
  cursor: pointer;
  background-color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 15px;
  height: 20px;
`;

const ForgotText = styled.div`
  color: #385185;
  line-height: 16px;
  font-size: 12px;
  margin-top: 12px;
  text-align: center;
  width: 100%;
  cursor: pointer;
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const SignupTextBox = styled.div`
  border-radius: 1px;
  margin: 0 0 10px;
`;

const SignupText = styled.div``;

const SignupTextP = styled.p`
  font-size: 14px;
  margin: 15px;
  text-align: center;
`;

const SignupTextA = styled.a`
  color: #0095f6;
  cursor: pointer;
  font-weight: 600;
`;

const DownloadBox = styled.div`
  align-items: stretch;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  position: relative;
`;

const DownloadP = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin: 10px 20px 10px 20px;
  text-align: center;
`;

const DownloadAppBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0 10px 0;
`;

const DownloadAppStoreA = styled.a`
  &:last-child {
    margin-right: 0;
  }
  margin-right: 8px;
  cursor: pointer;
`;

const DownloadApp = styled.img`
  height: 40px;
`;
