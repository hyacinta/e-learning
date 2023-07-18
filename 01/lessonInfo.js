// 북마크 정보
const bookMarkInfo = [
  {
    id: 1,
    synkTime: "00:03",
    title: "HTML Tags (Element)",
  },
  { id: 2, synkTime: "00:06", title: "CSS 문법과 선언방식, 단위" },
];

// 퀴즈 정보
// id - quiz 번호
// type - OX퀴즈: "ox", 사지선다: "sa", 주관식: "ju"
// question - "텍스트로 입력할 것" <em></em> - 부정문을 강조할 경우 사용
// oxQuestion - ox 퀴즈일 경우 추가 지시문을 "텍스트로 입력할 것" or 사지선다형일 경우 ""
// question - 문제를 "텍스트로 입력할 것"
// additionalType - 문제에 보기가 필요한 경우 타입을 작성 (list, string, code), 필요 없을 경우 null;
// additional - 리스트형은 배열안에 "텍스트로 입력" or "텍스트 입력"
// distractor - 사지 선다형 선택 리스트를 배열 안에 "텍스트로 입력할 것" or 필요 없을 경우 빈 배열
// answer - 정답 입력, OX퀴즈: 배열안에 텍스트로 입력할 것! "O" or "X", 사지선다: "1" or "2" or "3" or "4", 주관식: ["텍스트 입력"]
// explanation - 정답에 대한 해설 "텍스트로 입력"
const quizInfo = [
  {
    id: 1,
    type: "sa",
    oxQuestion: "",
    question:
      "HTML5에서는 정보 구조를 명확히 할 수 있도록 '아웃라인 알고리즘'이라는 개념이 도입되어 기존에 암묵적으로 그리던 아웃라인을 명시적이고 의미론적으로 작성할 수 있게 되었다. 다음중 HTML5에서 새롭게 도입된 태그가 아닌 것을 고르시오.",
    additionalType: "null",
    additional: [],
    distractor: ["<section>", "<aside>", "<div>", "<article>"],
    answer: ["3"],
    explanation:
      "<div> 태그는 기존에 존재하고 있는 태그로서 아무런 의미를 가지고 있지 않는다.",
  },
  {
    id: 2,
    type: "sa",
    oxQuestion: "",
    question:
      "HTML5.2에서 정의형 목록(dl)의 자식요소로 올 수 있는 요소가 아닌 것을 고르시오.",
    additionalType: "null",
    additional: [],
    distractor: ["<div>", "<dt>", "<dd>", "<a>"],
    answer: ["4"],
    explanation:
      "<dt>, <dd>의 경우 기존에도 <dl>의 자식요소로 올 수 있었으며, <div>의 경우에는 HTML5.2에서 <dt>, <dd>를 감싸서 사용할 수 있도록 <dl>의 자식요소로 사용할 수 있게 되었다. 단, <div>를 <dt>, <dd>를 묶기 위하여 사용할 경우 모든 <dt>, <dd>를 감싸야 하며, 일부는 감싸고, 일부는 감싸지 않는 식으로 사용할 수는 없다.",
  },
  {
    id: 3,
    type: "sa",
    oxQuestion: "",
    question:
      "focus란 선택이 되거나 마우스 이벤트 등을 받은 상태를 의미하며, HTML의 태그들 중에는 특별한 속성을 부여하지 않아도 focus를 받을 수 있는 태그들이 존재한다. 이 중 focus를 기본 속성으로 갖는 태그를 모두 고르시오.",
    additionalType: "null",
    additional: [],
    distractor: ["<a>", "<button>", "<div>", "<input>", "<span>"],
    answer: ["1", "2", "4"],
    explanation:
      "사용자와 상호작용을 하기 위한 interactive content의 경우에 특별한 속성을 부여하지 않아도 focus를 받을 수 있다.",
  },
];

// 스크립트 정보
// 스크립트 입력시 배열로 페이지가 나누어지며, 배열 안에 "", 나누어지는 텍스트는 문단으로 나뉘어 입력됩니다.
const scriptText = [
  ["1페이지"],
  [
    "문단을 나눕니다.",
    "문단을 나눕니다.",
    "문단을 나눕니다.",
    "문단을 나눕니다.",
  ],
  ["3페이지"],
  ["4페이지"],
];
