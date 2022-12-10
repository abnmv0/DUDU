// const userNameElement = document.querySelector('.user-name');
const headerNameElement = document.querySelector('.user');
const userNameBtn = document.querySelector('#changename');
const localUserName = localStorage.getItem('userName');
const userNumberBtn = document.querySelector('#changeNumber');
const userEmailBtn = document.querySelector('#changeEmail');
const localUserEmail = localStorage.getItem('userEmail');
const localUserNumber = localStorage.getItem('userNumber');

// 정규식
const regNum = /[0-9]/g;
const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const setUsernameInnerHtml = (name) => {
  headerNameElement.innerHTML = `${name} <span>님</span>`;
  userNameBtn.textContent = name;
};

if (localUserName) {
  setUsernameInnerHtml(localUserName);
}

userNameBtn.onclick = () => {
  const userName = prompt('이름을 입력하세요');
  localStorage.setItem('userName', userName);
  setUsernameInnerHtml(userName);
};


if (localUserNumber) {
  userNumberBtn.textContent = localUserNumber;
}

userNumberBtn.onclick = () => {
  const userNumber = prompt('학번을 입력하세요');
  if (regNum.exec(userNumber) === null) {
    alert('숫자만 입력해주세요');
    return false;
  }
  if (userNumber.length !==9) {
    alert('자릿수를 확인해 주세요');
    return false;
  }

  localStorage.setItem('userNumber', userNumber);
  userNumberBtn.textContent = userNumber;
};


if (localUserEmail) {
  userEmailBtn.textContent = localUserEmail;
}

userEmailBtn.onclick = () => {
  const userEmail = prompt('Email을 입력하세요');
  if (regEmail.exec(userEmail)===null) {
    alert('형식이 잘못 되었습니다');
    return false;
  }


  localStorage.setItem('userEmail', userEmail);
  userEmailBtn.textContent = userEmail;
};

// 유효성 검사

