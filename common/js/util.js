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

// 페이지 이동
const movePage = (thisBtn) => {
  if (
    (currentPage === 1 && thisBtn === "controller__btnPrevPage") ||
    (currentPage === totalPage && thisBtn === "controller__btnNextPage")
  ) {
    alert(currentPage === 1 ? "첫 페이지 입니다." : "마지막 페이지 입니다.");
    return;
  }
  currentPage =
    thisBtn === "controller__btnPrevPage"
      ? currentPage - 1
      : thisBtn === "controller__btnNextPage"
      ? currentPage + 1
      : thisBtn;
  window.open(itostr(currentPage) + ".html", "_self");
};

const checkAnswer = (answer) =>
  myQuizAnswer.length === answer.length &&
  answer.every((item) => myQuizAnswer.includes(item))
    ? true
    : false;

const solveQuiz = (type, answer) => {
  if (quizChance <= 0) return;
  quizChance = type === "ox" ? 0 : quizChance - 1;
  const currentQuizResult = checkAnswer(answer) ? "correct" : "wrong";

  if (checkAnswer(answer) || !quizChance) {
    myQuizResult.push(currentQuizResult);
    if (type === "sa") {
      answer.forEach((item) => {
        $(".paper__select")
          .children(":eq(" + (Number(item) - 1) + ")")
          .addClass("correctAnswer");
      });
    }
    if (type === "ju") {
      $(this).attr("disabled", true);
    }
    $(".paper__answerSheet").addClass("active");
    myQuizAnswer = [];
    return;
  }
  $(".paper__alert").addClass("active");
  $(".select__item").removeClass("myAnswer");
  $(".select__btnAnswerCheck").remove();
  if (type === "ju") {
    $(".select__input").val("");
  }
  myQuizAnswer = [];
};
