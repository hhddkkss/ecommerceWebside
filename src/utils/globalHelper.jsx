// 防抖動 連續觸發事件 等待一定的延遲時間後 執行最後一次觸發事件的事件處理函數
// 實例： 連續按下發api的按鈕
export function debounce(func, delay = 250) {
  let timer = null

  return function (...args) {
    let context = this

    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

//節流 連續觸發事件 每隔多久執行函數
//實例：滑鼠滾動事件、滑鼠移動事件
export function throttle(callback, delay = 1000) {
  let timer
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        callback(...args)
        timer = null
      }, delay)
    }
  }
}
