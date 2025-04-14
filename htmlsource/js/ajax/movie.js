const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

const init = () => {
  // 어제 날짜 구하기
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate() - 1;
  // 년, 월, 일 => 요소 안에 보여주기
  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};

init();

document.querySelector("button").addEventListener("click", () => {
  // 사용자가 입력한 년, 월, 일 가져오기
  const targetDt = txtYear.value + selMon.value + selDay.value;

  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=51a76c7c17ef2f2bd6b9379e77ec690b&targetDt=${targetDt}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.boxOfficeResult.dailyBoxOfficeList);

      const boxList = data.boxOfficeResult.dailyBoxOfficeList;
      const movieList = document.querySelector("#rank");
      let list = ``;

      boxList.forEach((movie) => {
        // 순위, 영화명
        // rank, rankInten, movieNm
        // 1(▲ 1) 승부
        const rankInten = parseInt(movie.rankInten);
        list += `${movie.rank} 위 `;
        if (rankInten > 0) {
          list += `(▲ `;
        } else if (rankInten < 0) {
          list += `(▼ `;
        } else {
          list += `(- `;
        }
        list += `${movie.rankInten})`;
        list += ` <a href='#' onclick='javascript:movieInfo(${movie.movieCd})'>${movie.movieNm}</a>`;
        list += `<br>`;
      });
      console.log(list);
      movieList.innerHTML = list;
    });
});

// 영화 상세정보
const movieInfo = (movieCd) => {
  console.log(movieCd);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=51a76c7c17ef2f2bd6b9379e77ec690b&movieCd=${movieCd}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.movieInfoResult.movieInfo);
      const movieInfo = data.movieInfoResult.movieInfo;
      // 영화제목 : movieNm
      // 영어제목 : movieNmEn
      // 상영시간 : showTm
      // 감독 : directors[0].peopleNm
      // 배우 : actors.peopleNm => .actors.forEach 돌리기 : 다 뽑기

      let list = `<ul>`;
      list += `<li>제목 : ${movieInfo.movieNm}</li>`;
      list += `<li>영문명 : ${movieInfo.movieNmEn}</li>`;
      list += `<li>상영시간 : ${movieInfo.showTm}분</li>`;
      list += `<li>감독 : `;
      movieInfo.directors.forEach((director) => {
        list += `${director.peopleNm}, `;
      });
      list += `</li>`;
      list += `<li>배우 : `;
      movieInfo.actors.forEach((actor) => {
        list += `${actor.peopleNm}, `;
      });
      list += `</li>`;
      list += `</ul>`;
      document.querySelector("#info").innerHTML = list;
    });
};
