/*
Given a string of letters a, b, n how many different ways can you make the word "banana" by crossing out various letters and then reading left-to-right?
(Use - to indicate a crossed-out letter)

Example-
Input:
bbananana

Output:
b-anana--
b-anan--a
b-ana--na
b-an--ana
b-a--nana
b---anana
-banana--
-banan--a
-bana--na
-ban--ana
-ba--nana
-b--anana
Notes
You must return all possible bananas, but the order does not matter

*/


//Answer

var bananas = function (s) {
    let ans = new Set();
    let xs = s.split('');
    let perm = (arr, i, hs) => {
        if (i == arr.length) {
            let m = arr.join('');
            let n = arr.filter(c => c != '-').join('');
            if (n == "banana") hs.add(m);
            return;
        }
        perm(arr, i + 1, hs);
        let a = arr[i];
        arr[i] = '-';
        perm(arr, i + 1, hs);
        arr[i] = a;
    }
    perm(xs, 0, ans);
    return [...ans];
}