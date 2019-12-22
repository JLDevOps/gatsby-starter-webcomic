import React from 'react';
import { Icon } from 'antd';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        © Gatsby Starter Webcomic - Find more on 
        <a
          href='https://github.com/JLDevOps/gatsby-comic-template'
          target="_blank"
          rel="noopener noreferrer"
          title='Github'
        >
        &nbsp;Github
        </a>
      </footer>
    );
  }
}

export default Footer;
