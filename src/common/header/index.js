import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    NavSearch,
    Addition,
    Button, 
    SearchWrapper} from './style';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            focus: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }
    handleInputFocus = () => {
        this.setState({
            focus: true
        })
    }
    handleInputBlur = () => {
        this.setState({
            focus: false
        })
    }
    render() {
        return (
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
                            in={this.state.focus}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={this.state.focus ? 'focused' : ''}
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <svg className={this.state.focus ? 'focused icon' : 'icon'} aria-hidden="true">
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
}
export default Header;