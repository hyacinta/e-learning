const device = checkDevice();
const currentChapter = getCurrentURL("chapter");
let currentPage = getCurrentURL("page");
const totalPage = pageInfo.length;
const videoURL = makeVideoURL();
const initVolume = 0.7;

let isVideoPlay = true;
let isPopupOpen = true;
let isProgressDraggable = true;

$(document).ready(() => {
  $("title").text(courseTitle);
  setHeader();
  setMain(pageInfo[currentPage - 1]);
  setNav();
  setScript();
});

const setHeader = () => {
  $(".wrap").append(headerUI(lessonList[currentChapter - 1]));
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

  switch (type) {
    case "video-i":
      setSkipBtn();
      break;
    case "video":
      setBookmark();
      break;
    default:
      break;
  }
};

const setBookmark = () => {
  $(".main__videoPage").append(bookMarkUI());
  setBookmarkList();

  // 동작
};

const setBookmarkList = () => {
  $(".bookMark__list").append(bookMarkListUI(bookMarkInfo));

  // 동작
};

const setSkipBtn = () => {
  $(".main__videoPage").append(skipBtnUI());

  // 동작
};

const setQuizPage = () => {
  $(".main__quizPage").html(quizPageUI());
  if (useQuizIntro) {
    setQuizIntro();
    return;
  }
  setQuizPaper(quizInfo[currentQuizNum - 1]);
};

const setQuizIntro = () => {
  $(".main__quizPage").append(quizIntroUI());

  // 동작
  $(".intro__btnStart").on("click", function () {
    $(".quizPage__intro").remove();
    setQuizPaper(quizInfo[currentQuizNum - 1]);
  });
};

const setQuizPaper = (currentQuiz) => {
  const { additionalType, additional } = currentQuiz;
  $(".main__quizPage").append(quizPaperUI());
  $(".quizPage__paper").append(quizQuestionUI(currentQuiz));
  if (additionalType !== null) {
    $(".quizPage__paper").append(additionalUI(additionalType, additional));
  }
  $(".quizPage__paper").append(selectUI(currentQuiz));
  setAnswerSheet(currentQuiz);
  setAlert();

  // 동작
  $(".select__btnSelect").on("click", function (e) {
    $(".paper__alert").removeClass("active");
    $(this).parent().toggleClass("myAnswer");

    if ($(this).parent().hasClass("myAnswer")) {
      myQuizAnswer.push($(this).attr("data-select"));
    }
    if (!$(this).parent().hasClass("myAnswer")) {
      myQuizAnswer = myQuizAnswer.filter(
        (item) => item !== $(this).attr("data-select")
      );
    }
    if (!$(".select__btnAnswerCheck").length && $(".myAnswer").length) {
      setQuizSolveBtn(currentQuiz);
    }
    if ($(".select__btnAnswerCheck").length && !$(".myAnswer").length) {
      $(".select__btnAnswerCheck").remove();
    }
  });
  $(".select__input").focus(function () {
    if (!$(".select__btnAnswerCheck").length) {
      setQuizSolveBtn(currentQuiz);
    }
  });
};

const setQuizSolveBtn = ({ type, answer, explanation }) => {
  $(".paper__select").after(quizSolveBtnUI());
  $(".select__btnAnswerCheck").on("click", function () {
    if (type === "ju") {
      myQuizAnswer.push($(".select__input").val());
    }
    solveQuiz(type, answer, explanation);
  });
};
const setAnswerSheet = (currentQuiz) => {
  $(".quizPage__paper").append(answerSheetUI(currentQuiz));
  if (!(currentQuiz.id === quizInfo.length)) {
    $(".answerSheet__btnNextStep").html("다음문제");
  }

  // 동작
  $(".answerSheet__btnNextStep").on("click", function () {
    if (currentQuiz.id === quizInfo.length) {
      setQuizResult();
      return;
    }
    currentQuizNum += 1;
    quizChance = quizChanceInit;
    setQuizPage();
  });
};

const setAlert = () => {
  $(".quizPage__paper").append(alertUI());

  // 동작
};

const setQuizResult = () => {
  $(".main__quizPage").append(quizResultUI());

  // 동작
  $(".quizPage__result").on("click", function () {
    $(".quizPage__result").remove();
    quizChance = quizChanceInit;
    currentQuizNum = 1;
    myQuizAnswer = [];
    myQuizResult = [];
    setQuizPage();
  });
};

const setNav = () => {
  $(".wrap").append(navUI());

  // 동작
  $(".nav__subLink").on("click", function (e) {
    e.preventDefault();
    movePage($(this).attr("data-nav__target"));
  });
  $(".nav__btnClosed--40").on("click", function () {
    $(".nav").removeClass("open");
  });
};

const setScript = () => {
  $(".wrap").append(scriptUI(scriptText[currentPage - 1]));

  // 동작
  $(".script__btnClosed--24").on("click", function () {
    $(".script").removeClass("open");
  });
};

const setHelp = () => {
  $(".wrap").append(helpUI());
  setHelpNav();
  switch (currentHelpPage) {
    case 1:
      setLearningMap();
      break;
    case 2:
      setPageview();
      break;
    case 3:
      setKeyControl();
      break;
  }

  // 동작
  $(".help__btnClosed--40").on("click", function () {
    $(".help").remove("");
  });
};

const setHelpNav = () => {
  $(".help__helpNav").append(helpNavUI());

  // 동작
  $(".helpNav__btnMovePage").on("click", function () {
    currentHelpPage = Number($(this).attr("data-helpmovetarget"));

    $(".helpNav__item").removeClass("active");
    $(".helpNav__btnMovePage").attr("disabled", false);

    $(this).parent().addClass("active");
    $(this).attr("disabled", true);

    switch (currentHelpPage) {
      case 1:
        setLearningMap();
        break;
      case 2:
        setPageview();
        break;
      case 3:
        setKeyControl();
        break;
    }
  });
};

const setLearningMap = () => {
  $(".help__contentsWrap").html(learningMapUI());
  $(".help__contentsWrap").addClass("learningmap");
  $(".help__contentsWrap").removeClass("pageview");
  $(".help__contentsWrap").removeClass("keyControl");

  // 동작
  console.log("러닝맵");
};

const setPageview = () => {
  $(".help__contentsWrap").html(pageviewUI());
  $(".help__contentsWrap").addClass("pageview");
  $(".help__contentsWrap").removeClass("learningmap");
  $(".help__contentsWrap").removeClass("keyControl");

  // 동작
  console.log("페이지뷰");
};

const setKeyControl = () => {
  $(".help__contentsWrap").html(keyControlUI());
  $(".help__contentsWrap").addClass("keyControl");
  $(".help__contentsWrap").removeClass("pageview");
  $(".help__contentsWrap").removeClass("learningmap");

  // 동작
  console.log("키컨트롤");
};

const setController = () => {
  $("main").append(controllerUI(pageInfo[currentPage - 1]));

  // 동작
  $(".controller__btnIndex").on("click", function () {
    $(".nav").toggleClass("open");
  });
  $(".controller__btnInfo").on("click", function () {
    setHelp();
    $(".help").addClass("open");
  });
  $(".controller__btnScript").on("click", function () {
    $(".script").toggleClass("open");
  });
  $(".controller__btnFullscreen").on("click", function () {
    $("video").fullscreen().toggle();
  });
  $(".controller__btnLock").on("click", function () {
    $(".wrap").toggleClass("unLock");
  });
  $(".controller__btnPrevPage").on("click", function (e) {
    e.preventDefault();
    movePage($(this).attr("class"));
  });
  $(".controller__btnNextPage").on("click", function (e) {
    e.preventDefault();
    movePage($(this).attr("class"));
  });
};
