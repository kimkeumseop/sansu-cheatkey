'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SansuFormPage() {
  const router = useRouter();
  const [birthYear, setBirthYear] = useState('1990');
  const [category, setCategory] = useState('합격');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/sansu/result?birthYear=${birthYear}&category=${category}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center max-w-md mx-auto bg-white shadow-xl p-6 pt-12">
      <h1 className="text-2xl font-bold mb-6 text-center">내 운명의 산 찾기</h1>
      
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <div>
          <label className="block text-sm font-bold mb-2 text-gray-700">태어난 연도 (YYYY)</label>
          <input 
            type="number" 
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
            required
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2 text-gray-700">어떤 영험한 기운이 필요한가요?</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
          >
            <option value="합격">합격/학업/수험</option>
            <option value="재물">재물/사업/재수</option>
            <option value="인연">인연/결혼/새출발</option>
            <option value="건강">건강/치유/장수</option>
            <option value="가족">가족/가정안정</option>
            <option value="결단">결단/도전/이직/승진</option>
            <option value="치유">정화/치유/휴식</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="w-full bg-[#7C3AED] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-purple-700 transition"
        >
          결과 보기
        </button>
      </form>
    </div>
  );
}
