import React, { Component } from 'react';
import { render } from 'react-dom';

// .클래스의 경우 -> constructor -> render => ref -> componentDidMount
// -> (setState/props 바뀔 때 -> shouldCompoenetUpdate(true) -> render -> componentDidUpdate)
// 부모가 나를 없앳을 때 -> componentWillUnmount -> 소멸

const rspCoords = {
    바위 : '0',
    가위: '-142px',
    보 :'-284px',
};

const scores = {
    가위: 1,
    바위 : 0,
    보 : -1,
}
const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find((v) => {
        return v[1] === imgCoord;
    })[0];
}

class RSP extends Component {
    state = {
        result : '',
        imgCoord : 0,
        score : 0,
        mode: 'start',
    };
    interval;
    componentDidMount() { // 컴포넌트가 첫 렌더링된 후, 비동기 요청을 많이 해요
        this.interval = setInterval(this.changeHand, 100);
    }
    
    // componentDidUpdate() { // 리랜더링 후

    // }
    componentWillUnmount() { // 컴포넌트가 제거되기 직전, 비동기 요청 정리를 많이해요
        clearInterval(this.interval);
    }
    changeHand = () => {
        const { imgCoord } = this.state;            
        if(imgCoord == rspCoords.바위) {
            this.setState( {
                imgCoord: rspCoords.가위,
            });
        } else if(imgCoord == rspCoords.가위) {
            this.setState( {
                imgCoord: rspCoords.보,
            });
        }
        else if(imgCoord == rspCoords.보) {
            this.setState( {
                imgCoord: rspCoords.바위,
            });
        }
    }
    onClickBtn = (choice) =>() => {
        const { imgCoord, mode } = this.state;
        clearInterval(this.interval);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if(mode === 'start'){
        if (diff === 0) {
            this.setState( {
                result: '비겼습니다.',
            });
        } else if ([-1, 2].includes(diff)) {
            this.setState((prevState) => {
                return{
                    result: '이겼습니다!!',
                    score: prevState.score + 1,
                }
            });
        } else {
            this.setState((prevState) => {
                return{
                    result: '졌습니다..',
                    score: prevState.score - 1,
                }
            });
        }}
        this.setState({
            mode : 'end'
        })
    };
    render() {
        const { result, score, imgCoord, mode } = this.state;
        return(
            <>
                <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
                <div>
                    <button id='rock' className='btn' onClick={this.onClickBtn('바위')}>바위</button>
                    <button id='scissor' className='btn' onClick={this.onClickBtn('가위')}>가위</button>
                    <button id='paper' className='btn' onClick={this.onClickBtn('보')}>보</button>
                    
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
                {
                        mode === 'end' 
                        ? <button onClick={(e) => {
                            this.setState({
                                mode : 'start'
                            });
                            this.componentDidMount();
                        }}>한판 더 하기</button>
                        : null
                    }
            </>
        );
    }
}

export default RSP;