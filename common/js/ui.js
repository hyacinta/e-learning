const headerUI = ({ id, title }) => `<header class="header flex--between">
  <h1 class="header__logo">${courseTitle}</h1>
  <h2 class="header__lesson"><span class="lesson__number">${id}</span><span class="lesson__title">${title}</span></h2>
</header>`;

const mainUI = (type) => `<main class="main__${type} position--center"></main>`;

const videoPageUI = () => `<video class="video" autoplay>
  <source src="/media/cc0-videos/flower.mp4" type="video/mp4">
</video>`;

const bookMarkUI = () => `<div class="video__bookMark">
  <h4 class="a11yHidden">영상 북마크 영역</h4>
  <button type="button" class="bookMark__btnOpen">북마크</button>
  <ol class="bookMark__list">
  </ol>
</div>`;

const bookMarkListUI = (list) =>
  list.map(
    ({ id, title }) => `<li class="bookMark__item">
  <button type="button" class="bookMark__btnMoveTime" data-timesynk="${id}">${title}</button>
</li>
`
  );

const skipBtnUI = () =>
  `<button type="button" class="video__btnSkip">SKIP</button>`;

const quizPageUI = () =>
  `<audio class="audio" autoplay src="/media/cc0-audio/t-rex-roar.mp3"></audio>`;

const quizIntroUI = () => `<section class="quizPage__intro flex--center">
  <h4 class="intro__title">QUIZ</h4>
  <p class="intro__exp">지금까지 학습한 내용을 퀴즈를 통해 확인해 보겠습니다.<br>총 <em>${quizInfo.length}개</em>의 문제가 주어지며 기회는 <em>${quizChanceInit}번</em>입니다.</p>
  <button type="button" class="intro__btnStart">START</button>
</section>`;

const quizPaperUI = () =>
  `<section class="quizPage__paper flex--center"></section>`;

const quizQuestionUI = ({
  id,
  type,
  oxQuestion,
  question,
}) => `<div class="paper__question flex--start">
  <div class="question__number">${id}</div>
  <div class="question__titleWrap">
    ${type === "ox" ? `<p class="question__oxExp">${oxQuestion}</p>` : ``}
    <p class="question__text">${question}</p>
  </div>
</div>`;

const additionalUI = (type, additional) => {
  if (type === "list") {
    return `<ul class="paper__additional code flex--center">
    ${additional
      .map((item) => `<li class="additional__item">${item}</li>`)
      .join("")}
  </ul>`;
  }
  if (type === "code") {
    return `<code class="paper__additional code flex--center">${additional}</code>`;
  }
  return `<p class="paper__additional flex--center">${additional}</p>`;
};

const selectUI = ({ type, distractor }) => {
  if (type === "sa") {
    return `<ul class="paper__select sa">${distractor
      .map(
        (item, idx) =>
          `<li class="select__item flex--start"><button type="button" class="select__btnSelect flex--start" data-select="${
            idx + 1
          }">${item}</button></li>`
      )
      .join("")}</ul>`;
  }
  if (type === "ox") {
    return `<ul class="paper__select ox flex--center">
    <li class="select__item"><button type="button" class="select__btnSelect O" data-select="O">맞다</button></li>
    <li class="select__item"><button type="button" class="select__btnSelect X" data-select="X">틀리다</button></li>
    </ul>`;
  }
  if (type === "ju") {
    return `<div class="paper__select ju flex--center">
    <input type="text" class="select__input" placeholder="정답을 입력하세요.">
  </div>`;
  }
};

const quizSolveBtnUI =
  () => `<button type="button" class="select__btnAnswerCheck">
정답확인
</button>`;

const answerSheetUI = ({
  id,
  type,
  answer,
  explanation,
}) => `<div class="paper__answerSheet position--bottom">
  <div class="answerSheet__inner">
    <p class="answerSheet__correctAnswer flex--start">${
      type === "ox" ? `<span>${answer}</span>` : `${answer}`
    }</p>
    <p class="answerSheet__exp flex--start">${explanation}</p>
  </div>
  <button type="button" class="answerSheet__btnNextStep">${
    id === quizInfo.length ? "결과보기" : "다음문제"
  }</button>
</div>`;

const alertUI = () => `<div class="paper__alert position--center flex--center">
  <p class="alert__textBox flex--center"><span>다시 한 번 풀어보세요.</span></p>
</div>`;

const quizResultUI = () => `<section class="quizPage__result flex--center">
  <h4 class="result__title">결과보기</h4>
  <ul class="result__list flex--center">${myQuizResult
    .map(
      (item) =>
        `<li class="result__item1 ${item}">${
          item === "correct" ? "맞혔습니다." : "틀렸습니다."
        }</li>`
    )
    .join("")}</ul>
  <button type="button" class="result__btnRetry">다시풀기</button>
</section>`;

const controllerUI = ({
  type,
}) => `<section class="controller flex--between position--bottom">
  <h4 class="a11yHidden">컨트롤러</h4>
  <div class="controller__videoTime flex--center ${
    type !== "videoPage" ? "disabled" : ""
  }">
    <p class="videoTime__current">00:00</p>
    <div class="videoTime__progress small">
      <div class="progress__bar"></div>
    </div>
    <p class="videoTime__total">00:00</p>
  </div>
  <button type="button" class="controller__btnPlay" ${
    type !== "videoPage" ? "disabled" : ""
  }></button>
  <button type="button" class="controller__btnReplay" ${
    type !== "videoPage" ? "disabled" : ""
  }></button>
  <div class="controller__playRate">
    <button type="button" class="playRate__btnOpen" ${
      type !== "videoPage" ? "disabled" : ""
    }>1.0</button>
    <ul class="playRate__list">
      <li class="playRate__item flex--center"><button type="button" class="playRate__btnChangeRate" data-targetrate="1.0">1.0</button></li>
      <li class="playRate__item flex--center"><button type="button" class="playRate__btnChangeRate" data-targetrate="1.2">1.2</button></li>
      <li class="playRate__item flex--center"><button type="button" class="playRate__btnChangeRate" data-targetrate="1.5">1.5</button></li>
      <li class="playRate__item flex--center"><button type="button" class="playRate__btnChangeRate" data-targetrate="1.7">1.7</button></li>
      <li class="playRate__item flex--center"><button type="button" class="playRate__btnChangeRate" data-targetrate="2.0">2.0</button></li>
    </ul>
  </div>
  <div class="controller__volume flex--center">
    <button type="button" class="controller__btnVolume" ${
      type !== "videoPage" ? "disabled" : ""
    }></button>
    <div class="volume__progress large  ${
      type !== "videoPage" ? "disabled" : ""
    }">
      <div class="progress__bar"></div>
    </div>
  </div>
  <button type="button" class="controller__btnIndex"></button>
  <button type="button" class="controller__btnInfo"></button>
  <button type="button" class="controller__btnScript"></button>
  <button type="button" class="controller__btnFullscreen"></button>
  <button type="button" class="controller__btnLock"></button>
  <div class="controller__pageNation flex--center">
    <a href="" class="controller__btnPrevPage"></a>
    <p class="pageNation__current">${itostr(currentPage)}</p>
    <p class="pageNation__total">${itostr(totalPage)}</p>
    <a href="" class="controller__btnNextPage"></a>
  </div>
</section>`;

const navUI = () => `<nav class="nav position--right flex--center">
  <ul class="nav__list">
  ${pageGroup
    .map(
      ({ groupTitle, group }) => `<li class="nav__itemWrap">
  <p class="nav__itemTitle">${groupTitle}</p>
  <ul class="nav__subList">
      ${group
        .map(
          (item) =>
            `<li class="nav__subItem"><a href="" class="nav__subLink flex--start" data-nav__target="${item}">${
              pageInfo[item - 1].title
            }</a></li>`
        )
        .join("")}
  </ul>
</li>`
    )
    .join("")}
  </ul>
  <button type="button" class="nav__btnClosed--40">닫기</button>
</nav>`;

const scriptUI = (script) => `<section class="script position--bottom">
  <h3 class="a11yHidden">스크립트</h3>
  <div class="script__wrapBox">
    ${script.map((item) => `<p class="script__paragraph">${item}</p>`).join("")}
  </div>
  <button type="button" class="script__btnClosed--24">닫기</button>
</section>`;

const helpUI = () => `<section class="help position--center">
  <h3 class="a11yHidden">학습도우미</h3>
  <nav class="help__helpNav">
  </nav>
  <div class="help__contentsWrap ${helpInfo[currentHelpPage - 1].type}">
    <h4 class="a11yHidden">러닝맵</h4>
  </div>
  <button type="button" class="help__btnClosed--40">닫기</button>
</section>`;

const helpNavUI = () => `<ul class="helpNav__list flex--start">
  ${helpInfo
    .map(
      ({ id, title }) =>
        `<li class="helpNav__item ${
          id === currentPopSubPage ? "active" : ""
        }"><button type="button" class="helpNav__btnMovePage" data-helpmovetarget="${id}">${title}</button></li>`
    )
    .join("")}
</ul>`;

const learningMapUI = () => `<ol class="learningmap__list flex--between">
  ${lessonList
    .map(
      ({ id, title }) =>
        `<li class="learningmap__item ${
          id === currentChapter ? "current" : ""
        } flex--start"><span class="learningmap__title">${title}</span></li>`
    )
    .join("")}
</ol> `;

const pageviewUI = () => `<div class="pageview__imgWrap">
  <button type="button" class="pageview__btnTarget1">1</button>
  <span class="pageview__targetImg1 arrow--right"></span>
  <button type="button" class="pageview__btnTarget2">2</button>
  <span class="pageview__targetImg2 arrow--left"></span>
  <button type="button" class="pageview__btnTarget3">3</button>
  <span class="pageview__targetImg3 arrow--bottom"></span>
  <button type="button" class="pageview__btnTarget4">4</button>
  <span class="pageview__targetImg4 arrow--top"></span>
  <button type="button" class="pageview__btnTarget5">5</button>
  <span class="pageview__targetImg5 arrow--bottom"></span>
  <button type="button" class="pageview__btnTarget6">6</button>
  <span class="pageview__targetImg6 arrow--top"></span>
</div>`;

const keyControlUI = () => `<div class="keyControl__imgWrap">
  space bar key : 일시정지 / 재생 toggle<br>
  page up key : 이전 페이지<br>
  page down key : 다음 페이지<br>
  위쪽 방향 key : 음량 높이기<br>
  아래쪽 방향 key : 음량 줄이기<br>
  왼쪽 방향 key : 영상 10초 전으로 이동<br>
  오른쪽 방향 key : 영상 10초 후로 이동
</div>`;
