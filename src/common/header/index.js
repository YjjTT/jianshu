import React, {Component} from 'react';
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
		SearchWrapper,
		SearchInfo,
		SearchInfoTitle,
		SearchInfoSwitch,
		SearchInfoItem,
		SearchInfoList} from './style';
class Header extends Component {
	getListArea = (show) => {
		if(show){
			return (
				<SearchInfo>
					<SearchInfoTitle className="clearfix">
						热门搜索
						<SearchInfoSwitch>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList className="clearfix">
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
					</SearchInfoList>
				</SearchInfo>
			)
		}else{
			return null;
		}
	}
	render() {
		return(
			<HeaderWrapper>
					<Logo />
					<Nav className="clearfix">
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
											in={this.props.focus}
											timeout={200}
											classNames="slide"
									>
											<NavSearch 
													className={this.props.focus ? 'focused' : ''}
													onFocus={this.props.handleInputFocus}
													onBlur={this.props.handleInputBlur}
											></NavSearch>
									</CSSTransition>
									<svg className={this.props.focus ? 'focused icon' : 'icon'} aria-hidden="true">
											<use xlinkHref="#iconfangdajing2"></use>
									</svg>
									{this.getListArea(this.props.focus)}
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

const mapStateToProps = (state) => {
    return {
				focus: state.get('header').get('focus') 
				// focus: state.getIn(['header', 'focus'])
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