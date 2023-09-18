import axios from "axios";
import { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Phone = () => {
  const [phone, setPhone] = useState([]);
  axios
    .get("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then((data) => {
      const phoneData = data.data.data.map((phone) => {
        const obj = {
          name: phone.phone_name,
          price: parseInt(phone.slug.split("-")[1]),
        };
        return obj;
      });
      setPhone(phoneData);
    });
//   console.log(phone)
  return (
    <div>
      <h1 className="text-4xl">{phone.length}</h1>
      <BarChart
        width={500}
        height={300}
        data={phone}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Phone;
