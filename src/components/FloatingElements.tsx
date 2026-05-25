const FloatingElements = () => {
  return (
    <>
      <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-40" />
      <div className="scanlines" />
      <div className="fixed top-0 left-0 right-0 h-px bg-border/60 pointer-events-none z-[2]" />
      <div className="fixed bottom-0 left-0 right-0 h-px bg-border/60 pointer-events-none z-[2]" />
    </>
  );
};

export default FloatingElements;
