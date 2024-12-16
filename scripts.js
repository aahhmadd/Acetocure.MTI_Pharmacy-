document.getElementById('more-info-btn').addEventListener('click', function() {
    alert('Your purshacement has been added to your cart');
});

// Dynamic content updates for the drug name and details
document.getElementById('drug-name').innerText = 'Acetocure';
document.getElementById('drug-description').innerText = 'Acetocure is a revolutionary drug used primarily for treating respiratory conditions such as bronchitis and COPD. It also acts as an antidote to acetaminophen (paracetamol) overdose, preventing liver damage.';
document.getElementById('feature1').innerText = 'Mucolytic properties for respiratory treatment';
document.getElementById('feature2').innerText = 'Effective in acetaminophen overdose treatment';
document.getElementById('feature3').innerText = 'Improves lung health and clears mucus';
document.getElementById('benefit1').innerText = 'Helps clear mucus from the airways';
document.getElementById('benefit2').innerText = 'Protects against liver damage due to overdose';
document.getElementById('benefit3').innerText = 'Improves respiratory health';
document.getElementById('storage-condition').innerText = 'Acetocure should be stored at room temperature, away from direct light and moisture.';
