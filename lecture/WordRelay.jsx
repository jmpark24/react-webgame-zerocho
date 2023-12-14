const React = require('react');
const { Component } = React;

class WordRelay extends React.Component {
    state = {
        word: '제로초',
        value: '',
        result: '',
    };
    
        render() {
            return(
            <>
            <div>{this.state.word}</div>
            <form onSubmit={this.onSubmitForm}>
                <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} type="text" />
            </form>
            <div>{this.state.result}</div>
            </>
            )
        }
    }

module.exports = WordRelay;