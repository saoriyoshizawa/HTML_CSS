function formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月は0から始まるので1を足す
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
}

const now = new Date();
console.log(formatDate(now)); 