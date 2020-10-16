const interval = setInterval(function() {
	if (window.innerWidth < 927) {
document.getElementById("1").className = "center"; 
document.getElementById("2").className = "center"; 
document.getElementById("3").className = "center"; 
document.getElementById("4").className = "center"; 
document.getElementById("5").className = "center"; 
    document.querySelector('meta[name="viewport"]').content = "initial-scale=1";
    document.querySelector('meta[name="viewport"]').content = "width=120";
}}, 100);

