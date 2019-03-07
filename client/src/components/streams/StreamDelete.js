import React from 'react';
import {Link} from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import {connect} from 'react-redux';
import {fetchStream, deleteStream} from '../../actions';

class StreamDelete extends React.Component {

    // Every component needs to fetch its own data
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = formValues =>{
        // console.log(formValues);
        this.props.deleteStream(formValues, this.props.match.params.id)
    };

    renderActions(){
        const id = this.props.match.params.id;
        return(
            <React.Fragment>
                <button 
                    onClick={() => this.props.deleteStream(id)} 
                    className="ui button negative"
                > 
                    Delete
                </button>
                <Link to="/" className="ui button"> 
                    Cancel
                </Link>
            </React.Fragment>
        );
    }

    renderContent(){
        if(!this.props.stream){
            return "Are you sure you want to delete this stream?"
        }
        return `Are you sure you want to delete ${this.props.stream.title}?`
    }

    render(){
        return(
            <Modal 
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    //console.log(ownProps);
    return{ stream: state.streams[ownProps.match.params.id]};
};

export default connect(
    mapStateToProps, 
    {fetchStream, deleteStream}
)(StreamDelete);