import React, { useCallback, useEffect, useState } from "react";
import {
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { Card } from "../../components/card";
import { Circle } from "../../components/circle";
import { PageContainer } from "../../components/pageContainer";
import { TopBar } from "../../components/topBar";
import { useServices } from "../../contexts/service";
import Revenue from "../../entities/Revenue";
import { StyledDashboardContent } from "./styles";

const DashboardContent = () => {
  const { dashboardService } = useServices();
  const [allRevenues, setAllRevenues] = useState<Revenue[][]>();
  const [chartDataRevenues, setChartDataRevenues] = useState<object[]>([]);

  const animateCards = useCallback(async () => {
    const cards = document.querySelectorAll(
      "#dashboard-content > section > div"
    );
    let cardIndex = 0;
    const animateCard = () => {
      const timeout = cardIndex === 0 ? 0 : 150;
      setTimeout(() => {
        const currentCard = cards[cardIndex] as HTMLElement;
        currentCard.style.transform = "scale(1)";
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
    <StyledDashboardContent>
      <PageContainer id="dashboard-content">
        <style></style>
        <TopBar />

        <header>Dashboard</header>

        <section>
          <Card>
            <header>
              <span>Vendas Gerais</span>
              <section>
                <span style={{ marginRight: 20 }}>
                  <Circle width={11} color="#db45ab" />
                  <span style={{ marginLeft: 5 }}>Esta Semana</span>
                </span>
                <span>
                  <Circle width={11} color="#6e6c7d" />
                  <span style={{ marginLeft: 5 }}>Ult. Semana</span>
                </span>
              </section>
            </header>
            <main>
              {chartDataRevenues?.length > 0 && (
                <LineChart
                  width={500}
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
                    stroke="#6e6c7d"
                    dot={false}
                    strokeDasharray={10}
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="0"
                    stroke="url(#colorUv)"
                    dot={false}
                    strokeWidth={5}
                  />
                </LineChart>
              )}
            </main>
          </Card>
          <Card>
            <header>Visão Geral</header>
          </Card>
          <Card>
            <header>Visão Geral</header>
          </Card>
          <Card>
            <header>Visão Geral</header>
          </Card>
        </section>

        <section>
          <Card style={{ width: "70%" }}>
            <header>Visão Geral</header>
          </Card>
          <Card style={{ width: "30%" }}>
            <header>Visão Geral</header>
          </Card>
        </section>

        <section>
          <Card>
            <header>Visão Geral</header>
          </Card>
        </section>
      </PageContainer>
    </StyledDashboardContent>
  );
};

export default DashboardContent;
