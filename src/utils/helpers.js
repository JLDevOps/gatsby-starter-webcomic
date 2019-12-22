import { COLOR } from './constant';

export function cacheImages(url) {
  const weserv = 'https://images.weserv.nl';
  if (url) {
    return `${weserv}?url=${url.replace('https://', '')}`;
  }
}

export function textOverflowEllipsis(str = '', len = 180) {
  return str.substring(0, len) + '...';
}

export function tagColor(tag) {
  tag = tag.toUpperCase(tag);
  return COLOR.hasOwnProperty(tag) ? COLOR[tag] : '#ff9800';
}

export function getImages() {
  const nodeList = document.querySelectorAll('.gatsby-resp-image-link');
  return Array.from(nodeList).map(node => node.href);
}

export function isMobileDevice() {
  const ua = navigator.userAgent
  const isAndroid = /Android/i.test(ua)
  const isiPhone = /iPhone/i.test(ua)
  const isiPad = /iPad/i.test(ua)

  return isAndroid || isiPhone || isiPad
}
