document.addEventListener('DOMContentLoaded', function () {
  const toggleCheckbox1 = document.getElementById('toggleCheckbox1');
  const toggleCheckbox2 = document.getElementById('toggleCheckbox2');

  toggleCheckbox1.addEventListener('change', function () {
    browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      browser.tabs.sendMessage(tabs[0].id, {
        action: 'toggleOverlay1',
        show: toggleCheckbox1.checked
      });
    });
  });

  toggleCheckbox2.addEventListener('change', function () {
    browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      browser.tabs.sendMessage(tabs[0].id, {
        action: 'toggleOverlay2',
        show: toggleCheckbox2.checked
      });
    });
  });
});

