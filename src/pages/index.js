import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [{
  title: '星收付',
  imageUrl: 'img/mott.png',
  description: (
    <>
      <p>企业收款，随时随地，资金安全，对账清晰</p>
      <li>资金安全，回款快，资金直入公司账户</li>
      <li>对账清晰，每笔订单详细记录业务信息</li>
      <li>配置灵活，适应不同的业务需求和场景</li>
    </>
  ),
}, {
  title: 'STAR MARK',
  imageUrl: 'img/undraw_docusaurus_tree.svg',
  description: (
    <>
      <p>帮助实体企业打通线上销售窗口</p>
      <li>简单易用，覆盖面广，直达用户</li>
      <li>团购、秒杀、优惠券</li>
      <li>众筹、爆款、二手货</li>
    </>
  ),
}, {
  title: '品牌小商城',
  imageUrl: 'img/undraw_docusaurus_react.svg',
  description: (
    <>
      <p>帮助企业打造自主品牌小程序商城</p>
      <li>每个企业都有自己的品牌</li>
      <li>门槛低、速度快、费用低</li>
      <li>内置营销工具，全程技术支持</li>
    </>
  ),
}];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout title={`${siteConfig.title}`} description="Lucky Byte, Inc.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link to={useBaseUrl('docs/')}
              className={clsx('button button--info button--lg',
                styles.getStarted,
              )}>
              从这里开始
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
