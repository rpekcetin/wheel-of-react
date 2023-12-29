import React, { useState, useRef, useEffect } from 'react';
import '../css/Wheel.css'
import Drop from '../image/drop.png'
import { PieChartProps } from '../types/types';
import "@fontsource/quicksand";

const Wheel: React.FC<PieChartProps> = ({ size, wheelData, selectedDataIndex, onFinishedRotation, fontSize, fontWeight, fontFamily }) => {

  const exampleData = [
    { color: '#fa7890', text: 'Text 1' },
    { color: '#7896fa', text: 'Text 2' },
    { color: '#78fa78', text: 'Text 3' },
    { color: '#faf378', text: 'Text 4' },
    { color: '#facd5c', text: 'Text 5' },
    { color: '#fa78dc', text: 'Text 6' },
  ];
  const data = wheelData ?? exampleData
  const sizes = size ?? 250;
  const radius = sizes / 2;
  const total = data.length;
  const sliceDegree = 360 / total;
  const pieRef = useRef<SVGSVGElement | null>(null);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (pieRef.current) {
      pieRef.current.style.transform = `rotate(${currentRotation}deg)`;
    }
  }, [currentRotation]);

  const startRotation = () => {
    if (isAnimating || !pieRef.current) return;

    setIsAnimating(true);
    const max: number = data.length
    const targetAngle = 360 - (selectedDataIndex ?? Math.floor(Math.random() * (max - 1)) * sliceDegree) - (sliceDegree / 2);
    const rotation = currentRotation % 360;
    const additionalRotation = rotation > targetAngle ? 360 - rotation + targetAngle : targetAngle - rotation;
    const newRotation = currentRotation + additionalRotation + 360 * 3; // Additional 3 full spins

    pieRef.current.style.transition = `transform 3s ease-out`;
    pieRef.current.style.transform = `rotate(${newRotation}deg)`;

    setTimeout(() => {
      setIsAnimating(false);
      setCurrentRotation(newRotation);
      //onFinishedRotation();
    }, 3000);
  };

  return (
    <div className='container'>
      <svg
        ref={pieRef ?? null}
        width={sizes}
        height={sizes}
        viewBox={`0 0 ${sizes} ${sizes}`}
        style={{ transformOrigin: 'center' }}
      >
        {data.map((item, index) => {
          const startAngle = sliceDegree * index;
          const endAngle = startAngle + sliceDegree;
          const midAngleRadians = Math.PI * (startAngle + endAngle) / 360;

          const startX = radius + radius * Math.cos(Math.PI * startAngle / 180);
          const startY = radius + radius * Math.sin(Math.PI * startAngle / 180);
          const endX = radius + radius * Math.cos(Math.PI * endAngle / 180);
          const endY = radius + radius * Math.sin(Math.PI * endAngle / 180);
          const textX = radius + (radius / 2) * Math.cos(midAngleRadians);
          const textY = radius + (radius / 2) * Math.sin(midAngleRadians);

          return (
            <g key={index}>
              <path
                d={`M ${radius},${radius} L ${startX},${startY} A ${radius},${radius} 0 0 1 ${endX},${endY} z`}
                fill={item.color}
              />
              <text
                x={textX}
                y={textY}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={fontSize ?? '14px'}
                fill='black'
                fontWeight={fontWeight}
                fontFamily={fontFamily ?? 'QuickSand'}
                style={{ transform: `rotate(${startAngle + sliceDegree / 2}deg)`, transformOrigin: `${textX}px ${textY}px` }}
              >
                {item.text}
              </text>
            </g>
          );
        })}
      </svg>
      <button className='spin_button' onClick={startRotation} disabled={isAnimating}>
        <img src={Drop} style={{ marginLeft: '8px', width: '32px', transform: 'rotate(90deg)' }} />
      </button>
    </div>
  );
};

export default Wheel;

// const data = [
//     { color: 'red', text: 'Text 1' },
//     { color: 'blue', text: 'Text 2' },
//     { color: 'green', text: 'Text 3' },
//     { color: 'yellow', text: 'Text 4' },
//     { color: 'orange', text: 'Text 5' },
//     { color: 'pink', text: 'Text 6' },
//     { color: 'purple', text: 'Text 7' },
//     { color: 'grey', text: 'Text 8' },
//     { color: 'black', text: 'Text 9' },
//     { color: 'cyan', text: 'Text 10' },
//     { color: 'lemon', text: 'Text 11' },
//     { color: 'cream', text: 'Text 12' },
//     // Add more objects for more slices
//   ];

//   const [selectedDataIndex, setSelectedDataIndex] = useState(0); // Index of the data slice to stop at

//   const handleFinishedRotation = () => {
//     console.log("Finished rotation at data index:", selectedDataIndex);
//     // You can update the selectedDataIndex here if needed
//   };

//   return (
//     <>
//       <PieChart
//         data={data}
//         selectedDataIndex={selectedDataIndex}
//         onFinishedRotation={handleFinishedRotation}
//       />
//     </>
//   )
// }