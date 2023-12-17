import React, { useState, useRef } from 'react';
import Try from './try'

function getNumbers() { //  숫자 4개를 겹치지 않고 뽑는 합수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i++) {
        const chosen = candidate.splice(Math.floor(Math.random()*(9-i)),1)[0];
        array.push(chosen);
    }
    return array;
};
function createRestartButton() {

    return (
        <button>다시하기</button>
    );
};
const NumberBaseball = () => {
    const [result,setResult] = useState('야구게임');
    const [value,setValue] = useState('');
    const [answer,setAnswer] = useState(getNumbers);
    const [tries,setTries] = useState([]);
    const InputFocus = useRef(null);
    const onSubmitForm = (event) => {
        event.preventDefault();
        if(value === answer.join('')) {
            setResult('홈런!');
            setTries((prevTries) => {
               return [...prevTries,{try:value,result:'홈런!'}]
            });
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
            alert('게임을 다시 시작합니다!');
            InputFocus.current.focus();
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) { // 10번 이상 틀렸을 때
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`);
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
                alert('게임을 다시 시작합니다!');
                InputFocus.current.focus();
            } else {
                for (let i=0; i<4; i++) {
                    if(answerArray[i] === answer[i]) {
                        strike++
                        
                    }else if(answer.includes(answerArray[i])) {
                        ball++;
                    }
                }
                setTries((prevTries) => [...prevTries, {try : value, result :`${strike} 스트라이크, ${ball} 볼입니다.`}]);
                setValue('');
                InputFocus.current.focus();
            }
        }

    }
    const onChangeInput = (event) => {
        setValue(event.target.value);
      };

    return (
        <>
        <h1>{result}</h1>
        <form onSubmit={onSubmitForm}>
        <input ref={InputFocus} maxLength={4} value={value} onChange={onChangeInput} />
        <button>버튼!!</button>
        </form>
        <div>시도 : {tries.length}</div>
        <ul>
            {tries.map( (value, index) => {
                return (
                    <Try key={`${index + 1}차 시도 :`} tryInfo={value} index={index}/>
                );
            })}
        </ul>
        </>
    );
}

    


export default NumberBaseball;