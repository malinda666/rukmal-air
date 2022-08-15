import { FC } from 'react'

const CloseIcon: FC = () => {
  return (
    <svg
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='menuicon'
      id='js--menuicon-close'
    >
      <line
        x1='13.788'
        y1='1.28816'
        x2='1.06011'
        y2='14.0161'
        stroke='currentColor'
        strokeWidth='1.2'
        // style={{
        //   opacity: 0,
        //   strokeDashoffset: 0.002,
        //   strokeDasharray: '0px, 999999px',
        // }}
        // style={{'opacity: 0; stroke-dashoffset: 0.002; stroke-dasharray: 0px, 999999px;'}}
      ></line>
      <line
        x1='1.06049'
        y1='1.43963'
        x2='13.7884'
        y2='14.1675'
        stroke='currentColor'
        strokeWidth='1.2'
        // style={{
        //   opacity: 0,
        //   strokeDashoffset: 0.002,
        //   strokeDasharray: '0px, 999999px',
        // }}
      ></line>
    </svg>
  )
}
const MenuIcon: FC = () => {
  return (
    <svg
      viewBox='0 0 18 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='menuicon'
      id='js--menuicon-burger'
    >
      <line
        x1='18'
        y1='0.6'
        y2='0.6'
        stroke='currentColor'
        strokeWidth='1.2'
        // style='opacity: 1; stroke-dashoffset: 0; stroke-dasharray: none;'
        // style={{
        //   opacity: 1,
        //   strokeDashoffset: 0,
        //   strokeDasharray: 'none',
        // }}
      ></line>
      <line
        x1='18'
        y1='5.7167'
        y2='5.7167'
        stroke='currentColor'
        strokeWidth='1.2'
        // style={{
        //   opacity: 1,
        //   strokeDashoffset: 0,
        //   strokeDasharray: 'none',
        // }}
      ></line>
      <line
        x1='18'
        y1='10.8334'
        y2='10.8334'
        stroke='currentColor'
        strokeWidth='1.2'
        // style={{
        //   opacity: 1,
        //   strokeDashoffset: 0,
        //   strokeDasharray: 'none',
        // }}
      ></line>
    </svg>
  )
}

export { CloseIcon, MenuIcon }
