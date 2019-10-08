import React, {Component} from 'react';

class Edit extends Component {
    state={
        item:""
}
handleChange=(e)=>{
        this.setState({
            item:e.target.value
        })
    console.log(this.state.item);
}
    render() {
        return (
            <div>
                <form onSubmit={e=>{this.props.handleEdit(e,this.state.item)}}>
                    <input type={'text'} name={'edit'} className={'holder'} onChange={this.handleChange}/>
                    <input type={'submit'} className={'edit-btn'}/>
                </form>
            </div>
        );
    }
}

export default Edit;