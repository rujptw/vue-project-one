export default {
  changeCity(state, city) {
    state.city = city;
    try {
      localStorage.city = city;
    } catch (e) {
      alert("您启用了隐身模式或禁用了本地存储")
    }
  }
}
