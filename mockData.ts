
import { Team, Match } from './types';

export const INITIAL_TEAMS: Team[] = [
  {
    id: 't1',
    name: '数学之神',
    shortName: 'MATH',
    logo: 'https://picsum.photos/id/1/100/100',
    players: [
      { id: 'p3', name: '董武隆', position: 'MF', number: 1, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p4', name: '冉远洲', position: 'DF', number: 2, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p5', name: '万家吉', position: 'FW', number: 3, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p6', name: '龙腾霖', position: 'MF', number: 4, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p7', name: '谭昱坤', position: 'DF', number: 5, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p8', name: '樊栩枫', position: 'FW', number: 6, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p9', name: '郑威', position: 'DF', number: 8, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p10', name: '吴家宝', position: 'GK', number: 9, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p11', name: '朱杰峰', position: 'MF', number: 11, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p12', name: '杨鑫', position: 'FW', number: 12, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p13', name: '杨浩然', position: 'MF', number: 13, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p14', name: '陈浩嶙', position: 'DF', number: 14, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p15', name: '郝亦彤', position: 'FW', number: 15, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p16', name: '杨宜鑫', position: 'MF', number: 16, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p17', name: '蔡奇宏', position: 'DF', number: 17, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p18', name: '周汶庆', position: 'FW', number: 18, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p19', name: '罗嘉易', position: 'MF', number: 19, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p20', name: '满聪', position: 'GK', number: 20, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p21', name: '胡博皓', position: 'DF', number: 21, goals: 0, assists: 0, nationality: 'CHN' }
    ],
    stats: { played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 }
  },
  {
    id: 't2',
    name: '历社FC',
    shortName: 'HIST',
    logo: 'https://picsum.photos/id/2/100/100',
    players: [
      { id: 'p22', name: '潘隆予珩', position: 'FW', number: 1, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p23', name: '陈子圣', position: 'MF', number: 2, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p24', name: '杨柠瑞', position: 'DF', number: 3, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p25', name: '唐振宇', position: 'MF', number: 4, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p26', name: '余能仲', position: 'FW', number: 5, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p27', name: '杨千千', position: 'DF', number: 6, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p28', name: '张文博', position: 'MF', number: 7, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p29', name: '黄炳宏', position: 'GK', number: 8, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p30', name: '邹云龙', position: 'DF', number: 9, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p31', name: '吴申俊子', position: 'FW', number: 10, goals: 0, assists: 0, nationality: 'CHN' }
    ],
    stats: { played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 }
  },
  {
    id: 't3',
    name: '蛋仔派对',
    shortName: 'EGG',
    logo: 'https://picsum.photos/id/3/100/100',
    players: [
      { id: 'p32', name: '余易蓬', position: 'FW', number: 1, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p33', name: '魏凯', position: 'MF', number: 2, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p34', name: '代瑞', position: 'DF', number: 3, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p35', name: '王展', position: 'MF', number: 4, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p36', name: '龙振轩', position: 'FW', number: 5, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p37', name: '何青林', position: 'DF', number: 6, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p38', name: '高少杰', position: 'MF', number: 7, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p39', name: '李豪', position: 'GK', number: 8, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p40', name: '胡文豪', position: 'DF', number: 9, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p41', name: '贾寅康', position: 'FW', number: 10, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p42', name: '刘爽', position: 'MF', number: 11, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p43', name: '王超', position: 'DF', number: 12, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p44', name: '王科霖', position: 'MF', number: 13, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p45', name: '向思霖', position: 'FW', number: 14, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p46', name: '谢承李', position: 'DF', number: 15, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p47', name: '党家琪', position: 'MF', number: 16, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p48', name: '曹河庆', position: 'GK', number: 17, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p49', name: '黄星然', position: 'FW', number: 18, goals: 0, assists: 0, nationality: 'CHN' }
    ],
    stats: { played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 }
  },
  {
    id: 't4',
    name: '胖男孩与小男孩',
    shortName: 'BOYS',
    logo: 'https://picsum.photos/id/4/100/100',
    players: [
      { id: 'p50', name: '金戈', position: 'FW', number: 1, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p51', name: '刘勇', position: 'MF', number: 2, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p52', name: '王鸣宇', position: 'DF', number: 3, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p53', name: '王长柯', position: 'MF', number: 4, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p54', name: '张瑞鑫', position: 'FW', number: 5, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p55', name: '邹汶杉', position: 'DF', number: 6, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p56', name: '洛松赤列', position: 'MF', number: 7, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p57', name: '阮德龙', position: 'GK', number: 8, goals: 0, assists: 0, nationality: 'VNM' },
      { id: 'p58', name: '祖粒堰', position: 'DF', number: 9, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p59', name: '李京岭', position: 'FW', number: 10, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p60', name: '王一丁', position: 'MF', number: 11, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p61', name: '万里濠', position: 'DF', number: 12, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p62', name: '霍咏麟', position: 'MF', number: 13, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p63', name: '于铠瀛', position: 'FW', number: 14, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p64', name: '江星佑', position: 'DF', number: 15, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p65', name: '周意人', position: 'GK', number: 16, goals: 0, assists: 0, nationality: 'CHN' }
    ],
    stats: { played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 }
  },
  {
    id: 't5',
    name: '历马',
    shortName: 'LIMA',
    logo: 'https://picsum.photos/id/5/100/100',
    players: [
      { id: 'p66', name: '李皓然', position: 'FW', number: 1, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p67', name: '蒲真', position: 'MF', number: 2, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p68', name: '李炫彻', position: 'DF', number: 3, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p69', name: '伍子洵', position: 'MF', number: 4, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p70', name: '冯璐阳', position: 'FW', number: 5, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p71', name: '谭启城', position: 'DF', number: 6, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p72', name: '冉茂超', position: 'MF', number: 7, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p73', name: '李丁甲', position: 'GK', number: 8, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p74', name: '艾钇名', position: 'DF', number: 9, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p75', name: '陈行', position: 'FW', number: 10, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p76', name: '周彦池', position: 'MF', number: 11, goals: 0, assists: 0, nationality: 'CHN' }
    ],
    stats: { played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 }
  },
  {
    id: 't6',
    name: '基因编码组FC',
    shortName: 'GENE',
    logo: 'https://picsum.photos/id/6/100/100',
    players: [
      { id: 'p77', name: '吴宇', position: 'FW', number: 1, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p78', name: '马瑞', position: 'MF', number: 2, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p79', name: '程宏鹏', position: 'DF', number: 3, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p80', name: '刘俊希', position: 'MF', number: 4, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p81', name: '李帅璇', position: 'FW', number: 5, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p82', name: '李宇鑫', position: 'DF', number: 6, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p83', name: '冯亦晨', position: 'MF', number: 7, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p84', name: '谭星华', position: 'GK', number: 8, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p85', name: '吴帆', position: 'DF', number: 9, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p86', name: '熊骏豪', position: 'FW', number: 10, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p87', name: '严彻', position: 'MF', number: 11, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p88', name: '田凡', position: 'DF', number: 12, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p89', name: '高键枫', position: 'MF', number: 13, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p90', name: '孙健恺', position: 'FW', number: 14, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p91', name: '郭泽旭', position: 'DF', number: 15, goals: 0, assists: 0, nationality: 'CHN' },
      { id: 'p92', name: '廖展鹏', position: 'GK', number: 16, goals: 0, assists: 0, nationality: 'CHN' }
    ],
    stats: { played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0 }
  }
];

export const INITIAL_MATCHES: Match[] = [
  // 2025年11月的比赛
  {
    id: 'm1',
    homeTeamId: 't1', // 数学之神
    awayTeamId: 't2', // 历社FC
    homeScore: 2,
    awayScore: 1,
    status: 'FINISHED',
    date: '2025-11-05T14:00:00Z',
    venue: '重庆师范大学',
    scorers: [
      { scorerName: '董武隆', teamId: 't1' },
      { scorerName: '万家吉', teamId: 't1' },
      { scorerName: '潘隆予珩', teamId: 't2' }
    ],
    stage: 'GROUP'
  },
  {
    id: 'm2',
    homeTeamId: 't3', // 蛋仔派对
    awayTeamId: 't4', // 胖男孩与小男孩
    homeScore: 1,
    awayScore: 2,
    status: 'FINISHED',
    date: '2025-11-06T14:00:00Z',
    venue: '重庆师范大学',
    scorers: [
      { scorerName: '余易蓬', teamId: 't3' },
      { scorerName: '金戈', teamId: 't4' },
      { scorerName: '阮德龙', teamId: 't4' } // 阮德龙进球1
    ],
    stage: 'GROUP'
  },
  {
    id: 'm3',
    homeTeamId: 't5', // 历马
    awayTeamId: 't6', // 基因编码组FC
    homeScore: 1,
    awayScore: 1,
    status: 'FINISHED',
    date: '2025-11-12T14:00:00Z',
    venue: '重庆师范大学',
    scorers: [
      { scorerName: '李皓然', teamId: 't5' },
      { scorerName: '吴宇', teamId: 't6' }
    ],
    stage: 'GROUP'
  },
  {
    id: 'm4',
    homeTeamId: 't1', // 数学之神
    awayTeamId: 't3', // 蛋仔派对
    homeScore: 3,
    awayScore: 0,
    status: 'FINISHED',
    date: '2025-11-13T14:00:00Z',
    venue: '重庆师范大学',
    scorers: [
      { scorerName: '董武隆', teamId: 't1' },
      { scorerName: '万家吉', teamId: 't1' },
      { scorerName: '樊栩枫', teamId: 't1' }
    ],
    stage: 'GROUP'
  },
  {
    id: 'm5',
    homeTeamId: 't2', // 历社FC
    awayTeamId: 't4', // 胖男孩与小男孩
    homeScore: 2,
    awayScore: 1,
    status: 'FINISHED',
    date: '2025-11-19T14:00:00Z',
    venue: '重庆师范大学',
    scorers: [
      { scorerName: '潘隆予珩', teamId: 't2' },
      { scorerName: '唐振宇', teamId: 't2', assistantName: '陈子圣' }, // 唐振宇助攻1
      { scorerName: '阮德龙', teamId: 't4' } // 阮德龙进球2
    ],
    stage: 'GROUP'
  },
  {
    id: 'm6',
    homeTeamId: 't5', // 历马
    awayTeamId: 't1', // 数学之神
    homeScore: 0,
    awayScore: 2,
    status: 'FINISHED',
    date: '2025-11-20T14:00:00Z',
    venue: '重庆师范大学',
    scorers: [
      { scorerName: '杨鑫', teamId: 't1' },
      { scorerName: '冉远洲', teamId: 't1', assistantName: '董武隆' } // 冉远洲助攻1
    ],
    stage: 'GROUP'
  },
  {
    id: 'm7',
    homeTeamId: 't6', // 基因编码组FC
    awayTeamId: 't3', // 蛋仔派对
    homeScore: 1,
    awayScore: 2,
    status: 'FINISHED',
    date: '2025-11-26T14:00:00Z',
    venue: '重庆师范大学',
    scorers: [
      { scorerName: '马瑞', teamId: 't6' },
      { scorerName: '余易蓬', teamId: 't3' },
      { scorerName: '魏凯', teamId: 't3' }
    ],
    stage: 'GROUP'
  },

  // 2025年12月的比赛
  {
    id: 'm8',
    homeTeamId: 't4', // 胖男孩与小男孩
    awayTeamId: 't1', // 数学之神
    homeScore: 1,
    awayScore: 2,
    status: 'FINISHED',
    date: '2025-12-03T14:00:00Z',
    venue: '重庆师范大学',
    scorers: [
      { scorerName: '阮德龙', teamId: 't4' }, // 阮德龙进球3
      { scorerName: '董武隆', teamId: 't1', assistantName: '冉远洲' }, // 冉远洲助攻2
      { scorerName: '万家吉', teamId: 't1' }
    ],
    stage: 'GROUP'
  },
  {
    id: 'm9',
    homeTeamId: 't2', // 历社FC
    awayTeamId: 't6', // 基因编码组FC
    homeScore: 3,
    awayScore: 0,
    status: 'FINISHED',
    date: '2025-12-04T14:00:00Z',
    venue: '重庆师范大学',
    scorers: [
      { scorerName: '潘隆予珩', teamId: 't2' },
      { scorerName: '唐振宇', teamId: 't2', assistantName: '杨柠瑞' }, // 唐振宇助攻2
      { scorerName: '杨柠瑞', teamId: 't2' }
    ],
    stage: 'GROUP'
  },
  {
    id: 'm10',
    homeTeamId: 't3', // 蛋仔派对
    awayTeamId: 't5', // 历马
    homeScore: 2,
    awayScore: 1,
    status: 'FINISHED',
    date: '2025-12-10T14:00:00Z',
    venue: '重庆师范大学',
    scorers: [
      { scorerName: '余易蓬', teamId: 't3' },
      { scorerName: '魏凯', teamId: 't3' },
      { scorerName: '李皓然', teamId: 't5' }
    ],
    stage: 'GROUP'
  },
  {
    id: 'm11',
    homeTeamId: 't1', // 数学之神
    awayTeamId: 't6', // 基因编码组FC
    homeScore: 3,
    awayScore: 0,
    status: 'FINISHED',
    date: '2025-12-11T14:00:00Z',
    venue: '重庆师范大学',
    scorers: [
      { scorerName: '董武隆', teamId: 't1' },
      { scorerName: '樊栩枫', teamId: 't1', assistantName: '冉远洲' }, // 冉远洲助攻3
      { scorerName: '万家吉', teamId: 't1' }
    ],
    stage: 'GROUP'
  },
  {
    id: 'm12',
    homeTeamId: 't2', // 历社FC
    awayTeamId: 't5', // 历马
    homeScore: 2,
    awayScore: 0,
    status: 'FINISHED',
    date: '2025-12-17T14:00:00Z',
    venue: '重庆师范大学',
    scorers: [
      { scorerName: '唐振宇', teamId: 't2' }, // 唐振宇进球
      { scorerName: '潘隆予珩', teamId: 't2', assistantName: '唐振宇' } // 唐振宇助攻3
    ],
    stage: 'GROUP'
  },
  {
    id: 'm13',
    homeTeamId: 't3', // 蛋仔派对
    awayTeamId: 't2', // 历社FC
    homeScore: 1,
    awayScore: 2,
    status: 'FINISHED',
    date: '2025-12-18T14:00:00Z',
    venue: '重庆师范大学',
    scorers: [
      { scorerName: '余易蓬', teamId: 't3' },
      { scorerName: '潘隆予珩', teamId: 't2' },
      { scorerName: '唐振宇', teamId: 't2', assistantName: '陈子圣' } // 唐振宇助攻4
    ],
    stage: 'GROUP'
  },
  {
    id: 'm14',
    homeTeamId: 't4', // 胖男孩与小男孩
    awayTeamId: 't5', // 历马
    homeScore: 3,
    awayScore: 1,
    status: 'FINISHED',
    date: '2025-12-24T14:00:00Z',
    venue: '重庆师范大学',
    scorers: [
      { scorerName: '阮德龙', teamId: 't4' }, // 阮德龙进球4
      { scorerName: '阮德龙', teamId: 't4' }, // 阮德龙进球5
      { scorerName: '阮德龙', teamId: 't4' }, // 阮德龙进球6
      { scorerName: '李皓然', teamId: 't5' }
    ],
    stage: 'GROUP'
  },
  {
    id: 'm15',
    homeTeamId: 't4', // 胖男孩与小男孩
    awayTeamId: 't6', // 基因编码组FC
    homeScore: 4,
    awayScore: 0,
    status: 'FINISHED',
    date: '2025-12-31T14:00:00Z',
    venue: '重庆师范大学',
    scorers: [
      { scorerName: '阮德龙', teamId: 't4' }, // 阮德龙进球7
      { scorerName: '阮德龙', teamId: 't4' }, // 阮德龙进球8
      { scorerName: '阮德龙', teamId: 't4' }, // 阮德龙进球9
      { scorerName: '金戈', teamId: 't4' }
    ],
    stage: 'GROUP'
  }
];
