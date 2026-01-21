import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ElasticHueSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
}

const ElasticHueSlider: React.FC<ElasticHueSliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 360,
  step = 1,
  label = 'Adjust Hue',
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const progress = ((value - min) / (max - min));
  const thumbPosition = progress * 100;

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="relative w-full max-w-xs flex flex-col items-center mb-8" ref={sliderRef}>
      {label && (
        <label htmlFor="hue-slider-native" className="text-neon-green text-sm mb-3 font-semibold">
          {label}
        </label>
      )}
      <div className="relative w-full h-5 flex items-center">
        <input
          id="hue-slider-native"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          className="absolute inset-0 w-full h-full appearance-none bg-transparent cursor-pointer z-20"
          style={{ WebkitAppearance: 'none' }}
        />

        <div className="absolute left-0 w-full h-1 bg-neon-dark rounded-full z-0 border border-neon-blue"></div>

        <div
          className="absolute left-0 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full z-10"
          style={{ width: `${thumbPosition}%` }}
        ></div>

        <motion.div
          className="absolute top-1/2 transform -translate-y-1/2 z-30"
          style={{ left: `${thumbPosition}%` }}
          animate={{ scale: isDragging ? 1.4 : 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: isDragging ? 20 : 30 }}
        >
          <div className="w-6 h-6 bg-gradient-to-br from-neon-green to-neon-blue rounded-full shadow-neon-green transform -translate-x-1/2 border-2 border-neon-green" />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.2 }}
          className="text-sm text-neon-purple mt-3 font-bold"
        >
          {value}°
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ElasticHueSlider;
