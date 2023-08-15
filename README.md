# Raven AI 기업 과제

## 실행방법

1. 터미널에서 json 서버를 켭니다

```bash
$  json-server --watch db.json --port 3001
```

![](https://ifh.cc/g/Xp31Kv.png)

2. 다른 터미널을 추가로 열어서 리액트를 실행해줍니다.

```bash
$ npm run dev
```

3. 열린 localhost 주소로 접속합니다.

- http://localhost:5173
  ![](https://ifh.cc/g/VwsTg6.png)

## 사용방법

### 회원가입&로그인

1. 로그인이 되어 있지 않은 상태에서 로그인이 필요한 페이지에 접속할 시 로그인 페이지로 이동합니다.

- 로그인 여부는 로컬스토리지에 유저 Id를 저장해서 구분했습니다.
  ![](https://ifh.cc/g/bKprJf.png)

  - 개발자 도구(F12) → 애플리케이션 → 로컬스토리지 에서 확인 가능

- 로그인이 필요한 페이지 : 홈 페이지('/'), 질문 리스트 페이지('/questions'), 질문하기 페이지('/ask'), 질문 상세 페이지('/questions/1')
  ![](https://ifh.cc/g/BkkdGB.gif)

- 로그인이 된 상태에서 회원가입('/signup') 또는 로그인('/signin') 페이지에 접솔할 시 질문 리스트 페이지로 이동됩니다.
  ![](https://ifh.cc/g/Kmno18.gif)

2. 회원가입 시 형식에 맞지 않는 경우 안내 문구가 표시 됩니다.
   ![](https://ifh.cc/g/wKptSX.gif)

- 이메일 형식
- 비밀번호 형식 8 ~ 15자 이하 영문, 숫자, 특수문자 조합
- 비밀번호 확인은 비밀번호와 일치

3. 로그인 시 이메일 또는 비밀번호가 맞지 않으면 로그인 되지 않습니다.

- 테스트용 이메일 : test@test.com
- 테스트용 비밀번호 : Qqqq123456!
  ![](https://ifh.cc/g/y5AVxN.gif)

### 게시판 CRUD

1. 질문 하러가기를 통해 질문을 작성할 수 있습니다.

- latex 문법에 맞게 질문을 작성하면 화면에 표시되는 모습을 미리 볼 수 있습니다.

2. 등록한 질문 제목과 latex 공식이 타이틀로 보입니다.
3. 타이틀을 클릭하면 질문 상세페이지로 갈 수 있습니다.
4. 질문 상세 페이지에서 수정, 삭제가 가능합니다.
   ![](https://ifh.cc/g/FNgsOq.gif)

## 사용 라이브러리

- Typescript
- React
- Vite
- axios
- jason-server
- react-latex
- react-hook-form
- react-router-dom
- date-fns
