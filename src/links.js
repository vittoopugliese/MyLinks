function validation(){
    arroba = document.getElementById("arroba").value;
    textarea = document.getElementById("textareainput").value;
    link1name = document.getElementById("nl1").value;
    link2name = document.getElementById("nl2").value;
    link3name = document.getElementById("nl3").value;
    link1url = document.getElementById("url1").value;
    link2url = document.getElementById("url2").value;
    link3url = document.getElementById("url3").value;
    colorinput = document.getElementById("colorinput").value;
    
    document.getElementById("achedos").innerHTML = arroba;
    document.getElementById("textareaplace").innerHTML = textarea;
    
    document.getElementById("urldemoniaca1").innerHTML = link1name;
    document.getElementById("urldemoniaca2").innerHTML = link2name;
    document.getElementById("urldemoniaca3").innerHTML = link3name;
    document.getElementById("urldemoniaca1").href = link1url;
    document.getElementById("urldemoniaca2").href = link2url;
    document.getElementById("urldemoniaca3").href = link3url;
    
    document.getElementById('body').style.backgroundColor = colorinput;
    
    document.getElementById('urldemoniaca1').style.display ='flex'
    document.getElementById('urldemoniaca2').style.display ='flex'
    document.getElementById('urldemoniaca3').style.display ='flex'
    
    document.getElementById('imagen').style.display = 'flex';
    document.getElementById('form').style.display = 'none';
    document.getElementById('logout').style.display = 'none';
    
    document.getElementById('urldemoniaca1').style.backgroundColor = colorinput;
    document.getElementById('urldemoniaca2').style.backgroundColor = colorinput;
    document.getElementById('urldemoniaca3').style.backgroundColor = colorinput;
    
    document.getElementById('urldemoniaca1').style.border = "2px solid " + colorinput;
    document.getElementById('urldemoniaca2').style.border = "2px solid " + colorinput;
    document.getElementById('urldemoniaca3').style.border = "2px solid " + colorinput;
        
}
function imagePreview(event){
    imageurl = URL.createObjectURL(event.target.files[0]);
    image = document.getElementById('imagen');
    image.src = imageurl;
    document.getElementById("errorimg").innerHTML = "Imagen Subida Correctamente";
}