/*
When you look at movie ratings, you usually see it as decimal numbers representing average of all viewers' votes. While it is very informative, it's not very visually appealing. That's what stars, or in our case- moons, are created for.

Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale. Your final rating should be rounded to "0.5" (nearest half moon). Input is always valid.

Write a function which returns valid rating represented as moons ('o','c','x') in single string.
You are given the following values preloaded (remember, since I can't use unicode characters, moons in brackets are here just to improve your imagination):

More examples in test cases.
1.5: 'oxxxx',
3.9: 'ooxxx',
5: 'oocxx',
6: 'oooxx',
7.2: 'ooocx',
8.7: 'ooooc',
10: 'ooooo'

*/


//Answer

function moonRating(rating) {
    let r = Math.round(rating);
    if (r === 0) return 'xxxxx'
    if (r === 1) return 'cxxxx'
    if (r === 2) return 'oxxxx'
    if (r === 3) return 'ocxxx'
    if (r === 4) return 'ooxxx'
    if (r === 5) return 'oocxx'
    if (r === 6) return 'oooxx'
    if (r === 7) return 'ooocx'
    if (r === 8) return 'oooox'
    if (r === 9) return 'ooooc'
    if (r === 10) return 'ooooo'
}