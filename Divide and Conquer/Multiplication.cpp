#include <bits/stdc++.h>
#include <string>
#include <iostream>

using namespace std;

string Sum(string str1, string str2)                    // Function to do the sum of two numbers passed as string
{
    if (str1.length() > str2.length())                  // to copy the number with more size in string str2
        swap(str1, str2);

    string str = "";                                    // to store the sum

    int n1 = str1.length(), n2 = str2.length();

    reverse(str1.begin(), str1.end());
    reverse(str2.begin(), str2.end());

    int carry = 0;
    for (int i = 0; i < n1; i++)
    {

        int sum = ((str1[i] - '0') + (str2[i] - '0') + carry);
        str.push_back(sum % 10 + '0');
        carry = sum / 10;
    }
    for (int i = n1; i < n2; i++)
    {
        int sum = ((str2[i] - '0') + carry);
        str.push_back(sum % 10 + '0');
        carry = sum / 10;
    }

    if (carry)
        str.push_back(carry + '0');

    reverse(str.begin(), str.end());

    return str;
}

string km(string a, string b)                                // Function for divide and conquer
{
    int x = a.size();
    int y = b.size();
    string c = "";
    if(x>y)                                                  // to make both strings of equal length by adding '0' before the shorter string
    {
        for(int i=0;i<x-y;i++)
        {
            c+='0';
        }
        c+=b;
        b=c;
    }
    else
    {
        for(int i=0;i<y-x;i++)
        {
            c+='0';
        }
        c+=a;
        a=c;
    }
    int n = c.size();
    if (n == 1)                                             //if string length is one then simply multiply
    {
        int y;
        string t = "";
        y=(int(a[0] - '0')) * (int(b[0] - '0'));
        while(y!=0)
        {
            int z = y%10;
            t+=(char)(z+'0');
            y/=10;
        }
        reverse(t.begin(),t.end());
        return t;
    }
    else                                                     
    {
        int l = n / 2;
        int r = n-n/2;

        string a1 = a.substr(0, l), a2 = a.substr(l, n);            //dividing in subproblem
        string b1 = b.substr(0, l), b2 = b.substr(l, n);            //dividing in subproblem
        //cout<<a1<<" "<<a2<<" "<<b1<<" "<<b2<<endl;
        string p1 = km(a1, b1);
        string p2 = km(a1, b2);
        string p3 = km(a2, b1);
        string p4 = km(a2, b2);

        for(int i=0;i<2*r;i++)
        {
            p1+='0';
        }
        string s = Sum(p2,p3);
        for(int i=0;i<r;i++)
        {
            s+='0';
        }
        string g = Sum(p1, s);
        string p = Sum(g, p4);
        return p;
    }
}

int main()
{
    string a,b;                                 // taking numbers as string input
    cin>>a>>b;
    cout<<km(a,b);
}
