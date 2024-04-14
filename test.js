function humanReadable(seconds) {
  const actualyNum = (num) => {
    return num < 10 ? "0" + num : num;
  };
  let hours = actualyNum(Math.floor(seconds / 3600));
  let minuts = actualyNum(Math.floor((seconds - hours * 3600) / 60));
  let sec = actualyNum(seconds % 60);

  return `${hours}:${minuts}:${sec}`;
}

console.log(humanReadable(35944));
