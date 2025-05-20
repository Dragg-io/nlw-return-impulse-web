import React from 'react';
import wppImage from '../../assets/WhatsApp_Logo_flutuante.png';

const WppButton: React.FC = () => {
  return <a className='absolute bottom-[85px] right-[18px] flex flex-col items-end w-[50px]' href="https://wa.me/551128530349" target="_blank"><img src={wppImage} /> </a>;
}

export default WppButton;