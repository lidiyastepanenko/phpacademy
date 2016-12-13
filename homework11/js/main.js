if (window.addEventListener) window.addEventListener("load", init, false);
else if (window.attachEvent) window.attachEvent("onload", init);

    function init() {
    form1.pass1.onchange = pass1OnChange;
    form1.pass2.onchange = pass2OnChange;
    form1.onsubmit = onsubmitHandler;
    }
    function validate(elem, pattern) {
        if (elem.value.search(pattern) == -1) elem.className = "invalid"; // установка CSS класса 
        else elem.className = "valid";
    }
    function pass1OnChange() {
        var pattern = /(?=^.{5,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        validate(this, pattern);
    }
    function pass2OnChange() {
        var pattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        validate(this, pattern);
    }
    function showError(container, errorMessage) {
      container.className = 'error';
      var msgElem = document.createElement('span');
      msgElem.className = "error-message";
      msgElem.innerHTML = errorMessage;
      container.appendChild(msgElem);
    }
    function resetError(container) {
      container.className = '';
      if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
      }
    }
    function onsubmitHandler() {
        resetError(form1.name.parentNode)
        if(!form1.name.value){
            showError(form1.name.parentNode, "Укажите от кого!")
        }
        resetError(form1.pass1.parentNode)
        if (!form1.pass1.value){
            showError(form1.pass1.parentNode, "Введите пароль")
        }
        else if (form1.pass1.value != form1.pass2.value){
            showError(form1.pass1.parentNode, "Пароли не совпадают")
        }
        resetError(form1.to.parentNode);
        if (!form1.to.value) {
            showError(form1.to.parentNode, "Укажите, куда");
        }
        resetError(form1.message.parentNode);
        if (!form1.message.value) {
            showError(form1.message.parentNode, "Отсутствует текст.");
        } 
    };

