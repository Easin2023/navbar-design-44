import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
const Subject = () => {
     const studentScienceData = [
          { ID: 1, name: "Student A", math: 85, physics: 78, chemistry: 70 },
          { ID: 2, name: "Student B", math: 88, physics: 80, chemistry: 72 },
          { ID: 3, name: "Student C", math: 90, physics: 82, chemistry: 74 },
          { ID: 4, name: "Student D", math: 92, physics: 85, chemistry: 75 },
          { ID: 5, name: "Student E", math: 87, physics: 88, chemistry: 76 },
          { ID: 6, name: "Student F", math: 89, physics: 87, chemistry: 78 },
          { ID: 7, name: "Student G", math: 91, physics: 86, chemistry: 79 },
          { ID: 8, name: "Student H", math: 94, physics: 90, chemistry: 80 },
          { ID: 9, name: "Student I", math: 93, physics: 92, chemistry: 82 },
          { ID: 10, name: "Student J", math: 95, physics: 93, chemistry: 84 }
        ];
     return (
          <div>
               
               <LineChart width={600} height={400} data={studentScienceData}>
                    <CartesianGrid strokeDasharray='5 5'/>
               <XAxis dataKey='name'/>
               <YAxis/>
               <Line dataKey='math'></Line>
               <Line dataKey='physics'></Line>
               <Line dataKey='chemistry'></Line>
               </LineChart>
              
          </div>
     );
};

export default Subject;