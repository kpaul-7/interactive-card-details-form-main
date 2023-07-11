const onSubmitHandler = () => {
  // reset
  document.querySelector("#usernameSpan").style.display = "none";
  document.querySelector("#monthSpan").style.display = "none";
  document.querySelector("#cvcSpan").style.display = "none";
  document.querySelector("#username").classList.remove("errorBorder");
  document.querySelector("#month").classList.remove("errorBorder");
  document.querySelector("#year").classList.remove("errorBorder");
  document.querySelector("#cardno").classList.remove("errorBorder");
  document.querySelector("#cvc").classList.remove("errorBorder");

  let username = document.querySelector("#username").value;
  username = username.trim().toUpperCase();
  let month = document.querySelector("#month").value;
  let year = document.querySelector("#year").value;
  let cardno = document.querySelector("#cardno").value;
  let cvc = document.querySelector("#cvc").value;

  if (!username || !month || !year || !cardno || !cvc) {
    if (!username) {
      document.querySelector("#usernameSpan").style.display = "block";
      document.querySelector("#username").classList.remove("border");
      document.querySelector("#username").classList.add("errorBorder");
    }
    if (!month || !year) {
      document.querySelector("#monthSpan").style.display = "block";
      if (!month) {
        document.querySelector("#month").classList.remove("border");
        document.querySelector("#month").classList.add("errorBorder");
      }
      if (!year) {
        document.querySelector("#year").classList.remove("border");
        document.querySelector("#year").classList.add("errorBorder");
      }
    }

    if (!cardno) {
      document.querySelector("#cardno").classList.remove("border");
      document.querySelector("#cardno").classList.add("errorBorder");
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
