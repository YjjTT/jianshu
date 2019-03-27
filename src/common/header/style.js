import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;
export const Logo = styled.a.attrs({
  href: "/"
})`
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  display: block;
  background: url(${logoPic});
  background-size: contain;
`;
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
  .clearfix::after {
    display: block;
    content: "";
    clear: both;
  }
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #e96f5a;
  }
`;
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    padding: 4px auto;
    &.focused {
      color: white;
      background: #969696;
    }
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 100%;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  margin-top: 9px;
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
  .clearfix::after {
    display: block;
    content: "";
    clear: both;
  }
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .clearfix::after {
    display: block;
    content: "";
    clear: both;
  }
  .spin {
    margin-right: 2px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;
export const SearchInfoItem = styled.a`
  font-size: 12px;
  padding: 0 5px;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eeeeee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    width: 160px;
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
  .writting .icon {
    margin-right: 5px;
  }
`;
export const Button = styled.div`
  float: right;
  line-height: 38px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 19px;
  border: 1px solid #ec6109;
  &.reg {
    color: #ec6109;
  }
  &.writting {
    color: white;
    background: #ec6109;
  }
`;
