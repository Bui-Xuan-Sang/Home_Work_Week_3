let arrs = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15],
];

function checkBai1() {
    let sum = 0;
    for (let i = 0; i < arrs.length; i++) {
        for (let j = 0; j < arrs[i].length; j++) {
            sum += arrs[i][j];
        }
    }
    document.write('tổng các phần tử trong mảng = ' + ' ' + sum);
}

function checkBai2() {
    for (let i = 0; i < arrs.length; i++) {
        let sumRow = 0;
        for (let j = 0; j < arrs[i].length; j++) {
            sumRow += arrs[j][i];
        }
        document.write('tổng các phần tử trong hàng ' + ' ' + (i + 1) + ' ' + '=' + sumRow + '<br>');
        sumRow = 0;
    }
}

function checkBai3() {
    for (let i = 0; i < arrs[0].length; i++) {
        let sumCol = 0;
        for (let j = 0; j < arrs.length; j++) {
            sumCol += arrs[j][i];
        }
        document.write('tổng các phần tử trong cột ' + ' ' + (i + 1) + ' ' + '=' + sumCol + '<br>');
        sumCol = 0;
    }
}

function checkBai4() {
    for (let i = 0; i < arrs[0].length; i++) {
        let max = arrs[0][0];
        for (let j = 0; j < arrs.length; j++) {
            if (arrs[j][i] > max) {
                max = arrs[j][i];
            }
        }
        document.write('Giá trị lớn nhất của cột ' + ' ' + (i + 1) + ' ' + '=' + max + '<br>');
    }
}