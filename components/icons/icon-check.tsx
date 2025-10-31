const IconCheck = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      fill='none'
      viewBox='0 0 20 20'
    >
      <path
        className='stroke-neutral-0'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.6'
        d='M16.666 5 7.5 14.167 3.333 10'
      />
    </svg>
  );
};

export default IconCheck;
