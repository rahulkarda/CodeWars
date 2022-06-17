/*
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071
nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071
If the digits can't be rearranged to form a bigger number, return -1 

*/


//Answer

function nextBigger(n) {
    let d = n.toString().split('');
    let p = -1;
    for (let i = d.length - 1; i > 0; i--) {
        if (+d[i] > +d[i - 1]) {
            p = i - 1;
            break;
        }
    }
    if (p == -1) return p;

    let right = d.splice(p);
    let pv = right.splice(0, 1)[0];

    let mm = null, mmi = null;
    for (let i = 0; i < right.length; i++) {
        if (right[i] > pv) {
            if (mm == null || right[i] < mm) {
                mm = right[i];
                mmi = i;
            }
        }
    }

    if (mmi == null) return -1;

    right.splice(mmi, 1);
    right.push(pv);
    right = right.sort();

    let ret = +d.concat([mm]).concat(right).join('');
    if (ret < n) return -1;

    return ret;
}
