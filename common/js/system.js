const device = checkDevice();
let currentChapter = getCurrentURL("chapter");
let currentPage = getCurrentURL("page");
const totalPage = pageInfo.length;
const videoURL = makeVideoURL();
const initVolume = 0.7;

let isVideoPlay = true;
let isPopupOpen = true;
let isProgressDraggable = true;

$(document).ready(() => {
  setHeader();
  setMain();
  setNav();
  setScript();
  sethelp();
});

const setHeader = () => {
  $(".wrap").append(headerUI());
};

const setMain = () => {
  $(".wrap").append(mainUI());
  setVideoPage();
  setQuizPage();
  setController();
};

const setVideoPage = () => {
  $(".main__videoPage").append(videoPageUI());
  setBookmark();
  setSkipBtn();
};

const setBookmark = () => {
  $(".main__videoPage").append(bookMarkUI());
  setBookmarkList();
};

const setBookmarkList = () => {
  $(".bookMark__list").append(bookMarkListUI());
};

const setSkipBtn = () => {
  $(".main__videoPage").append(skipBtnUI());
};

const setQuizPage = () => {
  $(".main__quizPage").append(quizPageUI());
  // setQuizIntro();
  setQuizPaper();
  // setQuizResult();
};

const setQuizIntro = () => {
  $(".main__quizPage").append(quizIntroUI());
};

const setQuizPaper = () => {
  $(".main__quizPage").append(quizPaperUI());
  // setQuestion();
  // setAdditional();
  // setSelect();
  // setAnswerSheet();
  // setAlert();
};

const setQuestion = () => {
  $(".quizPage__quiz").append(quizQuestionUI());
};

const setAdditional = () => {
  $(".quizPage__quiz").append(additionalUI());
};

const setSelect = () => {
  $(".quizPage__quiz").append(selectUI());
};

const setAnswerSheet = () => {
  $(".quizPage__quiz").append(answerSheetUI());
};

const setAlert = () => {
  $(".quizPage__quiz").append(alertUI());
};

const setQuizResult = () => {
  $(".main__quizPage").append(quizResultUI());
};

const setController = () => {
  $("main").append(controllerUI());
};

const setNav = () => {
  $(".wrap").append(navUI());
};

const setScript = () => {
  $(".wrap").append(scriptUI());
};

const sethelp = () => {
  $(".wrap").append(helpUI());
  setHelpNav();
  setLearningMap();
  setPageview();
  setKeyboard();
};

const setHelpNav = () => {
  $(".help__helpNav").append(helpNavUI());
};

const setLearningMap = () => {
  $(".help__contentsWrap").append(learningMapUI());
};

const setPageview = () => {
  $(".help__contentsWrap").append(pageviewUI());
};

const setKeyboard = () => {
  $(".help__contentsWrap").append(keyboardUI());
};
