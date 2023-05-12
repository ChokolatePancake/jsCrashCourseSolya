const months = [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня",
]

const number = [
    "перше",
    "друге",
    "третє",
    "четверте",
    "п'яте",
    "шосте",
    "сьоме",
    "восьме",
    "дев'яте",
    "десяте",
    "одинадцяте",
    "дванадцяте",
    "тринадцяте",
    "чотирнадцяте",
    "п'ятнадцяте",
    "шістнадцяте",
    "сімнадцяте",
    "вісімнадцяте",
    "дев'ятнадцяте",
    "двацяте",
    "двадцять перше",
    "двадцять друге",
    "двадцять третє",
    "двадцять четверте",
    "двадцять п'яте",
    "двадцять шосте",
    "двадцять сьоме",
    "двадцять восьме",
    "двадцять дев'яте",
    "тридцяте",
    "тридцять перше",
]

class ExtendedDate extends Date {
    toString() {
        return `${number[this.getDate() - 1]} ${months[this.getMonth()]} ${this.getFullYear()}`
    }

    isFuture() {
        const now = new Date()
        return this > now
    }

    isLeapYear() {
        const year = this.getFullYear()
        return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
    }

    nextDay() {
        const next = new Date(this)
        next.setDate(this.getDate() + 1)
        return next
    }
}

const date = prompt("Введіть дату у форматі 'рік-місяць-день'")
const extendedDate = new ExtendedDate(date)

console.log(`Ваша дата: ${extendedDate}`)
console.log(`Ця дата є майбутньою: ${extendedDate.isFuture()}`)
console.log(`Цей рік є високосним: ${extendedDate.isLeapYear()}`)
console.log(`Наступний день: ${new ExtendedDate(extendedDate.nextDay())}`)
