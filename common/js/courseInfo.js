// 과정 정보
const courseTitle = "Frontend Developer KIM KYU REE";
const introSkipTime = 15;

// 기능 사용 설정
const useVideoContentsTitle = true; // 비디오 페이지 content Title 노출
const useScript = true;
const useQuizIntro = false;
const useLessonGroup = false; // 러닝맵 차시를 모듈로 그룹화

// 차시 정보 - lessonGroup : 차시 모듈화, lessonList : 차시
const lessonGroup = [
  {
    groupTitle: "모듈명1",
    groupSubTitle: "서브타이틀1",
    group: [1, 2, 3],
    page: 1,
  },
  {
    groupId: 2,
    groupTitle: "모듈명2",
    groupSubTitle: "서브타이틀2",
    group: [4, 5, 6, 7, 8, 9],
    page: 1,
  },
  {
    groupId: 3,
    groupTitle: "모듈명3",
    groupSubTitle: "서브타이틀3",
    group: [10, 11, 12, 13, 14],
    page: 1,
  },
  {
    groupId: 4,
    groupTitle: "모듈명1",
    groupSubTitle: "서브타이틀1",
    group: [15, 16, 17, 18],
    page: 2,
  },
  {
    groupId: 5,
    groupTitle: "모듈명2",
    groupSubTitle: "서브타이틀2",
    group: [19, 20, 21, 22, 23],
    page: 2,
  },
  {
    groupId: 6,
    groupTitle: "모듈명3",
    groupSubTitle: "서브타이틀3",
    group: [24, 25, 26, 27, 28, 29, 30],
    page: 2,
  },
];

const lessonList = [
  { id: 1, title: "차시명입니다." },
  { id: 2, title: "차시명입니다." },
  { id: 3, title: "차시명입니다." },
  { id: 4, title: "차시명입니다." },
  { id: 5, title: "차시명입니다." },
  { id: 6, title: "차시명입니다." },
  { id: 7, title: "차시명입니다." },
  { id: 8, title: "차시명입니다." },
  { id: 9, title: "차시명입니다." },
  { id: 10, title: "차시명입니다." },
  { id: 11, title: "차시명입니다." },
  { id: 12, title: "차시명입니다." },
  { id: 13, title: "차시명입니다." },
  { id: 14, title: "차시명입니다." },
  { id: 15, title: "차시명입니다." },
  { id: 16, title: "차시명입니다." },
  { id: 17, title: "차시명입니다." },
  { id: 18, title: "차시명입니다." },
  { id: 19, title: "차시명입니다." },
  { id: 20, title: "차시명입니다." },
  { id: 21, title: "차시명입니다." },
  { id: 22, title: "차시명입니다." },
  { id: 23, title: "차시명입니다." },
  { id: 24, title: "차시명입니다." },
  { id: 25, title: "차시명입니다." },
  { id: 26, title: "차시명입니다." },
  { id: 27, title: "차시명입니다." },
  { id: 28, title: "차시명입니다." },
  { id: 29, title: "차시명입니다." },
  { id: 30, title: "차시명입니다." },
  ,
];

// 페이지(인덱스) 설정 - pageGroup : 페이지를 그룹, pageInfo : 페이지 정보
const pageGroup = [
  { groupId: 1, groupTitle: "Front-end", group: [1] },
  { groupId: 2, groupTitle: "Developer", group: [2] },
  { groupId: 3, groupTitle: "KIM KYU REE", group: [3, 4] },
];
const pageInfo = [
  {
    id: 1,
    type: "videoPage",
    subType: "video-i",
    title: "주제 & 목표",
    subTitle: "",
  },
  {
    id: 2,
    type: "videoPage",
    subType: "video",
    title: "본 학습",
    subTitle: "",
  },
  {
    id: 3,
    type: "quizPage",
    subType: "quiz",
    title: "평가",
    subTitle: "이번시간에 배운 내용을 바탕으로 퀴즈를 풀어보세요.",
  },
  {
    id: 4,
    type: "videoPage",
    subType: "video-o",
    title: "정리 & 맺음",
    subTitle: "이번 시간에 학습한 주요 내용을 확인해 보세요.",
  },
];
// type 종류 : video (영상), page (영상이 아닐 경우)
// subType 종류 : video-i (인트로 영상), video (본문 영상), video-o (아웃트로 영상), quiz (퀴즈 페이지)
// subTitle은 컨텐츠 타이틀의 설명입니다.

// 퀴즈 정보 및 설정
const quizIntroText =
  "지금까지 학습한 내용을 퀴즈를 통해 확인해 보겠습니다.<br>총 2개의 문제가 주어지며 기회는 2번 입니다.";
const quizChanceInit = 2;
let quizChance = quizChanceInit;
let currentQuizNum = 1;
let myQuizResultArr = [];

// 학습도우미 설정
let currentHelpPage = 1;
let currentPopSubPage = 1;
const helpInfo = [
  { id: 1, type: "teacher", title: "강사 소개", totalPage: 3 },
  { id: 2, type: "learningMap", title: "러닝맵", totalPage: 2 },
  { id: 3, type: "pageView", title: "화면 안내", totalPage: 1 },
  { id: 4, type: "keyControll", title: "키보드 제어", totalPage: 1 },
];
