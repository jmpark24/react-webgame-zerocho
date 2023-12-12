const React = require('react');
const ReactDom = require('react-dom')
const { useState, useRef } = React;



const GuGuDan=() => {
        console.log("렌더링");
        const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
        const [second, setSecond] = useState(
          Math.ceil(Math.random() * 9)
        );
        const [value, setValue] = useState("");
        const [result, setResult] = useState("");
        const focusTest = useRef(null);
        return (
          <>
            <div>
              {first} x {second} 는?
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();

                if (parseInt(value) === first * second) {
                  setResult(() => {
                    if (value) {
                      return first + " x " + second + " = " + value + " 정답! ";
                    }
                  });
                  setFirst(Math.ceil(Math.random() * 9));
                  setSecond(Math.ceil(Math.random() * 9));
                  setValue("");
                  focusTest.current.focus();
                } else {
                  setResult("땡!");
                  setValue("");
                  focusTest.current.focus();
                }
              }}
            >
              <input
                ref={focusTest}
                type="number"
                value={value}
                onChange={(event) => {
                  setValue(event.target.value);
                }}
              />
              <button>입력!</button>
            </form>
            <div>{result}</div>
            </>
        );
      }

   export default GuGuDan