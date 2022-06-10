// Question : 07 Palindrome Test:

var input = prompt(" Enter any string: "); // for taking input.

var reverse = "";  // this is for storing reverse part.

for(var i = input.length-1 ; i>=0 ; i--)  // reverse loop b/c we check the original string with its reverse part.
{
    reverse += input[i]; // here we are concatenate our empty string with the reverse of original string.
}

if(input == reverse)  // here we are checking whether the string is palindrome or not.
{
    console.log(" The given string is palindrome.")
}
else{
    console.log(" Not a palindrome.");
}


// Question : 08 
// Random Aphabet serially found krna hai.

var a = ['a', 'b', 'q', 'p', 'a', 'l', 'p', 'a', 'k', 'w', 'x', 'z']; // array

for( var i = 0 ; i<a.length ; i++) // loop on the whole array.
{
    if(a[i] == 'p' ) // nested if conditions.
    {
        if(a[i+1] == 'a')
        {
            if(a[i+2] == 'k')
            {
                alert(" p a k is found in the above array.")
            }
        }
    }
}

var a = ['a', 'b', 'q', 'p', 'a', 'l', 'p', 'a', 'k', 'w', 'x', 'z']; // array

for( var i = 0 ; i<a.length ; i++) // loop on the whole array.
{
    if( a[i] == 'p' && a[i+1] == 'a' && a[i+2] == 'k')
    {
        alert(" p  a  k   -->  found.")
    }
}

// Question : 09

/*
Write a program to create the following patterns in your
browser. Take number of lines as an input.
*/

// CODE : 09

// part a solution:

/*
1) *****
2) *****
3) *****
4) *****

*/

var rows = 4;
var cols = 5;

for(var i = 1 ; i<=rows ; i++ )
{
    for(var j = 1 ; j<=cols ; j++)
    {
        document.write("*");
    }
    document.write("<br>");
}

// part b solution:
/*
1) *****
2) ****
3) ***
4) **
5) *
*/
for(var i = 1 ; i<=5 ; i++)
{
    for(var j = 5 ; j>i-1 ; j--)
    {
        document.write("*");
    }
    document.write("<br>");
}

// part c solution:
/*
1) *
2) **
3) ***
4) ****
5) *****
*/
for(var i = 1 ; i<=5 ; i++)
{
    for(var j = 0 ; j<i ; j++)
    {
        document.write("*");
    }
    document.write("<br>");
}

// Question : 10

/*

You have given the following arrays:
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];
*/

var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];
console.log(" Students"  +  "  " +  "Scores");
for(var i = 0 ; i<students ; i++)
{
    for(var j = 0 ; j<=i ; j++)
    {
        console.log(students[i] +  "  " +  scores[j]);
    }
}




