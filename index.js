////  /*  주석을 제거하여 결과 확인  */

// //CREAT
// const tweetDiv = document.createElement("div"); // 변수 tweetDiv에 ,<div> 요소 할당
// document.body.append(tweetDiv); // 변수 tweetDiv에 담긴 <div> 요소를 <body>요소에 apeend 함
// // ---------------------------------------
// //READ
// ///querySelector
// const oneTweet = document.querySelector(".tweet"); //querySelector로 클래스 이름이 tweet인 HTML요소를 조회

// ///querySelectorAll
// const tweets = document.querySelectorAll(".tweet"); //querySelectorAll로 클래스 이름이 tweet인 모든 HTML 요소를 유사배열로 받아옴
// //querySelectorAll로 조회한 HTML요소들은 배열처럼 for문을 사용할 수 있다.
// // 단 앞서 조회한 HTML요소들은 배열이 아니다. 이는 Array-like Object라 부른다.

// //get 조회메서드
// const getOneTweet = document.getElementById("container");
// const queryOneTweet = document.querySelector("#container");
// // console.log(getOneTweet === queryOneTweet) -> true
// // getElementById와 querySelector 로 각각 받아온 container 요소는 하나의 요소이다.

// //container
// const container = document.querySelector("#container");
// const tweetDiv = document.createElement("div");
// container.append(tweetDiv); //tweetDiv를 container의 마지막 자식요소로 추가함.
// // 새로 추가된 tweetDiv는 따로 class가 지정되어있지 않아 css를 이용한 스타일링이 적용이되지 않는다
// //-------------------------------------------

// //Update
// const oneDiv = document.createElement("div"); // <div> 생성

// //textContent
// oneDiv.textContent = "dev"; // <div>dev</div>
// //textContent = 문자열을 입력한다.

// oneDiv.classList.add("tweet"); // <div class = 'tweet'>dev</div>
// //classList.add() = ()안에 이름을 가진 클래스를 추가한다.

// const container = document.querySelector("#container");
// container.append(oneDiv);

// //class와 id말고 다른 attribute(속성)를 추가하는 방법 = setAttribute
// //-----------------------------------------------

// // DELETE
// oneDiv.remove(); //oneDiv를 container에서 삭재한다.

// //innerHTML
// document.querySelector("#container").innerHTML = ""; // id가 container인 요소 아래의 모든 요소를 지운다.

// //removeChild
// const container = document.querySelector("#container");
// while (container.firstChild) {
//   container.removeChild(container.firstChild);
// } // container의 첫번째 자식요소가 존재하면 첫번째 자식요소를 제거한다.
// // h2까지 삭제됨.

// // 위 상황을 방지하기 위해
// const container = document.querySelector("#container");
// while (container.children.length > 1) {
//   container.removeChild(container.lastChild);
// } // container의 자식 요소가 1개만 남을 때까지, 마지막 자식 요소를 제거.
