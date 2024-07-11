
import { ResponsivePie } from '@nivo/pie';

const data = [
    {
        "id": "Em dia",
        "label": "Em dia",
        "value": 355,
        "color": "hsl(0, 70%, 50%)"
    },
    {
        "id": "Atencão",
        "label": "Atencão",
        "value": 260,
        "color": "hsl(90, 70%, 50%)"
    },
    {
        "id": "Atrasada",
        "label": "Em Atrasada",
        "value": 200,
        "color": "hsl(180, 70%, 50%)"
    },
    {
        "id": "Em progresso",
        "label": "Em progresso",
        "value": 150,
        "color": "hsl(270, 70%, 50%)"
    },

];

const MyPieChart = () => (
    <div  style={{ height: 400, width: '50%' }}>
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={['#5EDE80' , '#F3C33E', '#EF7071', '#60A5FA'  ]}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            arcLabelsTextColor="#333333"
            arcLabelsSkipAngle={10}
     
        />
    </div>
);

export default MyPieChart;
