import React from 'react';
import { Icon } from 'antd';
import './SocialMediaBlock.css';


const links = [
{
    icon: 'twitter',
    name: 'Twitter',
    href: '#',
},
{
    icon: 'facebook',
    name: 'Facebook',
    href: '#'
},
{
    icon: 'instagram',
    name: 'Instagram',
    href: '#'
},
{
    icon: 'github',
    name: 'Github',
    href: '#'
},
{
    icon: 'mail',
    name: 'mail',
    href: '#'
}
];

class SocialMediaBlock extends React.Component{
    render() {
        return (
          <div>
            {/* <h6 className="socialMediaTitle">Follow Me</h6> */}
            <ul className="social-links">
              {links.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                  >
                    <Icon type={link.icon} style={{ fontSize: '20px' }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
    }
}

export default SocialMediaBlock