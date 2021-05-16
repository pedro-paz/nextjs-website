import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  FiBarChart2,
  FiInfo,
  FiMoreHorizontal,
  FiPieChart,
} from "react-icons/fi";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { GhostButton } from "../../components/button";
import { Card } from "../../components/card";
import { Circle } from "../../components/circle";
import GaugeChart from "../../components/gaugeChart";
import { PageHeader } from "../../components/pageHeader.tsx";
import ProgressBar from "../../components/progressBar";
import SlideCards from "../../components/slideCards";
import { Table } from "../../components/table";
import { StyledTable } from "../../components/table/styles";
import { useServices } from "../../contexts/service";
import { useTheme } from "../../contexts/theme";
import Revenue from "../../entities/Revenue";
import Seller from "../../entities/Seller";
import { formatMoney } from "../../utils/fn";
import { StyledDashboardContent } from "./styles";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
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

const DashboardContent = () => {
  const { dashboardService } = useServices();
  const { theme } = useTheme();

  const lineChartContainerRef = useRef<HTMLElement>();
  const barChartContainerRef = useRef<HTMLElement>();
  const [allRevenues, setAllRevenues] = useState<Revenue[][]>();
  const [chartDataRevenues, setChartDataRevenues] = useState<object[]>([]);
  const [goalPercentage, setGoalPercentage] = useState<number>(0);
  const [sellers, setSellers] = useState<Seller[]>();

  useEffect(() => {
    var result = [];
    allRevenues?.forEach((arr, i) => {
      arr.forEach((x, j) => {
        result[j] = {
          ...result[j],
          [i]: x.Amount,
        };
      });
    });
    setChartDataRevenues(result);
  }, [allRevenues]);

  useEffect(() => {
    setAllRevenues(dashboardService.getRevenues());
    setGoalPercentage(dashboardService.getGoalPercentage());
    setSellers(dashboardService.getSellers());
  }, []);

  return (
    <StyledDashboardContent>
      <PageHeader>Dashboard</PageHeader>

      <section style={{ height: 357 }}>
        <Card style={{ flexGrow: 1 }}>
          <header>
            <span>Vendas Gerais</span>
            <section style={{ display: "flex" }}>
              <GhostButton style={{ marginRight: 20, height: 18 }}>
                <Circle
                  width={12}
                  color={theme.gradient[2]}
                  style={{ top: 2, position: "relative" }}
                />
                <span style={{ marginLeft: 7 }}>Esta Semana</span>
              </GhostButton>

              <GhostButton style={{ height: 18 }}>
                <Circle
                  width={12}
                  color={theme.lightColor}
                  style={{ top: 2, position: "relative" }}
                />
                <span style={{ marginLeft: 7 }}>Ult. Semana</span>
              </GhostButton>
            </section>
          </header>
          <main ref={lineChartContainerRef}>
            {chartDataRevenues.length ? (
              <LineChart
                width={lineChartContainerRef.current?.clientWidth}
                height={300}
                data={[...chartDataRevenues]}
              >
                <defs>
                  <linearGradient
                    id="colorUv"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor={theme.gradient[0]} />
                    <stop offset="50%" stopColor={theme.gradient[1]} />
                    <stop offset="100%" stopColor={theme.gradient[2]} />
                  </linearGradient>
                </defs>

                <Line
                  type="monotone"
                  dataKey="1"
                  animateNewValues
                  stroke={theme.lightColor}
                  dot={false}
                  strokeWidth={4}
                />
                <Line
                  type="monotone"
                  dataKey="0"
                  animateNewValues
                  stroke="url(#colorUv)"
                  dot={false}
                  strokeWidth={5}
                />
              </LineChart>
            ) : (
              <></>
            )}
          </main>
        </Card>

        <div>
          <SlideCards>
            <header>
              Meta
              <div>
                <GhostButton>
                  <FiInfo size={21} />
                </GhostButton>
              </div>
            </header>

            <GaugeChart
              percent={goalPercentage}
              width={220}
              stroke={3}
              style={{ margin: "0 auto 0 auto" }}
            >
              <FiBarChart2 color={theme.gradient[2]} size={70} />
            </GaugeChart>
          </SlideCards>
        </div>
      </section>

      <section>
        <Card style={{ width: "40%" }}>
          <header>
            <span>Atividades</span>
            <div style={{ marginTop: -2 }}>
              <GhostButton>
                <FiMoreHorizontal size={28} />
              </GhostButton>
            </div>
          </header>
          <main ref={barChartContainerRef}>
            <BarChart
              width={barChartContainerRef.current?.clientWidth}
              height={300}
              data={data}
              barSize={8}
            >
              <Bar
                radius={30}
                dataKey="pv"
                animationDuration={1500}
                width={10}
                fill={theme.gradient[0]}
              />
              <Bar
                animationDuration={1500}
                radius={30}
                dataKey="uv"
                fill={theme.gradient[1]}
              />
            </BarChart>
          </main>
        </Card>
        <Table
          style={{ width: "60%" }}
          data={sellers}
          columns={[
            { propName: "Id" },
            { propName: "Name", header: "Vendedor" },
            {
              header: "Meta",
              resolveWith: (row) => (
                <ProgressBar
                  style={{ marginTop: 10, width: "70%", height: 7 }}
                  percent={row.Goal}
                />
              ),
            },
            {
              propName: "Status",
            },
          ]}
        />
      </section>
    </StyledDashboardContent>
  );
};

export default DashboardContent;
