const React = require('react');
const { useState,useRef } = React;

// class WordRelay extends React.Component {
//     state = {
//         word: '제로초',
//         value: '',
//         result: '',
//     };
    
//     onSubmitForm = (event) => {
//         event.preventDefault();
//         if(this.state.word[this.state.word.length -1] === this.state.value[0]) {
//             this.setState({
//                 result:'딩동댕',
//                 word: this.state.value,
//                 value:"",
//             })
//             this.input.focus();
//         }else {
//             this.setState({
//                 result:'떙',
//                 word:this.state.word,
//                 value:"",
//             })
//             this.input.focus();
//         }
//     };
//     onChangeInput = (e) => {
//         this.setState({value:e.target.value})
//     };
//     input;
//     onRefInput = (c) => {
//         this.input = c;
//     };

//         render() {
//             return(
//             <>
//             <div>{this.state.word}</div>
//             <form onSubmit={this.onSubmitForm}>
//                 <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} type="text" />
//                 <button>입력!</button>
//             </form>
//             <div>{this.state.result}</div>
//             </>
//             )
//         }
//     }

// module.exports = WordRelay;

const WordRelay = () => {
    const [word, setWord] = useState("제로초");
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const onRefInput = useRef(null);
    const onSubmitForm = (event) => {
        event.preventDefault();
        if(word[word.length -1] === value[0]){
            setResult("정답!!");
            setWord(value);
            setValue("");
            onRefInput.current.focus();
        }else {
            setResult("떙!");
            setValue("");
            onRefInput.current.focus();
        }
    }
    const onChageInput = (event) => {
        setValue(event.target.value);
    }
    return(
        <>
        <div>{word}</div>
        <form onSubmit={onSubmitForm}>
            <label htmlFor="wordInput">글자를 입력하세요.</label>
            <input id='wordInput' className='wordInput' ref={onRefInput} value={value} onChange={onChageInput} type="text" />
            <button>입력!!!</button>
        </form>
        <div>{result}</div>
        </>
    )
}
export {WordRelay}