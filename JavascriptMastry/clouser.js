// closures

const outer = () => {
  const x = "abc";

  const inner = () => {
    const y = "efg";
    console.log(x, y);
  };

  return inner;
};

const InnerFnc = outer();

InnerFnc();
