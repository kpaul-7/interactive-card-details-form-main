const onSubmitHandler = () => {
  // reset
  document.querySelector("#usernameSpan").style.display = "none";
  document.querySelector("#monthSpan").style.display = "none";
  document.querySelector("#yearSpan").style.display = "none";
  document.querySelector("#cvcSpan").style.display = "none";
  document.querySelector("#username").classList.remove("errorBorder");
  document.querySelector("#month").classList.remove("errorBorder");
  document.querySelector("#year").classList.remove("errorBorder");
  document.querySelector("#cardno").classList.remove("errorBorder");
  document.querySelector("#cvc").classList.remove("errorBorder");

  document.querySelector("#monthSpan").innerHTML = "Cann't be blank";
  document.querySelector("#cardnoSpan").innerHTML = "Cann't be blank";
  document.querySelector("#cvcSpan").innerHTML = "Cann't be blank";

  let username = document.querySelector("#username").value;
  username = username.trim().toUpperCase();
  let month = document.querySelector("#month").value;
  month = month.trim();
  let year = document.querySelector("#year").value;
  year = year.trim();
  let cardno = document.querySelector("#cardno").value;
  cardno = cardno.trim();
  let cvc = document.querySelector("#cvc").value;
  cvc = cvc.trim();

  if (
    !username ||
    !month ||
    !year ||
    !cardno ||
    !cvc ||
    month > 12 ||
    month < 1 ||
    cardno.length != 16 ||
    cvc.length != 3
  ) {
    if (!username) {
      document.querySelector("#usernameSpan").style.display = "block";
      document.querySelector("#username").classList.remove("border");
      document.querySelector("#username").classList.add("errorBorder");
    }
    if (!month || !year) {
      if (!month) {
        document.querySelector("#monthSpan").style.display = "block";
        document.querySelector("#month").classList.remove("border");
        document.querySelector("#month").classList.add("errorBorder");
      }

      if (!year) {
        document.querySelector("#yearSpan").style.display = "block";
        document.querySelector("#year").classList.remove("border");
        document.querySelector("#year").classList.add("errorBorder");
      }
    }
    if (month > 12 || month < 1) {
      document.querySelector("#monthSpan").style.display = "block";
      document.querySelector("#monthSpan").innerHTML = "invalid";
      document.querySelector("#month").classList.remove("border");
      document.querySelector("#month").classList.add("errorBorder");
    }
    if (cardno.length != 16) {
      document.querySelector("#cardno").classList.remove("border");
      document.querySelector("#cardno").classList.add("errorBorder");
      document.querySelector("#cardnoSpan").style.display = "block";
      document.querySelector("#cardnoSpan").innerHTML = "invalid";
    }
    if (!cardno) {
      document.querySelector("#cardno").classList.remove("border");
      document.querySelector("#cardno").classList.add("errorBorder");
      document.querySelector("#cardnoSpan").style.display = "block";
      document.querySelector("#cardnoSpan").innerHTML = "Cann't be blank";
    }

    if (cvc.length != 3) {
      document.querySelector("#cvc").classList.remove("border");
      document.querySelector("#cvc").classList.add("errorBorder");
      document.querySelector("#cvcSpan").style.display = "block";
      document.querySelector("#cvcSpan").innerHTML = "invalid";
    }
    if (!cvc) {
      document.querySelector("#cvcSpan").style.display = "block";
      document.querySelector("#cvc").classList.remove("border");
      document.querySelector("#cvc").classList.add("errorBorder");
    }
  } else {
    document.querySelector("#usernameField").innerHTML = username;
    //   month and year

    month = month < 10 ? "0" + month : month;
    year = year < 10 ? "0" + year : year;
    let monthyear = month + "/" + year;
    document.querySelector("#monthYearField").innerHTML = monthyear;

    document.querySelector("#cardno1").innerHTML = cardno.substring(0, 4);
    document.querySelector("#cardno2").innerHTML = cardno.substring(4, 8);
    document.querySelector("#cardno3").innerHTML = cardno.substring(8, 12);
    document.querySelector("#cardno4").innerHTML = cardno.substring(12, 16);
    document.querySelector("#cvcField").innerHTML = cvc;
    document.querySelector(".success").style.display = "flex";
    document.querySelector(".flex-container-form").style.display = "none";
  }
};
