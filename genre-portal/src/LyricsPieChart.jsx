import { Pie, PieChart, Tooltip } from "recharts";

export default function LyricsPieChart(props) {
  const { data } = props;

  return (
    <PieChart width={730} height={400}>
      <Pie
        data={data}
        dataKey="probability"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={50}
        fill="#82ca9d"
        label={item => item.name}
      />
      <Tooltip />
    </PieChart>
  );
}
