import React from 'react';
import { BackTop } from 'antd';
import Header from '../Header/Header';
import Tags from '../Tags/Tags';
import Bio from '../Bio/Bio';
import Footer from '../Footer/Footer';
import SocialMediaBlock from '../SocialMediaBlock/SocialMediaBlock';
import LatestPosts from '../LatestPosts/LatestPosts';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Header />
        <div className="main-content">
          <main>{children}</main>
          <aside>
            <Bio />
            <SocialMediaBlock></SocialMediaBlock>
            <LatestPosts></LatestPosts>
            <Tags />
          </aside>
          <Footer />
        </div>
        <BackTop />
      </React.Fragment>
    );
  }
}

export default Layout;
