"use strict";
exports.__esModule = true;
var SplitData = function (list, len) {
    var result = [];
    var total = Math.ceil(list.length / 3);
    list = list.reverse();
    for (var i = 0; i < total; i++) {
        result.push(list.splice(0, len));
    }
    for (var i = 0; i < result.length; i++) {
        result[i] = result[i].reverse();
    }
    return result.reverse();
};
function RupiahWords(num) {
    if (num === 0) {
        return 'nol';
    }
    else if (num === 10) {
        return 'sepuluh';
    }
    else if (num === 100) {
        return 'seratus';
    }
    else if (num === 1000) {
        return 'seribu';
    }
    else if (num === 10000) {
        return 'sepuluh ribu';
    }
    else if (num === 100000) {
        return 'seratus ribu';
    }
    else if (num === 1000000) {
        return 'satu juta';
    }
    else if (num === 10000000) {
        return 'sepuluh juta';
    }
    else if (num === 100000000) {
        return 'seratus juta';
    }
    else if (num === 1000000000) {
        return 'satu milyar';
    }
    else if (num === 10000000000) {
        return 'sepuluh milyar';
    }
    else if (num === 100000000000) {
        return 'seratus milyar';
    }
    else if (num === 1000000000000) {
        return 'satu triliun';
    }
    else if (num === 10000000000000) {
        return 'sepuluh triliun';
    }
    else if (num === 100000000000000) {
        return 'seratus triliun';
    }
    else if (num >= 1000000000000000) {
        return 'batas maksimum';
    }
    else {
        var number = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
        var quantity = ['', 'puluh', 'ratus', 'ribu', 'juta', 'miliar', 'triliun'];
        var subQuantity = ['', 'ribu', 'juta', 'miliar', 'triliun'];
        var numberString = num.toString();
        var tm = SplitData(numberString.split(''), 3);
        for (var i = 0; i < tm.length; i++) {
            var iLen = tm[i].length;
            for (var j = 0; j < tm[i].length; j++) {
                tm[i][j] = (number[parseInt(tm[i][j]) - 1] + ' ' + quantity[iLen - 1 - j]).trim();
                if (j > 0 && tm[i][j - 1] === 'satu puluh') {
                    if (tm[i][j] === 'satu') {
                        tm[i][j] = 'sebelas';
                        tm[i][j - 1] = '';
                    }
                    else {
                        tm[i][j - 1] = tm[i][j];
                        tm[i][j] = 'belas';
                    }
                }
                if (tm[i][j].split(' ')[0] === 'undefined') {
                    tm[i][j] = '';
                }
                if (tm[i][j].split(' ')[0] === 'satu' &&
                    (tm[i][j].split(' ')[1] === 'ribu' || tm[i][j].split(' ')[1] === 'ratus')) {
                    tm[i][j] = 'se' + tm[i][j].split(' ')[1];
                }
            }
            if (tm.length > 1) {
                tm[i].push(subQuantity[tm.length - 1 - i]);
            }
        }
        return tm
            .map(function (arr) { return arr.join(' '); })
            .join(' ')
            .replace(/,/g, ' ')
            .replace(/  +/g, ' ')
            .trim();
    }
}
exports["default"] = RupiahWords;
//# sourceMappingURL=index.js.map