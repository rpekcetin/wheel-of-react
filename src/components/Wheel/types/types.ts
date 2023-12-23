export type PieChartProps = {
    wheelData?: { color: string; text: string }[];
    size: number;
    selectedDataIndex?: number;
    fontWeight?: string | number;
    fontFamily?: string;
    fontSize?: string | number;
    onFinishedRotation?: () => void;
};