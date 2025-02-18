"use client";

import Layout from "@/components/Layout";
import React from "react";
import dynamic from "next/dynamic";
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import ProductList from "@/components/ProductList";

// Disable SSR for ComposedChart to avoid Next.js hydration issues
const ComposedChartNoSSR = dynamic(
  () => import("recharts").then((mod) => mod.ComposedChart),
  { ssr: false }
);

const data = [
  { name: "Jan", uv: 590, pv: 800, amt: 4000, cnt: 490 },
  { name: "Feb", uv: 868, pv: 967, amt: 1506, cnt: 590 },
  { name: "Mar", uv: 1397, pv: 1098, amt: 989, cnt: 350 },
  { name: "Apr", uv: 1480, pv: 1200, amt: 1228, cnt: 480 },
  { name: "May", uv: 1520, pv: 1108, amt: 1100, cnt: 460 },
  { name: "Jun", uv: 1400, pv: 680, amt: 1700, cnt: 380 },
  { name: "Jul", uv: 1600, pv: 750, amt: 1800, cnt: 410 },
  { name: "Aug", uv: 1700, pv: 850, amt: 1900, cnt: 430 },
  { name: "Sep", uv: 1550, pv: 920, amt: 1750, cnt: 400 },
  { name: "Oct", uv: 1450, pv: 1000, amt: 1650, cnt: 420 },
  { name: "Nov", uv: 1300, pv: 890, amt: 1500, cnt: 390 },
  { name: "Dec", uv: 1200, pv: 780, amt: 1400, cnt: 370 },
];

const About: React.FC = () => {
  return (
    <Layout>
      <h1>About Page</h1>
      <ComposedChartNoSSR
        width={520}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis dataKey="uv" />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" barSize={10} fill="#413ea0" />
      </ComposedChartNoSSR>
      <ProductList />
    </Layout>
  );
};

export default About;
