import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiBarChart2, FiInfo, FiPieChart } from "react-icons/fi";
import { Line, LineChart } from "recharts";
import { GhostButton } from "../../components/button";
import { Card } from "../../components/card";
import { Circle } from "../../components/circle";
import GaugeChart from "../../components/gaugeChart";
import { PageHeader } from "../../components/pageHeader.tsx";
import SlideCards from "../../components/slideCards";
import { useServices } from "../../contexts/service";
import { useTheme } from "../../contexts/theme";
import Revenue from "../../entities/Revenue";
import { StyledDashboardContent } from "./styles";

const DashboardContent = () => {
  const { dashboardService } = useServices();
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>();
  const dashboardContainerRef = useRef<HTMLElement>();
  const [allRevenues, setAllRevenues] = useState<Revenue[][]>();
  const [chartDataRevenues, setChartDataRevenues] = useState<object[]>([]);
  const [goalPercentage, setGoalPercentage] = useState<number>(0);

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
  }, []);

  return (
    <StyledDashboardContent ref={containerRef}>
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
          <main ref={dashboardContainerRef}>
            {chartDataRevenues.length ? (
              <LineChart
                width={dashboardContainerRef.current?.clientWidth}
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
        <Card style={{ width: "70%" }}>
          <header>Visão Geral</header>
        </Card>
        <Card style={{ width: "30%" }}>
          <header>Lembretes</header>
        </Card>
      </section>

      <section>
        <Card>
          <header>Visão Geral</header>
        </Card>
      </section>
    </StyledDashboardContent>
  );
};

export default DashboardContent;
