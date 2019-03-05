import React from 'react';
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';


class StreamCreate extends React.Component {

    renderError({error, touched}){
        if (touched && error){
            return (
                <div className = "ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className= `field ${meta.error && meta.touched ? 'error' : ''}`;
        // console.log(meta)
        return (
            <div className={className}>
                <label> {label} </label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>        
        );
        // AKA <input {...formProps.input}/>;
            // <input 
            //     onChange={formProps.input.onChange}
            //     value={formProps.input.value}
            // />
    }

    onSubmit = (formValues) => {
        //console.log(formValues);
        this.props.StreamCreate(formValues);
    }

    render(){
        //console.log(this.props);

        return(
            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)} 
                className="ui form error">
                <Field 
                    name="title" 
                    component={this.renderInput} 
                    label="Enter Steam Title:"
                />
                <Field 
                    name="description" 
                    component={this.renderInput} 
                    label="Enter Steam Description:"
                />
            <button className="ui button primary">Submit</button>
            </form>
        ); 
    }
    
}


const validate = (formValues) => {
    const errors = {};

    if (!formValues.title){
        errors.title = "You must enter a title!";
    }
    if (!formValues.description){
        errors.description = "You must enter a description!";
    }
    return errors;
};

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(
    //mapStateToProps, 
    null,
    {createStream}
)(formWrapped);