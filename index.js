function hasMoneySign(str) {
    return /[$€¥₽₸£]/igm.test(str)
}

module.exports = hasMoneySign
