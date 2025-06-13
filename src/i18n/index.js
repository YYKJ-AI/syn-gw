import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  zh: {
    translation: {
      company: '盈养科技',
      slogan: '知盈养亏 身心守衡',
      nav: {
        why_choose: '为什么选择盈养',
        team: '团队介绍',
        business: '融资进度',
        dynamics: '动态信息',
        contact: '联系我们'
      },
      hero: {
        companyName: '北京盈养科技',
        title: 'AI精准营养生物电监测',
        stats: {
          modules: '5大核心功能',
          innovation: '90秒无创监测',
          projects: '82种监测项目'
        },
        features: {
          feature1: '无创营养活力检测',
          feature2: '具身营养数据管理',
          feature3: '数据验证营养效果',
          feature4: 'AI评估营养效能',
          feature5: '个性定制营养方案'
        },
        description: '盈养科技-依靠具身数据，为用户构建知盈养亏、身心守衡的健康管理系统及可验证的营养调理服务。'
      },
      research: {
        title: '前沿研究',
        subtitle: '依托超过5万份亚洲人群的长期健康数据，盈养科技自主研发了两大核心成果',
        coreIssue1: {
          title: '核心成果1：',
          description: '建立了精准的营养电阻抗特性谱图模型'
        },
        coreIssue2: {
          title: '核心成果2：',
          description: '构建了AI数据采集、特征分析和AI健康的完整技术体系'
        },
        evidenceTitle: '现有科研论文支撑：',
        evidence1: '通过生物电阻抗法，AI可实现血糖等多大疾病的精准识别',
        evidence2: '生物电阻抗技术管理升级的预测率，对非黑色素瘤皮肤癌的敏感度高达94.2%',
        citation1: '论文引用：Company-Se, G., Pajares, V., Rafecas-Codern, A. et al. Machine learning allows robust classification of lung neoplasm tissue using an electronic biopsy through minimally-invasive electrical impedance spectroscopy. Sci Rep 15, 8716 (2025).',
        citation2: '论文引用：Diagnostic Accuracy of Electrical Impedance Spectroscopy in Non-melanoma Skin Cancer – Sarac, 2020, Acta Dermato-Venereologica, 100(18):adv00328, DOI:10.2340/00015555-3689.',
        innovation: '盈养科技拥有独立开展BIA建模、电阻抗特征提取及AI算法开发能力，具备从采集到建模的完整科研与数据闭环。'
      },
      // 营养检测组件翻译
      nutrition: {
        title: '90秒无创监测',
        subtitle: '10项维生素，16项微量元素和矿物质，以及数百项更多功能...',
        panels: {
          vitamin: '维生素缺乏力展示',
          mineral: '矿物质展示力展示', 
          activity: '矿物质活力清单'
        }
      },
      // AI营养代谢分析系统翻译
      metabolism: {
        title: 'AI营养代谢分析系统',
        subtitle: '每一次检测都是更清晰的自我理解，揭示营养状态与健康风险的深层联系',
        basicIndicators: '基本指标',
        nutritionLevel: '营养水平',
        physiologyInfo: '生理信息',
        dataInput: '采集数据',
        aiSystem: '营养代谢分析系统',
        riskEvaluation: '疾病风险评估',
        heartDisease: '心脏病',
        respiratoryImmune: '呼吸免疫',
        circulationPain: '循环痛',
        gastricAcid: '胃酸过多'
      },
      // 个性化营养纠正方案
      // 在中文翻译部分添加
      nutritionCorrection: {
        title: '专属营养纠正方案',
        subtitle: '基于个人身体数据的、动态调整的、药食同源的专业解决方案',
        vitaminC: {
          title: '维生素C',
          level: '缺乏程度',
          severe: '-3.50',
          intake: '成年人每天维生素C的推荐摄入量（RNI）为',
          amount: '100 毫克',
          status: '影响身体关键功能'
        },
        dietAdvice: {
          title: '饮食建议',
          items: {
            item1: '柿子和草莓',
            item2: '柑橘类',
            item3: '花椰菜',
            item4: '猕猴桃',
            item5: '青椒',
            item6: '西兰花'
          }
        },
        nutrients: {
          title: '营养素数据',
          items: {
            item1: '维生素',
            item2: '叶酸',
            item3: '维生素K',
            item4: '白蛋白',
            item5: '蛋白质',
            item6: '铁蛋白'
          }
        },
        doctorAdvice: {
          title: '二胎宝妈',
          description: '产后恢复调理性导致，缺乏蛋白质/C/叶酸十预防大量出血',
          recommendation: '实际，二胎产后3个月后，爱吃辣椒和酸性食物，容易缺乏维生素，体质偏寒性体质。',
          plan: '专利减脂营养补充品，及调理三个月，第二个月起每日大豆卵磷脂，营养素充分。'
        },
        bodyEffects: {
          title: '影响身体关键项目',
          items: {
            item1: '益生菌',
            item2: '肝功能', 
            item3: '代谢能力',
            item4: '胃脂功能',
            item5: '泌尿生殖'
          }
        }
      },
      // 在英文翻译部分添加
      // 修复中文翻译部分（第76-130行左右）
      nutritionCorrection: {
        title: '专属营养干预方案',
        subtitle: '基于个人身体数据的、动态调整的、药食同源的专业解决方案',
        vitaminC: {
          title: '维生素C',
          level: '缺乏程度',
          severe: '-3.50',
          intake: '成年人每天维生素C的推荐摄入量（RNI）为',
          amount: '100 毫克',
          status: '影响身体关键功能'
        },
        dietAdvice: {
          title: '饮食建议',
          items: {
            item1: '西蓝花',
            item2: '花生',
            item3: '牛肉'
          }
        },
        nutrients: {
          title: '营养素数据',
          items: {
            item1: '维生素',
            item2: '叶酸',
            item3: '维生素K',
            item4: '白蛋白',
            item5: '蛋白质',
            item6: '铁蛋白'
          }
        },
        doctorAdvice: {
          title: '二胎宝妈',
          description: '产后恢复调理性导致，缺乏蛋白质/C/叶酸十预防大量出血',
          recommendation: '实际，二胎产后3个月后，爱吃辣椒和酸性食物，容易缺乏维生素，体质偏寒性体质。',
          plan: '专利减脂营养补充品，及调理三个月，第二个月起每日大豆卵磷脂，营养素充分。'
        },
        bodyEffects: {
          title: '影响身体关键项目',
          items: {
            item1: '益生菌',
            item2: '肝功能',
            item3: '代谢能力',
            item4: '胃脂功能',
            item5: '泌尿生殖'
          }
        }
      }
    }
  },
  en: {
    translation: {
      company: 'Yingyang Tech',
      slogan: 'Know Balance, Keep Health',
      nav: {
        why_choose: 'Why Choose Us',
        team: 'Our Team',
        business: 'Financing',
        dynamics: 'News',
        contact: 'Contact Us'
      },
      hero: {
        companyName: 'Beijing Yingyang Technology',
        title: 'AI Precision Nutrition Bioelectric Monitoring',
        stats: {
          modules: '5 Core Modules',
          innovation: '90s Non-invasive',
          projects: '82 Test Items'
        },
        features: {
          feature1: 'Non-invasive Glucose',
          feature2: 'Data Management',
          feature3: 'Data Verification',
          feature4: 'AI Nutrition Assessment',
          feature5: 'Personalized Nutrition'
        },
        description: 'Yingyang Health Equipment - Creating balanced data environment and services for users'
      },
      research: {
        title: 'Cutting-edge Research',
        subtitle: 'Based on over 50,000 long-term health data from Asian populations, Yingyang Technology has independently developed two core achievements',
        coreIssue1: {
          title: 'Core Achievement 1:',
          description: 'Established precise nutritional electrical impedance characteristic spectrum model'
        },
        coreIssue2: {
          title: 'Core Achievement 2:',
          description: 'Built complete AI data collection, feature analysis and AI health technology system'
        },
        evidenceTitle: 'Supported by existing scientific research papers:',
        evidence1: 'Through bioelectrical impedance analysis, AI can achieve precise identification of blood glucose and other major diseases',
        evidence2: 'Bioelectrical impedance technology management upgrade prediction rate, sensitivity to non-melanoma skin cancer reaches 94.2%',
        citation1: 'Citation: Company-Se, G., Pajares, V., Rafecas-Codern, A. et al. Machine learning allows robust classification of lung neoplasm tissue using an electronic biopsy through minimally-invasive electrical impedance spectroscopy. Sci Rep 15, 8716 (2025).',
        citation2: 'Citation: Diagnostic Accuracy of Electrical Impedance Spectroscopy in Non-melanoma Skin Cancer – Sarac, 2020, Acta Dermato-Venereologica, 100(18):adv00328, DOI:10.2340/00015555-3689.',
        innovation: 'Yingyang Technology possesses independent capabilities in BIA modeling, electrical impedance feature extraction, and AI algorithm development, with a complete research and data closed-loop from data collection to modeling.'
      },
      // 营养检测组件英文翻译
      nutrition: {
        title: '90s Non-invasive Detection',
        subtitle: '10 vitamins, 16 trace elements and minerals, plus hundreds more functions...',
        panels: {
          vitamin: 'Vitamin Deficiency Display',
          mineral: 'Mineral Display',
          activity: 'Mineral Activity List'
        }
      },
      // AI营养代谢分析系统英文翻译
      metabolism: {
        title: 'AI Nutrition Metabolism Analysis System',
        subtitle: 'Every detection is a clearer self-understanding, revealing the deep connection between nutritional status and health risks',
        basicIndicators: 'Basic Indicators',
        nutritionLevel: 'Nutrition Level',
        physiologyInfo: 'Physiological Info',
        dataInput: 'Data Collection',
        aiSystem: 'Nutrition Metabolism Analysis',
        riskEvaluation: 'Disease Risk Assessment',
        heartDisease: 'Heart Disease',
        respiratoryImmune: 'Respiratory Immune',
        circulationPain: 'Circulation Pain',
        gastricAcid: 'Gastric Hyperacidity'
      },
      // 个性化营养纠正方案英文翻译
      nutritionCorrection: {
        title: 'Personalized Nutrition IIntervention Plan',
        subtitle: 'Professional solutions based on personal body data, dynamic adjustment, and food-medicine integration',
        vitaminC: {
          title: 'Vitamin C',
          level: 'Deficiency Level',
          severe: '-3.50',
          intake: 'Recommended daily intake (RNI) of Vitamin C for adults is',
          amount: '100 mg',
          status: 'Affects key body functions'
        },
        dietAdvice: {
          title: 'Dietary Advice',
          items: {
            item1: 'Broccoli',
            item2: 'Peanuts',
            item3: 'Beef'
          }
        },
        nutrients: {
          title: 'Nutrient Data',
          items: {
            item1: 'Vitamins',
            item2: 'Folic Acid',
            item3: 'Vitamin K',
            item4: 'Albumin',
            item5: 'Protein',
            item6: 'Ferritin'
          }
        },
        doctorAdvice: {
          title: 'Second-time Mother',
          description: 'Postpartum recovery conditioning causes protein/C/folic acid deficiency to prevent massive bleeding',
          recommendation: 'Actually, 3 months after second birth, loves spicy and acidic foods, prone to vitamin deficiency, cold constitution.',
          plan: 'Patented fat-reducing nutritional supplements, conditioning for three months, daily soy lecithin from the second month.'
        },
        bodyEffects: {
          title: 'Key Body Functions Affected',
          items: {
            item1: 'Probiotics',
            item2: 'Liver Function',
            item3: 'Metabolism',
            item4: 'Gastric Function', 
            item5: 'Urogenital'
          }
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;
