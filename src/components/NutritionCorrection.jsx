import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./NutritionCorrection.css";
import case1Image from "../image/案例图片1@2x.png";
import case2Image from "../image/案例图片2.png";
import case3Image from "../image/案例图片3@2x.png";
import food1Image from "../image/食物图片一@2x.png";
import food2Image from "../image/食物图片二@2x.png";

const NutritionCorrection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // 自动轮播效果
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); // 每5秒切换一次

    return () => clearInterval(interval);
  }, []);

  // 手动切换轮播
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="nutrition-correction">
      <div className="container">
        <div className="correction-content">
          <div className="main-title">{t("nutritionCorrection.title")}</div>
          <div className="subtitle">{t("nutritionCorrection.subtitle")}</div>

          <div className="correction-layout">
            {/* 左侧维生素C检测卡片 */}
            <div className="vitamin-card">
              <div className="card-header">
                <div>
                <h3>维生素C</h3>
                <span className="vitamin-label">Vitamin C</span>
                </div>
                <div className="deficiency-label">数值水平：</div>
                <div className="deficiency-value">-3.50</div>
              </div>

              <div className="deficiency-meter">
                <div className="meter-bar">
                  <div className="meter-fill" style={{ width: "70%" }}></div>
                  <div className="meter-indicator"></div>
                </div>
              </div>

              <div className="intake-info">
                <p className="intake-text">
                  成人人每天维生素C的推荐摄入量（RNI）为
                </p>
                <div className="intake-amount">100毫克</div>
              </div>

              <div className="body-effects">
                <div className="effects-title">影响身体关键项</div>
                <div className="effects-grid">
                  <div className="effect-tag positive">益生菌</div>
                  <div className="effect-tag negative">肝功能</div>
                  <div className="effect-tag negative">代谢能力</div>
                  <div className="effect-tag negative">胃肠功能</div>
                  <div className="effect-tag negative">免疫功能</div>
                </div>
              </div>
            </div>
            {/* 中间饮食建议 */}
            <div className="diet-advice">
              <h3>饮食建议</h3>

              <div className="diet-section">
                <div className="title-row">
                  <h4 className="section-title"><span>3</span>种不耐受食材</h4>
                  <span className="advice-text">建议减少摄入</span>
                </div>
              <img src={food1Image} alt="" className="food-image1" />
              </div>

              <div className="diet-section">
              <div className="title-row">
                <h4 className="section-title "><span style={{color:"#003CBF"}}>6</span>种适宜食材</h4>
                <span className="advice-text">推荐补充食物</span>
                </div>
                <img src={food2Image} alt=""  className="food-image2"/>
              </div>
            </div>
            {/* 右侧医生建议 - 轮播 */}
            <div className="carousel-container">
              <div
                className="carousel"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="card">
                  <div className="doctor-card">
                    <img src={case1Image} alt="二胎宝妈" />
                    <div className="doctor">
                      <div className="doctor-name">二胎宝妈</div>
                      <div className="doctor-text">
                        产后突发顽固性荨麻疹，维生素B/C营养干预次日显效
                      </div>
                    </div>
                  </div>
                  <div className="doctor-news">
                    35岁，二胎产后三个月左右，突发顽固性荨麻疹，夜间症状尤为显著。医生建议查过敏源，使用炉甘石洗剂缓解。
                  </div>
                  <div className="doctor-new">
                    宝妈通过系统性营养监测，发现缺乏大量
                    <span> 维生素B族和维C</span>
                    ，通过营养干预，第二天明显看到大片红肿消退，直至完全消失。
                  </div>
                </div>

                <div className="card">
                  <div className="doctor-card">
                    <img src={case2Image} alt="跨国企业财务顾问" />
                    <div className="doctor">
                      <div className="doctor-name">跨国企业财务顾问</div>
                      <div className="doctor-text">
                        游走疼痛三年无解？精准营养检测揪出B族元凶！
                      </div>
                    </div>
                  </div>
                  <div className="doctor-news">
                    三年前出现全身游走性疼痛，多次检查未明病因，去年演度剧烈后缓解半年，近期复发加重。
                  </div>
                  <div className="doctor-new">
                    偶然通过精准营养检测发现严重缺乏<span>B族维生素</span>
                    ，导致神经营养不足引发疼痛。这种检测工具能实时监测营养状态，指导饮食调整和营养补充，无需医学知识也能自主操作，帮助普通人直观掌握身体需求，针对性改善健康问题。
                  </div>
                </div>

                <div className="card">
                  <div className="doctor-card">
                    <img src={case3Image} alt="大厂程序员" />
                    <div className="doctor">
                      <div className="doctor-name">大厂程序员</div>
                      <div className="doctor-text">
                        从失控发胖到代谢恢复：程序员靠补维A、维D、铬实现营养自救
                      </div>
                    </div>
                  </div>
                  <div className="doctor-news">
                    上班4-5年后开始发胖，且逐步变得不可控，喝凉水都胖。中西医方法都试过，但又容易反弹。
                  </div>
                  <div className="doctor-new">
                    自己开始研究如何减肥时，发现了营养与新陈代谢的关系，并通过精准营养监测了解到自己严重缺乏
                    <span>维生素A、D及微量元素铬</span>
                    。开始有计划有节奏的补充后，外加合理饮食，新陈代谢果然开始自我恢复。
                  </div>
                </div>
              </div>

              <div className="pagination-dots">
                <span
                  className={`dot ${currentSlide === 0 ? "active" : ""}`}
                  onClick={() => goToSlide(0)}
                ></span>
                <span
                  className={`dot ${currentSlide === 1 ? "active" : ""}`}
                  onClick={() => goToSlide(1)}
                ></span>
                <span
                  className={`dot ${currentSlide === 2 ? "active" : ""}`}
                  onClick={() => goToSlide(2)}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionCorrection;
