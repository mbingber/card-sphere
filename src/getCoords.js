const maxIdx = nums => {
  let max = -Infinity;
  let maxIdx;
  nums.forEach((num, idx) => {
    if (num > max) {
      max = num;
      maxIdx = idx;
    }
  });
  return maxIdx;
};

const flatten = arrs => arrs.reduce(
  (bigArr, littleArr) => [...bigArr, ...littleArr],
  []
);

const getAngle = (n, i) => Math.PI / n * (i + 0.5);

const exactN = (n, A) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.sin(getAngle(n, i));
  }
  return sum * 2 * n / A;
};

const getNumRows = (N, A) => {
  let n = 0;
  while(exactN(n, A) < N) n++;
  return n;
};

const getBuckets = (N, A) => {
  const n = getNumRows(N, A);
  const buckets = Array(n).fill(0);
  const perims = buckets.map((_, idx) =>
    2 * n / A * Math.sin(getAngle(n, idx))
  );
  for (let i = 0; i < N; i++) {
    const bucketIdx = maxIdx(perims);
    buckets[bucketIdx]++;
    perims[bucketIdx] -= A * Math.PI / n;
  }
  return buckets;
};

const getTheDamnCoords = (N, A) => {
  const buckets = getBuckets(N, A);
  const n = buckets.length;
  const twoPi = Math.PI * 2;
  return flatten(buckets.map((bucketAmt, bandIdx) => {
    const theta = getAngle(n, bandIdx);
    // const offset = Math.random() * twoPi;
    const offset = 0
    return Array(bucketAmt)
      .fill(0)
      .map((_, i) => (twoPi / bucketAmt * i + offset) % twoPi)
      .map(phi => ({theta, phi }));
  }));
};

export default getTheDamnCoords;
