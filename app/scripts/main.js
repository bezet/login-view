(function() {
  const $loginForm = $('#login_form');
  const $loginFormInfo = $loginForm.find('.form__info');
  const $loginFormInputs = $loginForm.find('.form__input-wrapper');

  const ajaxHandler = () => {

  };

  const switchValidationInfoTo = (infoContainer, txt) => {
    infoContainer.fadeOut(300, () => {
      infoContainer.text(txt);
      infoContainer.fadeIn(300);
    });
  };

  const isFormValid = () => {
    const loginValue = $(event.target).find('input[type=text]').val();
    const passwordValue = $(event.target).find('input[type=password]').val();

    if (loginValue.length) {
      switchValidationInfoTo($loginFormInfo, 'Miłego dnia!');      
    } else {
      switchValidationInfoTo($loginFormInfo, 'Musisz uzupełnić pola');      
    }

    if (passwordValue.length) {
      switchValidationInfoTo($loginFormInfo, 'Miłego dnia!');
    } else {
      switchValidationInfoTo($loginFormInfo, 'Hasło musi zawierać znaki: !@#$');
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    
    if (isFormValid()) {
      ajaxHandler();
    } else {
      return;
    }
  };

  $loginForm.on('submit', formHandler);

  const inputFocusHandler = (event) => {
    const $inputWrapper = $(event.target).parent();
    $inputWrapper.find('label').addClass('js-moved');
  };

  const inputBlurHandler = (event) => {
    const $input = $(event.target);
    const $inputWrapper = $(event.target).parent();

    if (!$input.val().length) {
      $inputWrapper.find('label').removeClass('js-moved');  
    }
  };

  $loginFormInputs.find('input[type=text], input[type=password]').on('focus', inputFocusHandler);
  $loginFormInputs.find('input[type=text], input[type=password]').on('blur', inputBlurHandler);
})();