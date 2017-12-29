import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { saveNews } from './actions/saveNews';
import { Redirect } from 'react-router';


class NewsForm extends React.Component {
    state = {
        title: '',
        newsBody: '',
        published: '',
        frontPage: '',
        carousel: '',
        readBefore: '',
        errors: {},
        loading: false,
        done: false,
    }

    handleChange = (e) => {
        if (!!this.state.errors[e.target.name]){
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({
                 [e.target.name]: e.target.value,
                 errors 
                });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let errors = {};
        if (this.state.title === '') errors.title = "Can't be empty";
        if (this.state.newsBody === '') errors.newsBody = "Can't be empty";
        if (this.state.published === '') errors.published = "Can't be empty";
        if (this.state.frontPage === '') errors.frontPage = "Can't be empty";
        if (this.state.carousel === '') errors.carousel = "Can't be empty";
        if (this.state.readBefore === '') errors.readBefore = "Can't be empty";
        this.setState({errors});
        const isValid = Object.keys(errors).length === 0;

        if (isValid){
            const { title, newsBody, published, frontPage, carousel, readBefore } = this.state;
            this.setState({loading: true});
            this.props.saveNews({ title, newsBody, published, frontPage, carousel, readBefore })
                .then(
                    () => {this.state({done: true })},
                    (err) => err.response.json().then(({errors}) => this.setState({errors, loading: false }))
                );
        }
    }

    render() {
        const form = (<form className={ classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>
        <h1>And new News</h1>

        {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

        <div className={classnames('field', { error: !!this.state.errors.title })}>
            <label htmlFor="title">Title</label>
            <input id ="title" name="title" value={this.state.title} onChange={this.handleChange} />
            <span>{this.state.errors.title}</span>
        </div> 
        <div className={classnames('field', { error: !!this.state.errors.newsBody })}>
            <label htmlFor="newsBody">News Body</label>
            <input id ="newsBody" rows="5" name="newsBody" value={this.state.newsBody} onChange={this.handleChange}/>
            <span>{this.state.errors.newsBody}</span>
        </div>
        <div className={classnames('field', { error: !!this.state.errors.published })}>
            <label htmlFor="published">Published</label>
            <input id ="published" name="published" value={this.state.published} onChange={this.handleChange}/>
            <span>{this.state.errors.published}</span>
        </div>
        <div className={classnames('field', { error: !!this.state.errors.frontPage })}>
            <label htmlFor="frontPage">Front Page</label>
            <input id ="frontPage" name="frontPage" value={this.state.frontPage} onChange={this.handleChange}/>
            <span>{this.state.errors.frontPage}</span>
        </div>
        <div className={classnames('field', { error: !!this.state.errors.carousel })}>
            <label htmlFor="carousel">Carousel</label>
            <input id ="carousel" name="carousel" value={this.state.carousel} onChange={this.handleChange}/>
            <span>{this.state.errors.carousel}</span>
        </div>
        <div className={classnames('field', { error: !!this.state.errors.readBefore })}>
            <label htmlFor="readBefore">Read before</label>
            <input id ="readBefore" name="readBefore" value={this.state.readBefore} onChange={this.handleChange}/>
            <span>{this.state.errors.readBefore}</span>
        </div>
        <div className="ui button primary">
            <button className="ui primary button">Save</button>
        </div>
   </form>   
    );
        return (
           <div>
              { this.state.done ? <Redirect to="/news" /> : form }  
           </div>    
        );
    }
}

export default connect(null, { saveNews })(NewsForm);