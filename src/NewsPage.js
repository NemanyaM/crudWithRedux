import React from 'react';
import {connect} from 'react-redux';
import NewsList from './NewsList';
import PropTypes from 'prop-types';
import {fetchNews} from './actions/fetchNews';
import {saveNews} from './actions/saveNews';


 class NewsPage extends React.Component {
     componentDidMount() {
         this.props.fetchNews();
         this.props.saveNews();
     }
    render() {
        return (
            <div>
               <h1>News List</h1> 
               <NewsList news={ this.props.news } />   
            </div>   
        );
    }
}

NewsPage.propTypes = {
    news: PropTypes.array.isRequired,
    fetchNews: PropTypes.func.isRequired,
    saveNews: PropTypes.func.isRequired,

}

function mapStateToProps(state){
    return {
        news: state.news.items.data
    }
}

export default connect(mapStateToProps, { fetchNews, saveNews })(NewsPage);