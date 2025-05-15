'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Title</h1>
      <p className="text-lg mb-8">review test</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Card title="컴포넌트 예시">
          <p className="mb-4">card component</p>
          <div className="flex space-x-2">
            <Button variant="primary">기본 버튼</Button>
            <Button variant="secondary">보조 버튼</Button>
            <Button variant="outline">아웃라인 버튼</Button>
          </div>
        </Card>
        
        <Card title="카운터 예시">
          <p className="mb-4">현재 카운트: {count}</p>
          <div className="flex space-x-2">
            <Button onClick={() => setCount(count + 1)}>증가</Button>
            <Button onClick={() => setCount(count - 1)} variant="secondary">감소</Button>
            <Button onClick={() => setCount(0)} variant="outline">초기화</Button>
          </div>
        </Card>
      </div>
    </main>
  );
} 