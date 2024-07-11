import { ResponsiveLine } from '@nivo/line';

type DataPoint = {
    x: string;
    y: number;
};

type Series = {
    id: string;
    data: DataPoint[];
};

const data: Series[] = [
    {
        id: "Manutenção Preventiva",
        data: [
            { x: "Jan", y: 1200 },
            { x: "Feb", y: 1100 },
            { x: "Mar", y: 1300 },
            { x: "Apr", y: 1500 },
            { x: "May", y: 1600 },
            { x: "Jun", y: 1400 },
            { x: "Jul", y: 1700 },
            { x: "Aug", y: 1800 },
            { x: "Sep", y: 1900 },
            { x: "Oct", y: 2000 },
            { x: "Nov", y: 2100 },
            { x: "Dec", y: 2200 },
        ],
    },
    {
        id: "Manutenção Corretiva",
        data: [
            { x: "Jan", y: 800 },
            { x: "Feb", y: 900 },
            { x: "Mar", y: 950 },
            { x: "Apr", y: 1100 },
            { x: "May", y: 1000 },
            { x: "Jun", y: 1150 },
            { x: "Jul", y: 1200 },
            { x: "Aug", y: 1300 },
            { x: "Sep", y: 1350 },
            { x: "Oct", y: 1400 },
            { x: "Nov", y: 1500 },
            { x: "Dec", y: 1600 },
        ],
    },
];

export default function MyResponsiveLine() {
    return (
        <div style={{ height: 350, width: '50%' }}>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false,
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Meses',
                    legendOffset: 36,
                    legendPosition: 'middle',
                    truncateTickAt: 0,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Gasto (R$)',
                    legendOffset: -40,
                    legendPosition: 'middle',
                    truncateTickAt: 0,
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="data.yFormatted"
                pointLabelYOffset={-12}
                enableTouchCrosshair={true}
                useMesh={true}
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: -20,
                        itemsSpacing: 60,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
            />
        </div>
    );
}
