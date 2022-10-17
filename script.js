function main()
{
var flamescount=0;
var str3="";
function convert(str)
{
    var constr="";
    var k=0;
    str = str.toLowerCase();
    while(k<str.length)
    {
        if(str[k]!==' ')
        {
            constr = constr+str[k];
        }
        k++;
    }
    return constr;
}
function func(str1,str2)
{
    var i,j,flag=0;
    for(i=0;i<str1.length;i++)
    {
        for(j=0;j<str2.length;j++)
        {
            if(str1[i]===str2[j])
            {
                flag++;
            }
        }
        if(flag===0)
        {
            flamescount++;
        }
        flag=0;
    }
    return 0;
}
function checks(ch, str)
{
    var k=0,count=0;
    if(str3==="")
    {
        str3=str3+ch;
    }
    else
    {
        for(k=0;k<str3.length;k++)
        {
            if(ch===str3[k])
            {
                return 0;
            }            
        }
        str3 = str3+ch;
        for(var i=0;i<str.length;i++)
        {
            if(ch===str[i])
            {
                count++;
            }
        }
        return count;
    }
    return 0;
}
function flamesgame(x)
{
    var count=0,index=0;
    var arr=['F','L','A','M','E','S'];
    for(i=0;i<5;i++)
    {
        while(count<x)
        {
            if(arr[index]!=='0')
            {
                count++;
            }
            if(count===x)
            {
                break;
            }
            index++;
            if(index>5)
            {
                index=0;
            }
        }
        arr[index]='0';
        count=0;
    }
    for(i=0;i<6;i++)
    {
        if(arr[i]!=='0')
        {
            s=arr[i];
            break;
        }
    }
    return s;
}

    var i,j,count1=0,count2=0;
    var str1="",str2="";
    var s;
    str1=document.getElementById("firstName").value;
    str2=document.getElementById("secondName").value;
    str1=convert(str1);
    str2=convert(str2);
    func(str1,str2);
    func(str2,str1);
    for(i=0;i<str1.length;i++)
    {
        for(j=0;j<str2.length;j++)
        {
            if(str1[i]===str2[j])
            {
                count2++;
            }
        }
        if(count2>0)
        {
            count1=checks(str1[i],str1)
            if(count1>0)
            {
                if(count2>count1)
                {
                    flamescount=flamescount+count2-count1;
                }
                else{
                    flamescount=flamescount+count1-count2;
                }
            }
        }
        count2=0;count1=0;
    }
    if(flamescount>0)
    {
        s=flamesgame(flamescount);       
    }
    flamescount=0;
    document.getElementsByClassName("changename")[0].innerHTML="Relationship between "+str1.toUpperCase()+" and "+str2.toUpperCase()+" is";
    
    switch(s)
    {
        case 'F':
            document.getElementsByClassName("changeresult")[0].innerHTML="End with Friends";
            break;
        case 'L':
            document.getElementsByClassName("changeresult")[0].innerHTML="End with Lovers";
            break;
        case 'A':
            document.getElementsByClassName("changeresult")[0].innerHTML="End with Affections";
            break;
        case 'M':
            document.getElementsByClassName("changeresult")[0].innerHTML="End with Marriage";
            break;
        case 'E':
            document.getElementsByClassName("changeresult")[0].innerHTML="End with Enemies";
            break;
        case 's':
            document.getElementsByClassName("changeresult")[0].innerHTML="End with Sister/Brother";
            break;
        default:
            document.getElementsByClassName("flamesres")[0].innerHTML="Sorry !!!";
    }
}