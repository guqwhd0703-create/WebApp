import { useState } from "react";

// 1. Counter 컴포넌트
function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
  );
}

// 2. Text Input 컴포넌트
function MyInput() {
  const [text, setText] = useState("hello");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText("hello")}>Reset</button>
    </>
  );
}

// 3. Checkbox 컴포넌트
function MyCheckbox() {
  const [liked, setLiked] = useState(true);

  function handleChange(e) {
    setLiked(e.target.checked);
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={liked}
          onChange={handleChange}
        />
        I liked this
      </label>
      <p>You {liked ? "liked" : "did not like"} this.</p>
    </>
  );
}

// 4. Form 컴포넌트
function Form() {
  const [name, setName] = useState("Taylor");
  const [age, setAge] = useState(42);

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setAge(age + 1)}>
        Increment age
      </button>
      <p>
        Hello, {name}. You are {age}.
      </p>
    </>
  );
}

// 🔥 메인 App 컴포넌트
export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Hook 예제 모음</h1>

      <h3>1. Counter</h3>
      <Counter />

      <h3>2. Input</h3>
      <MyInput />

      <h3>3. Checkbox</h3>
      <MyCheckbox />

      <h3>4. Form</h3>
      <Form />
    </div>
  );
}