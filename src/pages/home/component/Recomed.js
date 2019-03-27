import React, { Component } from 'react';
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'
class Recomed extends Component {
    render (){
        const { list } = this.props;
        return(
            <RecommendWrapper>
                {
                    list.map((item)=>{
                        return(
                            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.get('home').get('recommendList')
})
export default connect(mapState, null)(Recomed);