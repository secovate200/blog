const ctx = document.getElementById("trafficCahrt");
/**mobile menu */
const sidebarToggle = document.querySelector("#sidebar-toggle");
const side = document.querySelector(".sidebar");
sidebarToggle.addEventListener("click", () => {
  side.classList.toggle("open");
});
/**chart */
new Chart(ctx, {
  type: "line",
  data: {
    // 1. 라벨을 트래픽(시간대)에 맞게 변경
    labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
    datasets: [
      {
        label: "Visitors",
        // 2. 실제 방문자 추이와 비슷한 데이터 샘플
        data: [0, 30, 70, 90, 60, 150, 120],
        borderWidth: 3, // 선을 조금 더 두껍게 해서 가독성 향상
        borderColor: "#4ade80",
        tension: 0.4,
        pointRadius: 0,
        pointHitRadius: 10, // 마우스를 근처에 대면 데이터가 보이도록 설정
        fill: true,
        // 3. 그라데이션 효과 (선택 사항: 더 고급스러워짐)
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom,
          );
          gradient.addColorStop(0, "rgba(74, 222, 128, 0.2)");
          gradient.addColorStop(1, "rgba(74, 222, 128, 0)");
          return gradient;
        },
      },
    ],
  },
  options: {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
      // 5. 마우스 호버 시 나타나는 툴팁 디자인 개선
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.05)", // 아주 연한 가로선만 남겨 가독성 확보
          drawBorder: false,
        },
        ticks: {
          stepSize: 25, // 숫자 간격
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
});
