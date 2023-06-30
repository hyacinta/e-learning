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
