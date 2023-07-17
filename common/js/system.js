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
  let video;

  switch (type) {
    case "videoPage":
      $(".main__videoPage").append(videoPageUI());
      video = $(".video");
      setVideoPage(subType, video);
      break;
    case "quizPage":
      $(".main__quizPage").html(quizPageUI());
      video = $(".audio", video);
      setQuizPage();
  }

  setController(video, subType);
};

const setVideoPage = (type, video) => {
  switch (type) {
    case "video-i":
      setSkipBtn(video);
      break;
    case "video":
      setBookmark(video);
      break;
    default:
      break;
  }

  // 영상 재생 준비중
  video.on("loadedmetadata", () => {
    isVideoPlay = !video[0].paused;
    $(".controller__btnPlay").toggleClass("pause", isVideoPlay);
    video[0].volume = initVolume;
    $(".videoTime__total").text(convertSecToMin(video[0].duration));
    updateProgress($(".volume__progress .progress__bar"), initVolume * 100);
  });

  // 영상 재생중
  video.on("timeupdate", () => {
    isVideoPlay = !video[0].paused;
    $(".controller__btnPlay").toggleClass("pause", isVideoPlay);
    const totalPlayTime = video[0].duration;
    const currentPlayTime = video[0].currentTime;
    const videoPerc = getPerc(currentPlayTime, totalPlayTime);
    updateProgress($(".videoTime__progress .progress__bar"), videoPerc);
    $(".videoTime__current").text(convertSecToMin(currentPlayTime));
    if ($(".video__btnSkip").length && video[0].currentTime >= introSkipTime) {
      $(".video__btnSkip").remove();
    }
  });

  // 영상 재생 종료
  video.on("ended", () => {
    isVideoPlay = false;
    $(".controller__btnPlay").toggleClass("pause", isVideoPlay);
  });
};

const setBookmark = (video) => {
  $(".main__videoPage").append(bookMarkUI());

  // 동작
  $(".bookMark__btnOpen").on("click", function () {
    $(".video__bookMark").toggleClass("open");
    setBookmarkList(video);
  });
};

const setBookmarkList = (video) => {
  $(".bookMark__list").html(bookMarkListUI(bookMarkInfo));

  // 동작
  $(".bookMark__btnMoveTime").on("click", function () {
    $(".video__bookMark").removeClass("open");
    operateVideo(
      video,
      convertMinToSec(bookMarkInfo[$(this).attr("data-timesynk") - 1].synkTime)
    );
  });
};

const setSkipBtn = (video) => {
  $(".main__videoPage").append(skipBtnUI());

  // 동작
  $(".video__btnSkip").on("click", function () {
    operateVideo(video, introSkipTime);
    $(".video__btnSkip").remove();
  });
};

const setQuizPage = () => {
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
};

const setPageview = () => {
  $(".help__contentsWrap").html(pageviewUI());
  $(".help__contentsWrap").addClass("pageview");
  $(".help__contentsWrap").removeClass("learningmap");
  $(".help__contentsWrap").removeClass("keyControl");
};

const setKeyControl = () => {
  $(".help__contentsWrap").html(keyControlUI());
  $(".help__contentsWrap").addClass("keyControl");
  $(".help__contentsWrap").removeClass("pageview");
  $(".help__contentsWrap").removeClass("learningmap");
};

const setController = (video, subType) => {
  $("main").append(controllerUI(pageInfo[currentPage - 1]));

  // 재생/일시정지
  $(".controller__btnPlay").on("click", function () {
    console.log("귤");
    operateVideo(video);
  });
  // 영상 다시보기
  $(".controller__btnReplay").on("click", function () {
    operateVideo(video, 0);

    if (subType === "video-i") {
      setSkipBtn(video);
    }
  });
  // 재생속도 팝업 열기/닫기
  $(".playRate__btnOpen").on("click", function () {
    $(".controller__playRate").toggleClass("open");
  });
  // 영상 재생속도 조절
  $(".playRate__btnChangeRate").on("click", function () {
    $(".playRate__btnOpen").html($(this).attr("data-targetrate"));
    video[0].playbackRate = $(this).attr("data-targetrate");
    $(".controller__playRate").removeClass("open");
    $(".playRate__item").show();
    $(this).parent().hide();
  });
  // 소리 켜기/끄기
  $(".controller__btnVolume").on("click", function () {
    video[0].muted = !video[0].muted;
    $(".controller__btnVolume").toggleClass("mute", video[0].muted);
    if (!video[0].muted) {
      updateProgress(
        $(".volume__progress .progress__bar"),
        video[0].volume * 100
      );
      return;
    }
    updateProgress($(".volume__progress .progress__bar"), 0);
  });
  // index 열기/닫기
  $(".controller__btnIndex").on("click", function () {
    $(".nav").toggleClass("open");
  });
  // help 열기/닫기
  $(".controller__btnInfo").on("click", function () {
    setHelp();
    $(".help").addClass("open");
  });
  // 스크립트창 열기/닫기
  $(".controller__btnScript").on("click", function () {
    $(".script").toggleClass("open");
  });
  // 영상 전체화면으로 보기
  $(".controller__btnFullscreen").on("click", function () {
    $("video").fullscreen().toggle();
  });
  // 컨트롤러 잠금/잠금해제
  $(".controller__btnLock").on("click", function () {
    $(".wrap").toggleClass("unLock");
  });
  // 이전 페이지 이동
  $(".controller__btnPrevPage").on("click", function (e) {
    e.preventDefault();
    movePage($(this).attr("class"));
  });
  // 다음 페이지 이동
  $(".controller__btnNextPage").on("click", function (e) {
    e.preventDefault();
    movePage($(this).attr("class"));
  });
};
