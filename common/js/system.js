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
  setMain(pageInfo[currentPage - 1]);
  setNav();
  setScript();
  setHelp();
});

const setHeader = () => {
  $(".wrap").append(headerUI(courseTitle, lessonList[currentChapter - 1]));
};

const setMain = ({ type, subType }) => {
  $(".wrap").append(mainUI(type));
  switch (type) {
    case "videoPage":
      setVideoPage(subType);
      break;
    case "quizPage":
      setQuizPage();
    default:
      setVideoPage();
      break;
  }
  setController();
};

const setVideoPage = (type) => {
  $(".main__videoPage").append(videoPageUI());
  if (type === "video-i") {
    setSkipBtn();
    return;
  }
  setBookmark();
};

const setBookmark = () => {
  $(".main__videoPage").append(bookMarkUI());
  setBookmarkList();
};

const setBookmarkList = () => {
  $(".bookMark__list").append(bookMarkListUI(bookMarkInfo));
};

const setSkipBtn = () => {
  $(".main__videoPage").append(skipBtnUI());
};

const setQuizPage = () => {
  $(".main__quizPage").append(quizPageUI());
  // setQuizIntro();
  // setQuizPaper(quizInfo[currentQuizNum - 1]);
  setQuizResult();
};

const setQuizIntro = () => {
  $(".main__quizPage").append(quizIntroUI());
};

const setQuizPaper = (currentQuiz) => {
  const { additionalType, additional } = currentQuiz;
  $(".main__quizPage").append(quizPaperUI());
  $(".quizPage__quiz").append(quizQuestionUI(currentQuiz));
  if (additionalType !== null) {
    $(".quizPage__quiz").append(additionalUI(additionalType, additional));
  }
  $(".quizPage__quiz").append(selectUI(currentQuiz));
  setAnswerSheet(currentQuiz);
  setAlert();
};

const setAnswerSheet = (currentQuiz) => {
  $(".quizPage__quiz").append(answerSheetUI(currentQuiz));
};

const setAlert = () => {
  $(".quizPage__quiz").append(alertUI());
};

const setQuizResult = () => {
  $(".main__quizPage").append(quizResultUI(myQuizResult));
};

const setController = () => {
  $("main").append(controllerUI());
};

const setNav = () => {
  $(".wrap").append(navUI());
};

const setScript = () => {
  $(".wrap").append(scriptUI(scriptText[currentPage - 1]));
};

const setHelp = () => {
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
