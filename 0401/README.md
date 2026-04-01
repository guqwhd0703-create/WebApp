# 🧩 React 기본 개념 정리

## 1️⃣ Component (컴포넌트)

컴포넌트는 **재사용 가능한 UI 코드 블록**입니다.

```jsx
function Button() {
  return <button>클릭</button>;
}
```

👉 여러 곳에서 `<Button />`처럼 사용할 수 있습니다.

---

## 2️⃣ Element (엘리먼트)

엘리먼트는 **화면에 표시될 UI 요소**입니다.

```jsx
const element = <h1>Hello</h1>;
```

👉 실제 화면에 그려질 대상입니다.

---

## 3️⃣ Props (프롭스)

Props는 **컴포넌트에 데이터를 전달하는 방법**입니다.

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

👉 사용 예:

```jsx
<Greeting name="대현" />
```

👉 결과:

```
Hello, 대현
```

---

## 🔥 핵심 정리

* Component 👉 UI를 만드는 함수
* Element 👉 화면에 그려지는 결과물
* Props 👉 컴포넌트에 전달하는 데이터

---

## 💡 한 줄 요약

👉 컴포넌트 = 틀
👉 엘리먼트 = 결과
👉 프롭스 = 데이터 전달
