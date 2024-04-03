//dom을 이용하기

//2.document(최상위 부모)
//3. querySelector(;찾기 대상)
//4. const 별명(임시 보관)
//5. 찾은 대상의 css 바꾸기 (별명.style.속성)
//.box 박스를 찾고 = (넣어주세요) a라는 공간에
const box = document.querySelector(".box");
box.style.backgroundColor = "skyblue";
box.style.fontSize = "30px";

//6.찾은 대상의 contents 바꾸기
box.innerText = "새해는 한강으로!"; // 글씨만 가능
box.innerHTML = '<div class="main">새해는 한강뷰로!<div>';
