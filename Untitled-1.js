<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<div id="nav" style="{}">

</div>
<script>
    function NavBarItem(text,url){
        const aHref=document.createElement("a")
        aHref.text=text
        aHref.href=url

        const liContainer=document.createElement("li")
        liContainer.appendChild(aHref)
        return liContainer
    }
    function NavigationBar() {
        const ulContainer=document.createElement("ul")
        ulContainer.appendChild(NavBarItem("介绍","introduction.html"))
        ulContainer.appendChild(NavBarItem("关于","about.html"))
        return ulContainer
    }
    
    document.getElementById("nav").appendChild(NavigationBar())
</script>
</html>
