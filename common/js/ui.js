const headerUI = ({ id, title }) => `<header class="header vrtCenter">
<h1 class="header__course">${course}</h1>
<h2 class="header__lessonTitle vrtCenter">
  <span class="lessonTitle__number">${id}</span>
  <span class="a11yHidden">차시</span>
  <span class="lessonTitle__text">${title}</span>
</h2>
</header>`;

const contentsUI = () => `<main class="contents pos--center"></main>`;

const contentsTitleUI = ({
  title,
  exp,
}) => `<div class="contents__title vrtCenter ${
  useContentsTitle ? "" : "a11yHidden"
}">
<h3 class="title__label">${title}</h3>
${exp.length ? `<p class="title__exp">${exp}</p>` : ""}
</div>`;

const videoPageUI = () => `<section class="videoPage">
<video class="video" autoplay>
    <source src="//mp4.teacherville.co.kr/teacherville/1000879/01_02.mp4" type="video/mp4">
  </video>
</section>`;

const bookMarkUI = () => `<div class="videoPage__bookMark">
<button type="button" class="bookMark__btnListOpen vrtCenter">
  북 마 크 <span class="a11yHidden">리스트 열기</span>
</button>
<ol class="bookMark__list">
</ol>
</div>`;
const bookMarkListUI = (video) =>
  bookMarkInfo
    .map(
      ({ id, synkTime, title }) =>
        `<li class="bookMark__item"><button type="button" class="bookMark__btnMoveTime ${
          id === bookMarkInfo.length &&
          video.currentTime >= convertToSec(synkTime)
            ? "active"
            : video.currentTime >= convertToSec(synkTime) &&
              video.currentTime <= convertToSec(bookMarkInfo[id].synkTime)
            ? "active"
            : ""
        }" data-synk="${id}">${id}. ${title}</button></li>`
    )
    .join("");

const skipUI = () =>
  `<button type="button" class="videoPage__btnSkip" title="오프닝 영상">SKIP</button>`;

const outroUI = () => `<div class="videoPage__outro vrtCenter">
${
  useOutroDown
    ? `<a href="../common/down/01.zip" class="videoPage__btnDown vrtCenter" download title="1차시 학습자료">DOWN</a>`
    : ""
}
${
  useOutroPrint
    ? `<button type="button" class="videoPage__btnPrint vrtCenter" title="1차시 학습자료">PRINT</button>`
    : ""
}
</div>`;

const quizWrapUI = () => `<div class="quizWrap"></div>`;

const quizPaperUI = (info) => {
  const { id, type, additional } = info;
  return `<section class="quizPaper quiz${id}">
  <audio src="../common/sound/quiz.mp3" class="audio" autoplay></audio>
  <h4 class="a11yHidden">${id}번 문제</h4>
  ${questionUI(info)}
  ${additional.length ? additionalUI(additional) : ""}
  ${type === "sa" ? saUI(info) : type === "ox" ? oxUI(info) : juUI(info)}
  </section>`;
};
const questionUI = ({
  oxExp,
  question,
}) => `<div class="quizPaper__question vrtCenter">
${oxExp.length ? `<p class="question__oxExp">${oxExp}</p>` : ``}
<p class="question__text">${question}</p>
<div class="question__resultMark"></div>
</div>`;
const additionalUI = (
  additional
) => `<ul class="quizPaper__additional vrtCenter">
${additional
  .map((item) => `<li class="additional__item">${item}</li>`)
  .join("")}
</ul>`;
const saUI = ({
  type,
  distractor,
}) => `<ol class="quizPaper__distractor ${type}">
${distractor
  .map(
    (item, idx) => `<li class="distractor__item">
<button class="distractor__btnSelect vrtCenter" data-select="${idx + 1}">
  <span class="btnSelect__chip"></span>
  <span class="distractor__number">${idx + 1}</span>
  <span class="a11yHidden">번</span> ${item}
</button>
</li>`
  )
  .join("")}
</ol>`;
const oxUI = ({ type }) => `<ul class="quizPaper__distractor vrtCenter ${type}">
<li class="distractor__item">
  <button class="distractor__btnSelect O" data-select="O">
    <span class="btnSelect__chip"></span>
    <span class="a11yHidden">맞습니다.</span>
  </button>
</li>
<li class="distractor__item">
  <button class="distractor__btnSelect X" data-select="X">
    <span class="btnSelect__chip"></span>
    <span class="a11yHidden">틀립니다.</span>
  </button>
</li>
</ul>`;
const juUI = ({ type }) => `<div class="quizPaper__distractor ${type}">
<input type="text" class="distractor__input" placeholder="정답을 입력하세요.">
<button class="distractor__btnConfirm">정답 확인</button>
</div>`;
const alertUI =
  () => `<div class="quizPaper__alertMessage pos--center vrtCenter">
<p class="alertMessage__textBox vrtCenter">다시 한 번 풀어보세요.</p>
</div>`;
const answerSheetUI = ({
  answer,
  explanation,
}) => `<section class="quizPaper__answerSheet pos--bottom">
<div class="answerSheet__correct vrtCenter">
  <p class="answerSheet__label">정답</p>
  <p class="correct__text">${answer}</p>
</div>
<div class="answerSheet__exp">
  <p class="answerSheet__label">해설</p>
  <p class="exp__text">${explanation}</p>
</div>
<button type="button" class="answerSheet__btnNextStep">${
  currentQuizNumber >= quizInfo.length
    ? "결과보기"
    : `다음 문제<span class="a11yHidden">풀기</span>`
}</button>
</section>`;

const quizResultUI = () => `<section class="quizResult vrtCenter">
<h4 class="a11yHidden">퀴즈 결과 보기</h4>
<ol class="quizResult__list vrtCenter">
${myQuizResultArr
  .map(
    (item, idx) => `<li class="quizResult__item ${item}">
<p class="quizResult__quizNumber">${idx + 1}번 문제</p>
<p class="quizResult__resultBox">${
      item === "O" ? "맞았습니다." : "틀렸습니다."
    }</p>
</li>`
  )
  .join("")}
</ol>
<button type="button" class="quizResult__btnRetry">다시 풀기</button>
</section>`;

const controllerUI = (type) => {
  const page = type === "page" ? true : false;
  return `<section class="controller vrtCenter pos--bottom">
  <h3 class="a11yHidden">영상 controller 영역</h3>
  <button type="button" class="controller__btnIndex">INDEX<span class="a11yHidden">창 열기</span></button>
  <nav class="controller__index pos--conBottom">
    <h4 class="a11yHidden">index</h4>
    <ul class="index__list vrtCenter">
    ${pageGroup
      .map(
        ({ groupTitle, group }) => `<li class="index__item ${
          group.includes(currentPage + 1) ? "active" : ""
        }">
    <p class="index__title" aria-hidden="true">${groupTitle}</p>
    ${group
      .map(
        (item) =>
          `<button type="button" class="index__btnMovePage ${
            item === currentPage ? "active" : ""
          }" data-target="${item}" ${item === currentPage ? "disabled" : ""}>${
            pageInfo[item - 1].title
          }<span class="a11yHidden">로 이동하기</span></button>`
      )
      .join("")}
  </li>`
      )
      .join("")}
    </ul>
    <button type="button" class="index__btnClosed" title="index">닫기</button>
  </nav>
  <button type="button" class="controller__btnHelp"><span class="controller__bubble">학습도우미</span><span class="a11yHidden">창 열기</span></button>
  <div class="controller__videoTime vrtCenter">
    <p class="videoTime__total vrtCenter ${page ? "disabled" : ""}">
      <span class="a11yHidden">영상 전체 시간</span>
      <span class="videoTime__min">14</span><span class="a11yHidden">분</span>
      <span class="videoTime__sec">54</span><span class="a11yHidden">초</span>
    </p>
    <p class="videoTime__current vrtCenter ${page ? "disabled" : ""}">
      <span class="a11yHidden">현재 재생 시간</span>
      <span class="videoTime__min">14</span><span class="a11yHidden">분</span>
      <span class="videoTime__sec">54</span><span class="a11yHidden">초</span>
    </p>
    <div class="videoTime__progress progress ${page ? "disabled" : ""}">
      <div class="progress__bar"></div>
    </div>
  </div>
  <button type="button" class="controller__btnPlay" ${
    page ? "disabled" : ""
  }><span class="controller__bubble">재생하기</span></button>
  <button type="button" class="controller__btnReplay" ${
    page ? "disabled" : ""
  }><span class="controller__bubble">다시보기</span></button>
  <div class="controller__volume vrtCenter">
    <button type="button" class="controller__btnVolume" ${
      page ? "disabled" : ""
    }><span class="controller__bubble">소리끄기</span></button>
    <div class="volume__progress progress ${page ? "disabled" : ""}">
      <div class="progress__bar"></div>
    </div>
  </div>
  <div class="controller__playRate">
    <button type="button" class="controller__btnRateOpen" ${
      page ? "disabled" : ""
    }><span class="currentRate" aria-hidden="true">${initRate}</span><span class="controller__bubble">재생 속도</span><span class="a11yHidden">선택창 열기</span></button>
    <ul class="playRate__list controller__bubble">
    </ul>
  </div>
  ${
    useScript
      ? `<button type="button" class="controller__btnScript" ${
          page ? "disabled" : ""
        }><span class="controller__bubble">스크립트</span><span class="a11yHidden">창 열기</span></button>`
      : ""
  }
  <button type="button" class="controller__btnFullscreen" ${
    page ? "disabled" : ""
  }><span class="controller__bubble">전체화면</span><span class="a11yHidden">으로 보기</span></button>
  <div class="controller__movePage vrtCenter">
    <p class="movePage__total"><span class="a11yHidden">전체</span><span class="movePage__page">${iToStr(
      totalPage
    )}</span><span class="a11yHidden">페이지</span></p>
    <p class="movePage__current"><span class="a11yHidden">현재</span><span class="movePage__page">${iToStr(
      currentPage
    )}</span><span class="a11yHidden">페이지</span></p>
    <button type="button" class="controller__btnMovePrev"><span class="controller__bubble">이전 페이지로 이동하기</span></button>
    <button type="button" class="controller__btnMoveNext"><span class="controller__bubble">다음 페이지로 이동하기</span></button>
  </div>
  </section>`;
};
const rateListUI = (currentRate) => {
  const arr = rateList.filter((item) => item !== currentRate);
  return arr
    .map(
      (item) => `<li class="playRate__item">
<button type="button" class="plalyRate__btnChangeRate" data-rate="${item}">${item}<span class="a11yHidden">배로 보기</span></button>
</li>`
    )
    .join("");
};
const helpUI = () => `<section class="help pos--center open">
<h3 class="a11yHidden">학습도우미</h3>
<nav class="help__nav"></nav>
<button type="button" class="help__btnClosed" title="학습도우미">닫기</button>
</section>`;
const helpNavUI = () => `<ul class="nav__list">
<li class="nav__item">
  <button type="button" id="nav1" class="nav__btnChangeContents active" data-help="keyControls" tabindex="0" role="tab" aria-selected="true" aria-controls="helpContent1" disabled>키보드 제어</button>
</li>
<li class="nav__item">
  <button type="button" id="nav2" class="nav__btnChangeContents" data-help="pageView" tabindex="0" role="tab" aria-selected="false" aria-controls="helpContent2">화면 안내</button>
</li>
</ul>`;
const keyControlsUI = () => `<div class="help__contents vrtCenter">
  <section id="helpContent1" class="contents__innerBox keyControls" role="tabpanel" aria-labelledby="nav1">
    <kbd>SPACE BAR</kbd><p>영상 일시정지 / 재생하기</p>
    <kbd>PAGE UP</kbd><p>이전 페이지 이동하기</p>
    <kbd>PAGE DOWN</kbd><p>다음 페이지 이동하기</p>
    <kbd>왼쪽 화살표</kbd><p>영상 10초 앞으로 이동하기</p>
    <kbd>오른쪽 화살표</kbd><p>영상 10초 뒤로 이동하기</p>
    <kbd>위 화살표</kbd><p>음량 키우기</p>
    <kbd>아래 화살표</kbd><p>음량 줄이기</p>
  </section>
</div>`;
const pageViewUI = () => `<div class="help__contents vrtCenter">
  <section id="helpContent2" class="contents__innerBox pageView" role="tabpanel" aria-labelledby="nav2">
    <button type="button" class="pageView__btnNumber1">1</button>
    <div class="pageView__imgBox1">
      <div class="pageView__bubble">차시명 입니다.</div>
    </div>
    <button type="button" class="pageView__btnNumber2">2</button>
    <div class="pageView__imgBox2">
      <div class="pageView__bubble">과정명 입니다.</div>
    </div>
    <button type="button" class="pageView__btnNumber3">3</button>
    <div class="pageView__imgBox3">
      <div class="pageView__bubble">북마크 버튼은 해당 소주제로 이동이 가능합니다.</div>
    </div>
    <button type="button" class="pageView__btnNumber4">4</button>
    <div class="pageView__imgBox4">
      <div class="pageView__bubble">SKIP 버튼은 오프닝 영상을 건너 뛸 수 있습니다.</div>
    </div>
    <button type="button" class="pageView__btnNumber5">5</button>
    <div class="pageView__imgBox5">
      <div class="pageView__bubble">INDEX 버튼은 학습 구조를 확인하고, 해당 페이지로 이동할 수 있습니다.</div>
    </div>
    <button type="button" class="pageView__btnNumber6">6</button>
    <div class="pageView__imgBox6">
      <div class="pageView__bubble">학습도우미 버튼은 키보드 제어 방법 및 학습 화면의 구성에 대해 확인할 수 있습니다.</div>
    </div>
    <button type="button" class="pageView__btnNumber7">7</button>
    <div class="pageView__imgBox7">
      <div class="pageView__bubble">재생/일시정지, 다시보기, 음량 조절, 배속 조절이 가능한 버튼으로 학습 영상을 제어할 수 있습니다.</div>
    </div>
    <button type="button" class="pageView__btnNumber8">8</button>
    <div class="pageView__imgBox8">
      <div class="pageView__bubble">전체화면 버튼은 영상을 전체 화면으로 볼 수 있습니다.</div>
    </div>
    <button type="button" class="pageView__btnNumber9">9</button>
    <div class="pageView__imgBox9">
      <div class="pageView__bubble">전체 페이지와 현재 페이지를 표시하고, 이전 페이지 혹은 다음 페이지로 이동할 수 있습니다.</div>
    </div>
  </section>
</div>`;
