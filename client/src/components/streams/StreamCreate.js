import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

    // passed down as prop
    onSubmit = (formValues) => {
        //console.log(formValues);
        this.props.createStream(formValues);
    }

    render(){
        //console.log(this.props);

        return(
           <div>
               <h3>Create a Stream</h3> 
               <StreamForm onSubmit={this.onSubmit}/>
           </div>
        ); 
    }
    
}

export default connect(
    //mapStateToProps, 
    null,
    {createStream}
)(StreamCreate);