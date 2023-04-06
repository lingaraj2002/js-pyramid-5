let a = prompt("Enter the number");
    for(i=1;i<=a;i++){
        for(j=1;j<=a-i;j++){
            document.write("&nbsp &nbsp")
        }
        for(r=1;r<=i;r++){
            document.write("*&nbsp");
        }
        document.write("<br>");
    }