import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {

    const studentMarks = [
        {
          id: 1,
          name: "Alice Johnson",
          dataStructures: 85,
          algorithms: 78,
          webDevelopment: 92
        },
        {
          id: 2,
          name: "Bob Smith",
          dataStructures: 70,
          algorithms: 82,
          webDevelopment: 88
        },
        {
          id: 3,
          name: "Charlie Brown",
          dataStructures: 92,
          algorithms: 90,
          webDevelopment: 75
        },
        {
          id: 4,
          name: "David Williams",
          dataStructures: 60,
          algorithms: 75,
          webDevelopment: 80
        },
        {
          id: 5,
          name: "Emily Davis",
          dataStructures: 78,
          algorithms: 88,
          webDevelopment: 95
        },
        {
          id: 6,
          name: "Fiona Miller",
          dataStructures: 85,
          algorithms: 80,
          webDevelopment: 70
        },
        {
          id: 7,
          name: "George Anderson",
          dataStructures: 95,
          algorithms: 92,
          webDevelopment: 85
        },
        {
          id: 8,
          name: "Hannah Wilson",
          dataStructures: 72,
          algorithms: 68,
          webDevelopment: 78
        },
        {
          id: 9,
          name: "Isaac Martinez",
          dataStructures: 88,
          algorithms: 95,
          webDevelopment: 88
        },
        {
          id: 10,
          name: "Jessica Taylor",
          dataStructures: 65,
          algorithms: 70,
          webDevelopment: 60
        }
      ];
      
      

    return (
        <div className='mt-10'>

            <LineChart width={1000} height={300} data={studentMarks}>
            

            <Line stroke="#8884d8" dataKey="dataStructures"></Line>
            <Line dataKey="algorithms"></Line>
            <Line stroke="#82ca9d" dataKey="webDevelopment"></Line>
            <XAxis dataKey="name" />
            <YAxis dataKey="id" />
            <Tooltip />
            
            
            </LineChart>

            
            
        </div>
    );
};

export default Dashboard;