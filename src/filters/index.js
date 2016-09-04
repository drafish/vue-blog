export function smartDate (timestamp) {
  if (typeof (timestamp) === 'string') {
    timestamp = parseInt(timestamp)
  }
  if (isNaN(timestamp)) {
    return ''
  }
  var today = new Date()
  var now = today.getTime()
  var s = '刚刚'
  var t = now - timestamp
  if (t > 604800000) {
    // 1 week ago:
    var that = new Date(timestamp)
    var y = that.getFullYear()
    var m = that.getMonth() + 1
    var d = that.getDate()
    var hh = that.getHours()
    var mm = that.getMinutes()
    s = y === today.getFullYear() ? '' : y + '年'
    s = s + m + '月' + d + '日' + hh + ':' + (mm < 10 ? '0' : '') + mm
  } else if (t >= 86400000) {
    // 1-6 days ago:
    s = Math.floor(t / 86400000) + '天前'
  } else if (t >= 3600000) {
    // 1-23 hours ago:
    s = Math.floor(t / 3600000) + '小时前'
  } else if (t >= 60000) {
    s = Math.floor(t / 60000) + '分钟前'
  }
  return s
}
