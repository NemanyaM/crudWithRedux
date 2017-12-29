import React from 'react';
import PropTypes from 'prop-types';


export default function NewsList({ news })  {

    const emptyMessage = (
        <p>There are no news yet in your list</p>
    );

    const newsList = (
        <p>{news.map((item, index) => {
            return (
                <p key={index}>{item.title}</p>
            );
        })}</p>
    );

    return (
        <div>
            { news.length === 0 ? emptyMessage : newsList }
        </div>    
    );
}

NewsList.propTypes = {
    news: PropTypes.array.isRequired,
  }