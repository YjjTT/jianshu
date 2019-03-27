import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style";
class Header extends Component {
  getListArea = () => {
    const {
      focus,
      list,
      mouseIn,
      page,
      totalPage,
      handleMouseEnter,
      handleMouserLeave,
      handleChangePage
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(<SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>);
        }
      }
    }
    if (focus || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouserLeave}
        >
          <SearchInfoTitle className="clearfix">
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <svg
                className="icon spin"
                ref={icon => {
                  this.spinIcon = icon;
                }}
                aria-hidden="true"
              >
                <use xlinkHref="#iconspin" />
              </svg>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList className="clearfix">{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };
  render() {
    const { focus, handleInputBlur, handleInputFocus, list } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav className="clearfix">
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#iconAa" />
            </svg>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focus} timeout={200} classNames="slide">
              <NavSearch
                className={focus ? "focused" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <svg
              className={focus ? "focused icon zoom" : "icon zoom"}
              aria-hidden="true"
            >
              <use xlinkHref="#iconfangdajing2" />
            </svg>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#iconbi" />
            </svg>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    focus: state.get("header").get("focus"),
    list: state.get("header").get("list"),
    totalPage: state.get("header").get("totalPage"),
    page: state.get("header").get("page"),
    mouseIn: state.get("header").get("mouseIn")
    // focus: state.getIn(['header', 'focus'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(list) {
      (list.size === 0) &&  dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouserLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      console.log(originAngle);
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
