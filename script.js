function volume_sphere() {
    //Write your code here
	var r = document.getElementById("radius").value;
	r = Math.abs(r);

	var volume = 4/3 * Math.PI * Math.pow(radius, 3);
	document.getElementById('volume').value = volume.toFixed(4);
            
	return false;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
