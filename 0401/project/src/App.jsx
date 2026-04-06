import { useState } from 'react'
import './App.css'

// 1. 개별 기록 아이템 컴포넌트 (2개 이상의 props 사용: data, onDelete)
function RecordItem({ data, onDelete }) {
  return (
    <div className={`record-item ${data.category}`}>
      <span>[{data.category}]</span>
      <strong>{data.title}</strong>
      <small>{data.date}</small>
      <button onClick={() => onDelete(data.id)}>삭제</button>
    </div>
  );
}

// 2. 헤더 컴포넌트
function Header({ user }) {
  return (
    <header>
      <h1>{user}님의 자기계발 기록장</h1>
    </header>
  );
}

// 3. 기록 입력 폼 컴포넌트
function RecordForm({ onAdd }) {
  const [text, setText] = useState('');
  const [cat, setCat] = useState('독서');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAdd(text, cat);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="record-form">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="어떤 활동을 하셨나요?"
      />
      <select value={cat} onChange={(e) => setCat(e.target.value)}>
        <option value="독서">독서</option>
        <option value="공부">공부</option>
        <option value="운동">운동</option>
      </select>
      <button type="submit">추가</button>
    </form>
  );
}

// 4. 통계 요약 컴포넌트
function Summary({ total }) {
  return (
    <div className="summary">
      <p>현재까지 총 <strong>{total}</strong>개의 활동을 기록했습니다.</p>
    </div>
  );
}

// 5. 메인 App 컴포넌트
function App() {
  const [records, setRecords] = useState([
    { id: 1, title: '리액트 컴포넌트 공부', category: '공부', date: '2026-04-06' },
    { id: 2, title: '스쿼트 100개', category: '운동', date: '2026-04-07' }
  ]);

  const addRecord = (title, category) => {
    const newRecord = {
      id: Date.now(),
      title,
      category,
      date: new Date().toLocaleDateString()
    };
    setRecords([newRecord, ...records]);
  };

  const deleteRecord = (id) => {
    setRecords(records.filter(r => r.id !== id));
  };

  return (
    <div className="container">
      <Header user="대현" />
      <Summary total={records.length} />
      <RecordForm onAdd={addRecord} />

      <section className="record-list">
        {records.map(item => (
          <RecordItem
            key={item.id}
            data={item}
            onDelete={deleteRecord}
          />
        ))}
      </section>
    </div>
  )
}

export default App