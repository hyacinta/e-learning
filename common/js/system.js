const device = "p";
let currentChapter = 1;
let currentPage = 1;
const totalPage = 4;
const videoURL = "";
const initVolume = 0.7;

let isVideoPlay = true;
let isPopupOpen = true;
let isProgressDraggable = true;

$(document).ready(() => {
  setHeader();
  $(".wrap").append(mainUI());
  $(".wrap").append(navUI());
  $(".wrap").append(scriptUI());
  $(".wrap").append(helpUI());
});

const setHeader = () => {
  $(".wrap").append(headerUI(courseTitle, lessonList[currentChapter - 1]));
};

const setMain = () => {};

const setVideoPage = () => {};

const setBookMark = () => {
  bookMarkUI();
};

const setBookMarkList = () => {
  bookMarkListUI(bookMarkInfo);
};

const setIntroSkip = () => {};

const setQuizPage = () => {};

const setQuizIntro = () => {};

const setQuizPaper = () => {};

const setQuestion = () => {};

const setAdditional = () => {};

const setSelect = () => {};

const setAnswerSheet = () => {};

const setAlert = () => {};

const setQuizResult = () => {};

const setController = () => {};

const setNav = () => {};

const setScript = () => {};

const setHelp = () => {};

const setHelpNav = () => {};

const setLearningMap = () => {};

const setPageView = () => {};

const setKeyboard = () => {};
