import React, { useCallback, useEffect, useRef, useState } from "react";
import { Line, LineChart } from "recharts";
import { Card } from "../../components/card";
import { Circle } from "../../components/circle";
import { PageHeader } from "../../components/pageHeader.tsx";
import SlideCards from "../../components/slideCards";
import { useServices } from "../../contexts/service";
import Revenue from "../../entities/Revenue";
import { StyledDashboardContent } from "./styles";

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknow",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];

const DashboardContent = () => {
  const { dashboardService } = useServices();
  const containerRef = useRef<HTMLDivElement>();
  const dashboardContainerRef = useRef<HTMLElement>();
  const [allRevenues, setAllRevenues] = useState<Revenue[][]>();
  const [chartDataRevenues, setChartDataRevenues] = useState<object[]>([]);

  const animateCards = useCallback(async () => {
    const cards = containerRef.current?.querySelectorAll("section > div");
    let cardIndex = 0;
    const animateCard = () => {
      const timeout = cardIndex === 0 ? 0 : 150;
      setTimeout(() => {
        const currentCard = cards[cardIndex] as HTMLElement;
        currentCard.style.transform = "scale(1) rotate(0)";
        currentCard.style.opacity = "1";
        cardIndex++;
        cardIndex < cards.length && animateCard();
      }, timeout);
    };
    animateCard();
  }, []);

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
    animateCards();
    setAllRevenues(dashboardService.getRevenues());
  }, []);

  return (
    <StyledDashboardContent ref={containerRef}>
      <PageHeader>Dashboard</PageHeader>

      <section>
        <Card style={{ flexGrow: 1 }}>
          <header>
            <span>Vendas Gerais</span>
            <section>
              <span style={{ marginRight: 20 }}>
                <Circle
                  width={12}
                  color="#db45ab"
                  style={{ top: 2, position: "relative" }}
                />
                <span style={{ marginLeft: 7 }}>Esta Semana</span>
              </span>
              <span>
                <Circle
                  width={12}
                  color="#6e6c7d"
                  style={{ top: 2, position: "relative" }}
                />
                <span style={{ marginLeft: 7 }}>Ult. Semana</span>
              </span>
            </section>
          </header>
          <main ref={dashboardContainerRef}>
            {chartDataRevenues.length && (
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
                    <stop offset="0%" stopColor="#934bea" />
                    <stop offset="50%" stopColor="#c147c1" />
                    <stop offset="100%" stopColor="#f64294" />
                  </linearGradient>
                </defs>

                <Line
                  type="monotone"
                  dataKey="1"
                  animateNewValues
                  stroke="#403f47"
                  dot={false}
                  strokeDasharray={10}
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
            )}
          </main>
        </Card>

        <div style={{ position: "relative", width: 900 }}>
          <SlideCards />
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
