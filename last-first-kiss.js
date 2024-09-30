const first = x => {
    if (x.length > 0) {
      return x[0];
    }
  };
  
  const last = x => {
    if (x.length > 0) {
      return x[x.length - 1];
    }
  };
  
  const kiss = x => {
    if (x.length >= 2) {
      return [x[x.length-1], x[0]];
    }
  };
  