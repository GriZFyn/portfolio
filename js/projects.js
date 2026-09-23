/* ==========================================================================
   projects.js — 项目数据
   新增项目只需在数组里追加一条记录。
   variant 取值：
     a — 左文右图（半版）
     b — 上图下文（靠右偏移）
     c — 通栏大幅图
   ========================================================================== */

(function (global) {
  "use strict";

  function img(prompt, size) {
    return "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image"
      + "?prompt=" + encodeURIComponent(prompt)
      + "&image_size=" + size;
  }

  global.PORTFOLIO_DATA = {
    skills: ["Python", "Java", "TypeScript", "HTML / CSS", "前后端开发", "数据可视化", "AI 应用构建"],
    experiences: [
      { title: "广州软件学院 · 计算机科学与技术", time: "在读" }
    ],
    contacts: [
      { label: "2091647188@qq.com", href: "mailto:2091647188@qq.com" },
      { label: "微信 · outtagoddamnmind", href: "#contact" },
      { label: "GitHub · gzf-dev", href: "https://github.com/gzf-dev" },
      { label: "个人主页 · gzf.dev", href: "https://gzf.dev" }
    ],
    projects: [
      {
        name: "轻记账",
        desc: "一款面向日常生活场景的极简记账微信小程序，重点解决快速记录和查看个人收支问题。支持语音快捷记账、月度收支统计与预算提醒，并使用微信云开发完成数据存储与后端能力。",
        cat: "微信小程序",
        tag: "移动应用",
        time: "2025.04",
        tech: ["TypeScript", "微信小程序", "微信云开发", "ECharts"],
        variant: "a",
        image: img("WeChat mini program bookkeeping app on a smartphone center, minimalist Chinese personal expense tracker, income and expense list with daily records, monthly statistics donut chart, voice input quick record button, clean flat mobile UI, warm cream background, professional mobile app product shot", "landscape_4_3")
      },
      {
        name: "拾光集市",
        desc: "面向校园场景的二手交易平台，提供商品发布、关键词检索、站内私信与信用评分等功能。从需求梳理、界面设计到主要接口开发均独立完成，上线测试后累计注册用户超过 300 人。",
        cat: "校园平台",
        tag: "Web应用",
        time: "2025.09",
        tech: ["Java", "Spring Boot", "MySQL", "TypeScript", "Vue"],
        variant: "b",
        image: img("campus second-hand trading platform web interface, product listing browsing and search on a laptop screen, fresh green accent, clean grid layout, China campus online marketplace UI", "portrait_4_3")
      },
      {
        name: "城市脉搏",
        desc: "城市实时交通与天气数据可视化大屏，用于集中展示交通、天气和城市运行信息。通过多数据源轮询聚合数据，并结合 SVG 图表、Canvas 粒子地图和响应式布局实现大屏可视化展示。",
        cat: "数据可视化",
        tag: "数据可视化",
        time: "2026.03",
        tech: ["TypeScript", "HTML / CSS", "Canvas", "SVG", "ECharts"],
        variant: "c",
        image: img("city real-time traffic and weather data visualization dashboard on a wide command-center large screen, dark navy background, glowing city traffic flow map, congestion line and bar charts, weather panels with temperature and rain radar, SVG infographic elements, ECharts animated charts, modern high-tech big-screen UI", "landscape_16_9")
      },
      {
        name: "课语通",
        desc: "基于大语言模型的课程问答助手。用户上传课程资料后，系统能够建立知识索引，根据课程内容回答问题，并提供引用出处和知识点小测，帮助学生快速复习和整理课程重点。",
        cat: "AI 应用",
        tag: "AI应用",
        time: "2026.07",
        tech: ["Python", "FastAPI", "RAG", "向量检索", "大语言模型 API", "Streamlit"],
        variant: "a",
        image: img("AI course Q&A assistant application, document upload building knowledge index then answering questions with citations, chat interface on screen, minimal tech illustration, education AI app UI", "landscape_4_3")
      }
    ]
  };
})(window);