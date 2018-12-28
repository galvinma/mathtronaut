export function reloadRocketLanding() {
  var landing = document.getElementById('landing_background').style.backgroundImage;
  var landing_url = landing.slice(4, -1).replace(/"/g, "");
  var rand_landing = landing_url+"?"+ Math.random();
  document.getElementById('landing_background').style.backgroundImage = `url(${rand_landing})`;
}

export function reloadRocketLaunching() {
  var launching = document.getElementById('launching_background').style.backgroundImage;
  var launching_url = launching.slice(4, -1).replace(/"/g, "");
  var rand_launching = launching_url+"?"+ Math.random();
  document.getElementById('launching_background').style.backgroundImage = `url(${rand_launching})`;
}

export function displayRocketLaunch() {
  var launch = document.getElementById('launching_background');
  var landing = document.getElementById('landing_background');

  launch.style.display = 'block';
  setTimeout(function(){
    landing.style.display = 'none';
  }, 10);
}

export function displayRocketLanding() {
  var launch = document.getElementById('launching_background');
  var landing = document.getElementById('landing_background');

  landing.style.display = 'block';
  setTimeout(function(){
    launch.style.display = 'none';
  }, 10);
}
