# MEMORY.md — ValuePro AI 跨天记忆

## 架构
- 模式: 原生 Swarm Kit relay (submit-mission.mjs → worker.mjs claim → spawn → poll → consolidate)
- 不使用 pipeline.py
- Agent: coo(协调) + research + growth + content + social + operations
- 模型: iflow/qwen3-max (全员统一, 免费)
- Gateway: openclaw-gateway.service (2G memory limit)
- Worker: swarm-relay-worker.service (24/7 轮询)

## 项目清单
| 项目 | 状态 | URL | 备注 |
|------|------|-----|------|
| ai-tools-navigator | 运行中 | https://ai-tools-navigator.vercel.app | 核心产品 |

## 上次运行
- (初始化)

## 决策(近5条)
- (无)

## 明日自动计划
- 执行每日运营: 市场调研 + 内容创作 + SEO + 社媒 + 系统巡检
