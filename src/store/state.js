//使用try-catch防止用户禁用localStorage和使用隐身模式
let defaultCity = "杭州"; //默认city值
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {

}

export default {
  city: defaultCity
}
