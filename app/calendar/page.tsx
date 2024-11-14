"use client";

import React, { useState } from 'react';

interface Event {
    id: string;
    title: string;
    start: Date;
    end: Date;
    description: string;
    isReserved: boolean;
}

interface CalendarState {
    events: Event[];
    selectedDate: Date;
    isAdminView: boolean;
}

const CalendarManagement = () => {
    const [state, setState] = useState<CalendarState>({
        events: [],
        selectedDate: new Date(),
        isAdminView: false,
    });
    const [newEvent, setNewEvent] = useState({
        title: '',
        description: '',
        start: new Date(),
        end: new Date(),
    });

    // 曜日の配列
    const weekDays = ['日', '月', '火', '水', '木', '金', '土'];

    // カレンダーのグリッドを生成
    const generateCalendarGrid = () => {
        const today = new Date(state.selectedDate);
        const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
        const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

        let days = [];
        let day = new Date(firstDay);

        // 前月の日付を追加
        for (let i = 0; i < firstDay.getDay(); i++) {
            const prevDate = new Date(firstDay);
            prevDate.setDate(prevDate.getDate() - (firstDay.getDay() - i));
            days.push({
                date: new Date(prevDate),
                isCurrentMonth: false,
                events: getEventsForDate(prevDate)
            });
        }

        // 当月の日付を追加
        while (day <= lastDay) {
            days.push({
                date: new Date(day),
                isCurrentMonth: true,
                events: getEventsForDate(day)
            });
            day.setDate(day.getDate() + 1);
        }

        // 次月の日付を追加
        const remainingDays = 42 - days.length;
        for (let i = 1; i <= remainingDays; i++) {
            const nextDate = new Date(lastDay);
            nextDate.setDate(lastDay.getDate() + i);
            days.push({
                date: new Date(nextDate),
                isCurrentMonth: false,
                events: getEventsForDate(nextDate)
            });
        }

        return days;
    };

    const getEventsForDate = (date: Date) => {
        return state.events.filter(event =>
            event.start.toDateString() === date.toDateString()
        );
    };

    const handlePrevMonth = () => {
        setState(prev => ({
            ...prev,
            selectedDate: new Date(prev.selectedDate.getFullYear(), prev.selectedDate.getMonth() - 1)
        }));
    };

    const handleNextMonth = () => {
        setState(prev => ({
            ...prev,
            selectedDate: new Date(prev.selectedDate.getFullYear(), prev.selectedDate.getMonth() + 1)
        }));
    };

    const handleAddEvent = (e: React.FormEvent) => {
        e.preventDefault();

        const event: Event = {
            id: Math.random().toString(36).substr(2, 9),
            ...newEvent,
            isReserved: true,
        };

        setState(prev => ({
            ...prev,
            events: [...prev.events, event]
        }));

        setNewEvent({
            title: '',
            description: '',
            start: new Date(),
            end: new Date(),
        });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* カレンダーヘッダー */}
            <div className="bg-white rounded-t-xl shadow-sm">
                <div className="flex items-center justify-between p-4 border-b">
                    <button
                        onClick={handlePrevMonth}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        ←
                    </button>
                    <h2 className="text-xl font-semibold">
                        {state.selectedDate.getFullYear()}年 {state.selectedDate.getMonth() + 1}月
                    </h2>
                    <button
                        onClick={handleNextMonth}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        →
                    </button>
                </div>

                {/* 曜日ヘッダー */}
                <div className="grid grid-cols-7 bg-gray-50">
                    {weekDays.map(day => (
                        <div
                            key={day}
                            className="py-2 text-center text-sm font-medium text-gray-700"
                        >
                            {day}
                        </div>
                    ))}
                </div>

                {/* カレンダーグリッド */}
                <div className="grid grid-cols-7 gap-px bg-gray-200">
                    {generateCalendarGrid().map((day, index) => (
                        <div
                            key={index}
                            className={`min-h-[120px] bg-white p-2 ${
                                !day.isCurrentMonth ? 'text-gray-400' : ''
                            }`}
                        >
                            <div className="font-medium mb-1">
                                {day.date.getDate()}
                            </div>
                            {day.events.map(event => (
                                <div
                                    key={event.id}
                                    className="text-xs p-1 mb-1 rounded bg-blue-100 text-blue-800"
                                >
                                    {event.title}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* イベント追加フォーム */}
            <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">イベントを追加</h3>
                <form onSubmit={handleAddEvent} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            タイトル
                        </label>
                        <input
                            type="text"
                            value={newEvent.title}
                            onChange={e => setNewEvent(prev => ({ ...prev, title: e.target.value }))}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            説明
                        </label>
                        <textarea
                            value={newEvent.description}
                            onChange={e => setNewEvent(prev => ({ ...prev, description: e.target.value }))}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                開始日時
                            </label>
                            <input
                                type="datetime-local"
                                value={newEvent.start.toISOString().slice(0, 16)}
                                onChange={e => setNewEvent(prev => ({ ...prev, start: new Date(e.target.value) }))}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                終了日時
                            </label>
                            <input
                                type="datetime-local"
                                value={newEvent.end.toISOString().slice(0, 16)}
                                onChange={e => setNewEvent(prev => ({ ...prev, end: new Date(e.target.value) }))}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        イベントを追加
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CalendarManagement;
