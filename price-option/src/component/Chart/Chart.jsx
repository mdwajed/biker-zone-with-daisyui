import { LineChart, Line,XAxis,YAxis } from "recharts";
const Chart = () => {
  const MarksData = [
    {
      name: "Alice",
      physics_mark: 85,
      math_mark: 90,
      chemistry_mark: 75,
      biology_mark: 80,
    },
    {
      name: "Bob",
      physics_mark: 78,
      math_mark: 82,
      chemistry_mark: 85,
      biology_mark: 75,
    },
    {
      name: "Charlie",
      physics_mark: 90,
      math_mark: 85,
      chemistry_mark: 88,
      biology_mark: 92,
    },
    {
      name: "David",
      physics_mark: 82,
      math_mark: 80,
      chemistry_mark: 82,
      biology_mark: 88,
    },
    {
      name: "Emma",
      physics_mark: 88,
      math_mark: 92,
      chemistry_mark: 78,
      biology_mark: 85,
    },
    {
      name: "Frank",
      physics_mark: 75,
      math_mark: 88,
      chemistry_mark: 85,
      biology_mark: 90,
    },
    {
      name: "Grace",
      physics_mark: 80,
      math_mark: 78,
      chemistry_mark: 92,
      biology_mark: 78,
    },
    {
      name: "Henry",
      physics_mark: 92,
      math_mark: 85,
      chemistry_mark: 75,
      biology_mark: 82,
    },
    {
      name: "Ivy",
      physics_mark: 85,
      math_mark: 82,
      chemistry_mark: 80,
      biology_mark: 85,
    },
    {
      name: "Jack",
      physics_mark: 78,
      math_mark: 90,
      chemistry_mark: 90,
      biology_mark: 80,
    },
  ];

  return (
    <div>
      <LineChart width={800} height={400} data={MarksData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis ></YAxis>
        <Line dataKey="physics_mark" stroke="red"></Line>
        <Line dataKey="math_mark" stroke="blue"></Line>
        <Line dataKey="chemistry_mark" stroke="yellow"></Line>
        <Line dataKey="biology_mark" stroke="purple"></Line>
      </LineChart>
    </div>
  );
};

export default Chart;
