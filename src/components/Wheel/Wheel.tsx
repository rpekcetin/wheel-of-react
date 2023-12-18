import React, { useState, useRef, useEffect } from 'react';

type PieChartProps = {
  data?: { color: string; text: string }[];
  selectedDataIndex?: number;
  onFinishedRotation?: () => void;
};

const PieChart: React.FC<PieChartProps> = ({ selectedDataIndex, onFinishedRotation }) => {

  const data = [
    { color: 'red', text: 'Text 1' },
    { color: 'blue', text: 'Text 2' },
    { color: 'green', text: 'Text 3' },
    { color: 'yellow', text: 'Text 4' },
    { color: 'orange', text: 'Text 5' },
    { color: 'pink', text: 'Text 6' },
    { color: 'purple', text: 'Text 7' },
    { color: 'grey', text: 'Text 8' },
    { color: 'black', text: 'Text 9' },
    { color: 'cyan', text: 'Text 10' },
    { color: 'lemon', text: 'Text 11' },
    { color: 'cream', text: 'Text 12' },
    // Add more objects for more slices
  ];

  const size = 200; // Size of the SVG
  const radius = size / 2;
  const total = data.length;
  const sliceDegree = 360 / total;
  const pieRef = useRef<SVGSVGElement>(null);
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

    const targetAngle = 360 - (selectedDataIndex ?? 0 * sliceDegree) - (sliceDegree / 2);
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
    <>
      <svg
        ref={pieRef}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
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
                fontSize="10"
                fill='white'
                style={{ transform: `rotate(${startAngle + sliceDegree / 2}deg)`, transformOrigin: `${textX}px ${textY}px` }}
              >
                {item.text}
              </text>
            </g>
          );
        })}
      </svg>
      <button onClick={startRotation} disabled={isAnimating}>Spin</button>
    </>
  );
};

export default PieChart;

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