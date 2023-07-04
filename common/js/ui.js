const headerUI = () => `<header class="header flex--between">
  <h1 class="header__logo">front-end Developer KIM KYU REE</h1>
  <h2 class="header__lesson">1. 자바스크립트의 배열</h2>
</header>`;

const mainUI = () => `<main class="main__quizPage position--center"></main>`;

const videoPageUI = () => `<video class="video" autoplay>
  <source src="/media/cc0-videos/flower.mp4" type="video/mp4">
</video>`;

const bookMarkUI = () => `<div class="video__bookMark">
  <h4 class="a11yHidden">영상 북마크 영역</h4>
  <button type="button" class="bookMark__btnOpen">북마크</button>
  <ol class="bookMark__list">
  </ol>
</div>`;

const bookMarkListUI = () => `<li class="bookMark__item">
  <button type="button" class="bookMark__btnMoveTime" data-timesynk="1">북마크 1</button>
</li>`;

const skipBtnUI = () =>
  `<button type="button" class="video__btnSkip">SKIP</button>`;

const quizPageUI = () =>
  `<audio class="audio" autoplay src="/media/cc0-audio/t-rex-roar.mp3"></audio>`;

const quizIntroUI = () => `<section class="quizPage__intro flex--center">
  <h4 class="intro__title">QUIZ</h4>
  <p class="intro__exp">지금까지 학습한 내용을 퀴즈를 통해 확인해 보겠습니다.<br>총 <em>2개</em>의 문제가 주어지며 기회는 <em>2번</em> 입니다.</p>
  <button type="button" class="intro__btnStart">START</button>
</section>`;

const quizPaperUI = () =>
  `<section class="quizPage__quiz flex--start"></section>`;

const quizQuestionUI = () => `<div class="quiz__question flex--start">
  <div class="question__number">1</div>
  <div class="question__titleWrap">
    <p class="question__oxExp">아래의 설명이 맞으면 O, 틀리면 X를 선택하세요.</p>
    <p class="question__text">앱 사용 <code> hello =></code>보았을 때, 앱을 효율적으로 관리하기 위한 정리 순서로 <em>아닌</em> 것은? 앱 사용 빈도순으로 보았을 때, 앱을 효율적으로 관리하기 위한 정리 순서로 <em>아닌</em> 것은?</p>
  </div>
</div>`;

const additionalUI = () => `<ul class="quiz__additional code flex--center">
  <li class="additional__item">ㄱ, ㄴ, ㄷ, ㄹ</li>
  <li class="additional__item">ㄱ, ㄴ, ㄷ, ㄹ</li>
  <li class="additional__item">ㄱ, ㄴ, ㄷ, ㄹ</li>
  <li class="additional__item">ㄱ, ㄴ, ㄷ, ㄹ</li>
  </ul>
  <code class="quiz__additional code flex--center">
  hello => 
</code>`;

const selectUI = () => `<ul class="quiz__select sa">
  <li class="select__item flex--start myAnswer"><button type="button" class="select__btnSelect flex--start" data-select="1">선택<code>hello =></code></button></li>
  <li class="select__item flex--start correctAnswer"><button type="button" class="select__btnSelect flex--start" data-select="2">선택</button></li>
  <li class="select__item flex--start"><button type="button" class="select__btnSelect flex--start" data-select="3">선택</button></li>
  <li class="select__item flex--start"><button type="button" class="select__btnSelect flex--start" data-select="4">선택</button></li>
  </ul>
  <ul class="quiz__select ox flex--center">
  <li class="select__item myAnswer"><button type="button" class="select__btnSelect O" data-select="O">맞다</button></li>
  <li class="select__item"><button type="button" class="select__btnSelect X" data-select="X">틀리다</button></li>
  </ul>
  <div class="quiz__select ju flex--center">
  <input type="text" class="select__input" placeholder="정답을 입력하세요.">
  <button type="button" class="select__btnAnswerCheck">정답확인</button>
</div>`;

const answerSheetUI = () => `<div class="quiz__answerSheet position--bottom">
  <div class="answerSheet__inner">
    <p class="answerSheet__correctAnswer X flex--start"><span></span></p>
    <p class="answerSheet__exp flex--start">동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 </p>
  </div>
  <button type="button" class="answerSheet__btnNextStep">다음문제</button>
</div>`;

const alertUI = () => `<div class="quiz__alert position--center flex--center">
  <p class="alert__textBox flex--center"><span>다시 한 번 풀어보세요.</span></p>
</div>`;

const quizResultUI = () => `<section class="quizPage__result flex--center">
  <h4 class="result__title">결과보기</h4>
  <ul class="result__list flex--center">
    <li class="result__item1 correct">맞혔습니다.</li>
    <li class="result__item2 wrong">틀렸습니다.</li>
    <li class="result__item3 correct">맞혔습니다.</li>
  </ul>
  <button type="button" class="result__btnRetry">다시풀기</button>
</section>`;

const controllerUI =
  () => `<section class="controller flex--between position--bottom">
  <h4 class="a11yHidden">컨트롤러</h4>
  <div class="controller__videoTime flex--center">
    <p class="videoTime__current">00:00</p>
    <div class="videoTime__progress small">
      <div class="progress__bar"></div>
    </div>
    <p class="videoTime__total">00:00</p>
  </div>
  <button type="button" class="controller__btnPlay"></button>
  <button type="button" class="controller__btnReplay"></button>
  <div class="controller__playRate">
    <button type="button" class="playRate__btnOpen">1.0</button>
    <ul class="playRate__list">
      <li class="playRate__item flex--center"><button type="button" class="playRate__btnChangeRate" data-targetrate="1.0">1.0</button></li>
      <li class="playRate__item flex--center"><button type="button" class="playRate__btnChangeRate" data-targetrate="1.2">1.2</button></li>
      <li class="playRate__item flex--center"><button type="button" class="playRate__btnChangeRate" data-targetrate="1.5">1.5</button></li>
      <li class="playRate__item flex--center"><button type="button" class="playRate__btnChangeRate" data-targetrate="1.7">1.7</button></li>
      <li class="playRate__item flex--center"><button type="button" class="playRate__btnChangeRate" data-targetrate="2.0">2.0</button></li>
    </ul>
  </div>
  <div class="controller__volume flex--center">
    <button type="button" class="controller__btnVolume"></button>
    <div class="volume__progress large">
      <div class="progress__bar"></div>
    </div>
  </div>
  <button type="button" class="controller__btnIndex"></button>
  <button type="button" class="controller__btnInfo"></button>
  <button type="button" class="controller__btnScript"></button>
  <button type="button" class="controller__btnFullscreen"></button>
  <button type="button" class="controller__btnLock"></button>
  <div class="controller__pageNation flex--center">
    <button type="button" class="controller__btnPrevPage"></button>
    <p class="pageNation__current">01</p>
    <p class="pageNation__total">04</p>
    <button type="button" class="controller__btnNextPage"></button>
  </div>
</section>`;

const navUI = () => `<nav class="nav position--right flex--center">
  <ul class="nav__list">
    <li class="nav__itemWrap active">
      <p class="nav__itemTitle">Front-end</p>
      <ul class="nav__subList">
        <li class="nav__subItem"><a href="" class="nav__subLink flex--start">주제 & 목표</a></li>
      </ul>
    </li>
    <li class="nav__itemWrap">
      <p class="nav__itemTitle">Developer</p>
      <ul class="nav__subList">
        <li class="nav__subItem"><a href="" class="nav__subLink flex--start">본 학습</a></li>
      </ul>
    </li>
    <li class="nav__itemWrap">
      <p class="nav__itemTitle">KIM KYU REE</p>
      <ul class="nav__subList">
        <li class="nav__subItem"><a href="" class="nav__subLink flex--start">평가</a></li>
        <li class="nav__subItem"><a href="" class="nav__subLink flex--start">학습 정리</a></li>
      </ul>
    </li>
  </ul>
  <button type="button" class="nav__btnClosed--40">닫기</button>
</nav>`;

const scriptUI = () => `<section class="script position--bottom">
  <h3 class="a11yHidden">스크립트</h3>
  <div class="script__wrapBox">
    <p class="script__paragraph">어떤 페이지로 이동하는 버튼인지 정확하게 알려주고 싶어요. 어떤 페이지로 이동하는 버튼인지 정확하게 알려주고 싶어요. 어떤 페이지로 이동하는 버튼인지 정확하게 알려주고 싶어요. 어떤 페이지로 이동하는 버튼인지 정확하게 알려주고 싶어요. </p>
    <p class="script__paragraph">어떤 페이지로 이동하는 버튼인지 정확하게 알려주고 싶어요. 어떤 페이지로 이동하는 버튼인지 정확하게 알려주고 싶어요. 어떤 페이지로 이동하는 버튼인지 정확하게 알려주고 싶어요. 어떤 페이지로 이동하는 버튼인지 정확하게 알려주고 싶어요. </p>
  </div>
  <button type="button" class="script__btnClosed--24">닫기</button>
</section>`;

const helpUI = () => `<section class="help position--center">
      <h3 class="a11yHidden">학습도우미</h3>
      <nav class="help__helpNav">
      </nav>
      <div class="help__contentsWrap pageview">
        <h4 class="a11yHidden">러닝맵</h4>
      </div>
      <button type="button" class="help__btnClosed--40">닫기</button>
    </section>`;

const helpNavUI = () => `<ul class="helpNav__list flex--start">
  <li class="helpNav__item active"><button type="button" class="helpNav__btnMovePage">러닝맵</button></li>
  <li class="helpNav__item"><button type="button" class="helpNav__btnMovePage">화면 안내</button></li>
  <li class="helpNav__item"><button type="button" class="helpNav__btnMovePage">키보드 제어</button></li>
</ul>`;

const learningMapUI = () => `<ol class="learningmap__list flex--between">
  <li class="learningmap__item current flex--start"><span class="learningmap__title">러닝맵 타이틀</span></li>
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

const keyboardUI = () => `<div class="keyboard__imgWrap"></div>`;
