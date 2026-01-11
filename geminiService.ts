
import { GoogleGenAI } from "@google/genai";
import { Team, Match } from "./types";

// 安全地处理 API 密钥，确保即使没有密钥应用也能正常加载
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  try {
    ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  } catch (error) {
    console.error("Failed to initialize Gemini API:", error);
  }
}

export const getScoutingReport = async (teams: Team[], matches: Match[]): Promise<string> => {
  // 如果 AI 未初始化，返回友好提示
  if (!ai) {
    return "AI 球探功能暂时不可用，请检查 API 密钥配置。";
  }

  const context = `
    赛事数据:
    球队: ${JSON.stringify(teams.map(t => ({ 名称: t.name, 积分: t.stats.points, 进球: t.stats.gf, 失球: t.stats.ga })))}
    比赛结果: ${JSON.stringify(matches.filter(m => m.status === 'FINISHED').map(m => `${m.homeTeamId} ${m.homeScore}-${m.awayScore} ${m.awayTeamId}`))}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `你是一位资深的足球评论员和战术分析师。请根据提供的赛事数据，用中文撰写一份专业的分析报告，包含以下三个部分：
      1. 争冠形势分析（重点分析积分领先的球队）。
      2. 状态预警（分析表现不及预期的球队）。
      3. 未来赛事看点与预测。
      请保持语气专业、客观且富有洞察力。内容要求在300字左右。\n\n${context}`,
    });
    // Accessing .text property directly instead of .text() method
    return response.text || "暂时无法生成分析。";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "AI 球探目前正在休息，请稍后再试。";
  }
};
