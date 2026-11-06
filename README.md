# Portfolio-Tracker-Frontend

> React + TypeScript dashboard that visualises Angel One portfolio performance over time, interactive Chart.js graphs, date filters and full-screen charts.

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=mui&logoColor=white) ![Recoil](https://img.shields.io/badge/Recoil-3578E5?style=flat-square) ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

**Live:** [portfolio-tracker-frontend-2.vercel.app](https://portfolio-tracker-frontend-2.vercel.app)

Shows a generated **demo portfolio** by default. Set `VITE_API_BASE_URL` to `https://portfolio-tracker-backend.vercel.app/portfolio/<clientCode>` to view a real synced account.

## Features

- Portfolio value and gain/loss charts (Chart.js) with full-screen mode
- Filter panel by date range and client
- Recoil atoms/selectors for global state
- Custom `useFetchPortfolioData` hook over the [backend API](https://github.com/optimus-node-js/Portfolio-Tracker-Backend)
- Loading states, MUI + NextUI components, Google Analytics

## Run locally

```bash
git clone https://github.com/optimus-node-js/Portfolio-Tracker-Frontend.git
cd Portfolio-Tracker-Frontend
```

```bash
npm install
echo "VITE_API_BASE_URL=http://localhost:5000" > .env
npm run dev
```

---

## Author

**Rahul Vishwakarma**, Senior Full Stack Developer based in Ahmedabad, India

[![Portfolio](https://img.shields.io/badge/Portfolio-rahul--vishwakarma--portfolio.vercel.app-0A66C2?style=flat-square&logo=vercel&logoColor=white)](https://rahul-vishwakarma-portfolio.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rahul%20Vishwakarma-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/rahul-vishwakarma-101346192)
[![Email](https://img.shields.io/badge/Email-karmarahul67%40gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:karmarahul67@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-optimus--node--js-181717?style=flat-square&logo=github)](https://github.com/optimus-node-js)

