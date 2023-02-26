import {
  FaDev,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaProductHunt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

import type { MotionLinkProps } from './types';

export const socialLinks: Array<MotionLinkProps> = [
  {
    platformName: 'GitHub',
    url: 'https://github.com/dnachavez',
    icon: FaGithub,
  },
  {
    platformName: 'LinkedIn',
    url: 'https://linkedin.com/in/dnachavez',
    icon: FaLinkedin,
  },
  {
    platformName: 'Twitter',
    url: 'https://twitter.com/dnachavez',
    icon: FaTwitter,
  },
  {
    platformName: 'Instagram',
    url: 'https://instagram.com/dnachavez',
    icon: FaInstagram,
  },
  {
    platformName: 'YouTube',
    url: 'https://youtube.com/channel/superdanglyde',
    icon: FaYoutube,
  },
  {
    platformName: 'dev.to',
    url: 'https://dev.to/dnachavez',
    icon: FaDev,
  },
  {
    platformName: 'Medium',
    url: 'https://medium.com/@dnachavez',
    icon: FaMedium,
  },
  {
    platformName: 'ProductHunt',
    url: 'https://www.producthunt.com/@dnachavez/made',
    icon: FaProductHunt,
  },
  {
    platformName: 'e-mail',
    url: 'mailto:dna.chavez@outlook.com',
    icon: FaEnvelope,
  },
];
