
/** 生成 年-月-日-时-分-秒 */
export const getNowTime = () => {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let today = now.getDate()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    return `${year}-${month}-${today} ${hour}:${minute}:${second}`
}