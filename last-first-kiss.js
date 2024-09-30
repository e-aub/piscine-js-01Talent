const first = x => {
    if (x.length > 0) {
      return x[0];
    }
  };
  
  const last = x => {
    if (x.length > 0) {
      return x[x.length-1];
    }
  };
  
  const kiss = x => {
    if (x.length >= 2) {
      return x.slice(0, 1) + x.slice(-1);
    }
  };