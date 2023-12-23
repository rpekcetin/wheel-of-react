import React from 'react';

type PieChartProps = {
    data?: {
        color: string;
        text: string;
    }[];
    selectedDataIndex?: number;
    onFinishedRotation?: () => void;
};
declare const PieChart: React.FC<PieChartProps>;

export { PieChart as Wheel };
