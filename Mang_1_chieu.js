let arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkB1() {
    let numbers = parseInt(prompt("Nhập số: "));
    let index = -1;
    for (let i = 0; i < arrs.length; i++) {
        if (numbers === arrs[i]) {
            index = i;
            break;
        }
    }
    if (index === -1) {
        document.write('không có phần tử này trong mảng');
    } else {
        document.write(numbers + ' ' + 'nằm ở vị trí' + ' ' + index);
    }
}

function checkB2() {
    let sub = 1;
    for (let i = 0; i < arrs.length; i++) {
        sub *= arrs[i];
    }
    document.write('tích các phần tử = ' + ' ' + sub);
}

function checkB3() {
    let numbers = parseInt(prompt("Nhập số: "));
    let count = 0;
    let kq = false;
    for (let i = 0; i < arrs.length; i++) {
        if (numbers === arrs[i]) {
            kq = true;
            count++;
        }
    }
    if (kq === true) {
        document.write(numbers + ' ' + 'xuất hiện' + ' ' + count + 'lần trong mảng');
    } else {
        document.write('không có số này trong mảng');
    }
}

