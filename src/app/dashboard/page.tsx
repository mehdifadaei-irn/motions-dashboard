"use client";
import { Users, Warehouse } from "lucide-react";
import { Area, AreaChart } from "recharts";

import BigAreaChart from "@/components/dashboardSection/BigAreaChart";
import RadarChartMain from "@/components/dashboardSection/RadarChart";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const data = [
  {
    name: "Page A",
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const data2 = [
  {
    name: "Page A",
    uv: 3000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 2540,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 1930,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 1780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 3890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 4390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const Dashboard = () => {
  return (
    <section className="w-full h-full pt-10 2xl:px-20 lg:px-14 sm:px-7 px-1 ">
      <div className="flex flex-col w-full h-full gap-y-7">
        {/*  */}
        <div className="flex lg:flex-row flex-col justify-between lg:gap-y-0 gap-y-10 ">
          <div className="flex bg-white rounded-sm px-4 py-2 gap-x-6 lg:w-[44%] w-full  justify-between ">
            <div className="flex gap-x-5 md:mr-14 mr-4">
              <div className="bg-blue-500/20 rounded-full p-[4px] mt-px cursor-pointer h-fit flex items-center justify-center">
                <Warehouse size={18} className=" text-blue-500  " />
              </div>
              <div className="flex flex-col items-start gap-y-3">
                <span className="font-normal tracking-tight text-lg">
                  Number of companies
                </span>
                <span className="font-bold text-2xl ">30</span>
              </div>
            </div>

            <div className="mr-2 max-sm:w-[31%]">
              <ChartContainer
                config={chartConfig}
                className="2xl:min-h-[90px] lg:min-h-[60px] min-h-[90px] 2xl:min-w-[170px] scale-x-150 w-full"
              >
                <AreaChart
                  width={700}
                  height={400}
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </div>
          <div className="flex bg-white rounded-sm px-4 py-2 gap-x-6 lg:w-[43%] w-full  justify-between ">
            <div className="flex gap-x-5 mr-14">
              <div className="bg-green-500/20 rounded-full p-[4px] mt-px cursor-pointer h-fit flex items-center justify-center">
                <Users size={18} className=" text-green-500  " />
              </div>
              <div className="flex flex-col items-start gap-y-3">
                <span className="font-normal tracking-tight text-lg">
                  Number of contacts
                </span>
                <span className="font-bold text-2xl ">387</span>
              </div>
            </div>

            <div className="mr-2 max-sm:w-[31%]">
              <ChartContainer
                config={chartConfig}
                className="2xl:min-h-[90px] lg:min-h-[60px] min-h-[90px] 2xl:min-w-[170px] scale-x-150 w-full "
              >
                <AreaChart
                  width={700}
                  height={400}
                  data={data2}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#22c55e"
                    fill="#22c55e"
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex lg:flex-row gap-x-10 flex-col justify-between lg:gap-y-0 gap-y-10  ">
          <RadarChartMain />
          <BigAreaChart />
        </div>
        <div>{/* <h1>hello world</h1> */}</div>
        {/* <Dommyh/> */}
      </div>
    </section>
  );
};

export default Dashboard;

function Dommyh() {
  return (
    <div className="h-full w-full">
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        consequuntur provident rem distinctio excepturi repellat eveniet at,
        nemo eos laboriosam sapiente perspiciatis molestiae tempore consequatur
        natus assumenda! Enim, corporis temporibus.
      </h1>
    </div>
  );
}
