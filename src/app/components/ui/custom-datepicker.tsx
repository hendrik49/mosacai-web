"use client";

import { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CustomDatePickerProps {
  value: string;
  onChange: (date: string) => void;
  placeholder?: string;
  className?: string;
}

export const CustomDatePicker = ({ 
  value, 
  onChange, 
  placeholder = "Select date",
  className = ""
}: CustomDatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value);

  // Generate quick options
  const quickOptions = [
    { label: 'ASAP', value: getDateString(7) },
    { label: '2 weeks', value: getDateString(14) },
    { label: '1 month', value: getDateString(30) },
    { label: '2 months', value: getDateString(60) },
    { label: '3 months', value: getDateString(90) },
    { label: 'Custom', value: 'custom' }
  ];

  function getDateString(daysFromNow: number): string {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    return date.toISOString().split('T')[0];
  }

  const formatDisplayDate = (dateStr: string) => {
    if (!dateStr) return placeholder;
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const handleOptionSelect = (option: any) => {
    if (option.value === 'custom') {
      // Keep dropdown open for custom date input
      return;
    }
    setSelectedDate(option.value);
    onChange(option.value);
    setIsOpen(false);
  };

  const handleCustomDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    onChange(newDate);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-dark-200/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors flex items-center justify-between"
      >
        <div className="flex items-center space-x-3">
          <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span className={`${selectedDate ? 'text-white' : 'text-gray-400'} text-left truncate`}>
            {selectedDate ? formatDisplayDate(selectedDate) : 'Completion date *'}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-dark-200 border border-white/20 rounded-xl shadow-xl overflow-hidden"
          >
            <div className="p-2">
              <div className="text-xs text-gray-400 px-3 py-2 font-medium">
                Quick Options
              </div>
              {quickOptions.map((option, index) => (
                <motion.button
                  key={index}
                  type="button"
                  whileHover={{ backgroundColor: 'rgba(108, 92, 231, 0.1)' }}
                  onClick={() => handleOptionSelect(option)}
                  className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white rounded-lg transition-colors"
                >
                  {option.label}
                  {option.value !== 'custom' && (
                    <span className="text-gray-500 ml-2 text-xs">
                      ({formatDisplayDate(option.value)})
                    </span>
                  )}
                </motion.button>
              ))}
              
              <div className="border-t border-white/10 mt-2 pt-2">
                <div className="text-xs text-gray-400 px-3 py-1 font-medium">
                  Custom Date
                </div>
                <input
                  type="date"
                  onChange={handleCustomDateChange}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full px-3 py-2 bg-transparent text-white text-sm focus:outline-none [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-70"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}; 