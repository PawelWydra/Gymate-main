const animatedSpanStyle = `bg-red-500 h-1 w-10 mt-auto 
absolute bottom-0 left-1/2 transform -translate-x-1/2 
group-hover:w-full transition-all duration-700`;

function AnimatedSpan() {
  return <span className={animatedSpanStyle}></span>;
}

export default AnimatedSpan;
