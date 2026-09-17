---
title: AI Agent：我的实践与判断
description: 方奇兵关于 AI Agent、长周期任务、权限边界、上下文工程和人机协作的文章索引与核心判断。
---

我关注 AI Agent，不是因为它比聊天机器人听起来更先进，而是因为它开始真正承担任务：理解目标、选择信息、调用工具、保存状态、处理失败，并对结果负责。

在我看来，判断一个系统是不是有价值的 Agent，重点不在于它能连续运行多久、调用多少工具，而在于它能否在明确边界内，把一项真实任务持续推进到可验收的结果。

## 我怎样理解 AI Agent

一个能够交付的 Agent，至少需要处理五件事：

1. 理解任务最终要解决什么问题，而不只是执行表面指令。
2. 根据目标选择上下文，不把所有资料无差别塞给模型。
3. 保存进度、关键判断和未解决的问题，使任务能够跨时间继续。
4. 在权限边界内自主行动，在高风险或信息不足时请求人类确认。
5. 用结果和执行过程共同验收，包括失败、重试、恢复和人工修改。

这些判断仍在随着我的实践更新。这个页面不是一份完整教程，而是进入相关主题的阅读地图。

## 长周期任务与状态

长时间运行不等于真正的长任务。一个程序持续运行数小时，只说明它没有停止；长周期 Agent 还需要保持目标、记录状态、发现计划缺口，并在中断或失败后继续推进。

- [长时间运行，不等于真正的长任务 Agent](/writing/long-running-vs-long-horizon-agent/)
- [GPT-6 Astra：更强的模型，然后呢？](/writing/gpt-6-astra-stronger-model-then-what/)

## 自主性与权限边界

控制 AI 不等于逐步遥控。更合理的方式是先划定权限、不可逆动作和停止条件，再让 Agent 在边界内获得尽可能大的自主权。

- [控制 AI，不等于控制它的每一步](/writing/ai-autonomy-within-boundaries/)
- [AI 不会因为风险停下来](/writing/ai-wont-stop-for-risk/)

## 目标与上下文

上下文不是越多越好。Agent 首先需要知道为什么阅读、需要做出什么判断，再决定看哪些资料、看到什么粒度以及何时停止。

- [AI 不需要看完所有内容，先要知道为什么看](/writing/ai-goal-directed-attention/)
- [从指挥官意图到 AI 协作](/writing/commanders-intent-and-ai/)

## 人在 Agent 系统中的位置

模型变强以后，人的价值并不是亲自完成每一个步骤，而是确定真实目标、提供关键背景、划定权限、处理重要取舍，并承担最终责任。

- [AI 让答案变得廉价，却让判断变得更昂贵](/writing/ai-answers-cheap-judgment-expensive/)
- [AI 越来越强，普通人还能为自己挣出一个位置吗？](/writing/ai-and-finding-a-place/)

## 推荐阅读顺序

如果第一次来到这里，可以依次阅读：

1. [从指挥官意图到 AI 协作](/writing/commanders-intent-and-ai/)
2. [AI 不需要看完所有内容，先要知道为什么看](/writing/ai-goal-directed-attention/)
3. [控制 AI，不等于控制它的每一步](/writing/ai-autonomy-within-boundaries/)
4. [长时间运行，不等于真正的长任务 Agent](/writing/long-running-vs-long-horizon-agent/)

最后更新：2026-09-17。
