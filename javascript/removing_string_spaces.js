/*
Simple, remove the spaces from the string, then return the resultant string. 
'8 j 8   mBliB8g  imjB8B8  jl  B' => '8j8mBliB8gimjB8B8jlB'
*/


//Answer

function noSpace(x){
    x.split('  ').filter(x => x).join('')
    x = x.split(' ').join('');
    return x;
}
