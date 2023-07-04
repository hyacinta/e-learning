// 1자리 숫자 2자리(문자열)로 변경
const itostr = (num) => (num < 10 ? `0${num}` : num);

// 현재 디바이스 확인
const checkDevice = () => {
  const userAgent = navigator.userAgent;
  const mobileRegex = [
    /mobile/i,
    /Android/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];
  return mobileRegex.some((mobile) => userAgent.match(mobile)) ? "m" : "p";
};

// 현재 차시, 페이지 확인
const getCurrentURL = (target) => {
  const url = this.location.href.split("/");
  return target === "chapter"
    ? Number(url[url.length - 2])
    : Number(url[url.length - 1].split(".")[0]);
};

const makeVideoURL = (device, groupCode) =>
  `/common/mp4/${device === "m" ? "m/" : ""}${itostr(currentChapter)}/${itostr(
    currentPage
  )}.mp4`;
