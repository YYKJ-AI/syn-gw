import React from 'react';
import './Team.css';

// 导入团队成员头像
import kongImage from '../image/头像-孔繁程@2x.png';
import maImage from '../image/头像-马圣杰@2x.png';
import wangImage from '../image/头像-孔繁程@2x.png';
import xiaoImage from '../image/FigmaDDSSlicePNGbd1677346eaddbb6c0d544b5c278057e.png';
import chenImage from '../image/FigmaDDSSlicePNGae6dc9304ba87b878e1b5f00b7a4e80f.png';

function Team() {
  return (
    <div className="team" id="team">
      <div className="container">
        <div className="team-header">
          <h2 className="team-title">我们的团队</h2>
        </div>
        
        <div className="team-members">
          <div className="team-member" data-aos="fade-up" data-aos-delay="0">
            <div className="member-avatar">
              <img src={kongImage} alt="孔繁程" />
            </div>
            <div className="member-info">
              <h3 className="member-name">孔繁程</h3>
              <div className="member-title">联合创始人 & 首席执行官</div>
              <div className="member-description">
                <p>科技与艺术领域连续创业者，毕业于中央美术学院</p>
                <p>正大管理学院 MBA 教授</p>
                <p>艺术品投资估值风控工具-繁海五力模型创始人</p>
                <p>视觉中國首席策略咨询师</p>
                <p>独昂App、亖空净化器联合创始人</p>
              </div>
            </div>
          </div>
          
          <div className="team-member" data-aos="fade-up" data-aos-delay="100">
            <div className="member-avatar">
              <img src={maImage} alt="马圣杰" />
            </div>
            <div className="member-info">
              <h3 className="member-name">马圣杰</h3>
              <div className="member-title">联合创始人 & 副总裁</div>
              <div className="member-description">
                <p>毕业于美国哥伦比亚大学</p>
                <p>前联合国全球监察员办公室（Ombudsman）主任助理</p>
                <p>前华为拉美大区副总裁助理</p>
                <p>前华为非洲国家营商环境部长</p>
              </div>
            </div>
          </div>
          
          <div className="team-member" data-aos="fade-up" data-aos-delay="200">
            <div className="member-avatar">
              <img src={xiaoImage} alt="王奈邦" />
            </div>
            <div className="member-info">
              <h3 className="member-name">王烝邦</h3>
              <div className="member-title">联合创始人 & 首席技术官</div>
              <div className="member-description">
                <p>毕业于美国加州大学圣克鲁斯</p>
                <p>前Facebook图形引擎工程师</p>
                <p>前Amazon，Lyft自动驾驶项目AI高级算法工程师</p>
              </div>
            </div>
          </div>
          
          <div className="team-member" data-aos="fade-up" data-aos-delay="300">
            <div className="member-avatar">
              <img src={xiaoImage} alt="肖纯" />
            </div>
            <div className="member-info">
              <h3 className="member-name">谢纯</h3>
              <div className="member-title">联合创始人 & 副总裁(供应链)</div>
              <div className="member-description">
                <p>毕业于澳大利亚巴拉瑞特大学商学院</p>
                <p>从事存储产品、通讯设备制造、芯片制造、供应链管理等30余年，拥有丰富的行业资源和实战经验</p>
              </div>
            </div>
          </div>
          
          <div className="team-member" data-aos="fade-up" data-aos-delay="400">
            <div className="member-avatar">
              <img src={chenImage} alt="陈思远" />
            </div>
            <div className="member-info">
              <h3 className="member-name">陈思远</h3>
              <div className="member-title">联合创始人 & 副总裁(AI)</div>
              <div className="member-description">
                <p>毕业于美国哥伦比亚大学，数据科学博士，师从3D打印与AI机器人领域权威Hod Lipson教授。</p>
                <p>专注于时间序列因果关系研究，提出非参数化高阶因果网络框架。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;