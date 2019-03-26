import React from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'

import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    NavSearch,
    Addition,
    Button, 
    SearchWrapper} from './style';

const Header = (props) => {
    return(
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#iconAa"></use>
                    </svg>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focus}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch 
                            className={props.focus ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <svg className={props.focus ? 'focused icon' : 'icon'} aria-hidden="true">
                        <use xlinkHref="#iconfangdajing2"></use>
                    </svg>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writting">
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#iconbi"></use>
                    </svg>
                    写文章
                </Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
} 
const mapStateToProps = (state) => {
    return {
        focus: state.header.get('focus') 
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur () {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);