document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const li = document.querySelectorAll(".NavMenu__li");
  const NavMenu = document.querySelector(".NavMenu");
  const nav = document.querySelector("nav");
  const hamburger = document.querySelector(".hamburger");
  const error = document.createElement("p");
  error.style.color = "red";
  error.classList.add("errorPhone");
  const errorName = document.createElement("p");
  errorName.style.color = "red";
  errorName.classList.add("errorName");
  const shadow = document.querySelector(".shadow");
  const receive = document.querySelectorAll(".receive");
  const shadowThank = document.querySelector(".shadowThank");
  const closeApplicationSent = document.querySelector(".closeApplicationSent");
  const forms = document.querySelectorAll("form");

  forms.forEach((f) => {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      let validate = true;
      const inputs = f.querySelectorAll("input");
      inputs.forEach((i) => {
        if (i.name === "name") {
          if (i.value.length < 2) {
            validate = false;
            if (i.value.length === 0) {
              errorName.textContent = "Введите ваше имя !";
              f.querySelector(".nameErrorChek").appendChild(errorName);
              return;
            }
            if (i.value.length === 1) {
              errorName.textContent = "Введите кооректное имя !";
              f.querySelector(".nameErrorChek").appendChild(errorName);
              return;
            }
          }
          errorName.textContent = "";
        }
        if (i.name === "phone") {
          if (i.value.length < 12) {
            validate = false;

            if (i.value.length === 0) {
              error.textContent = "Вы не ввели номер телефона !";
              f.querySelector(".phoneErrorChek").appendChild(error);
              return;
            }
            if (i.value.length > 0) {
              error.textContent = "Введите корректный номер телефона !";
              f.querySelector(".phoneErrorChek").appendChild(error);
              return;
            }
          }
          error.textContent = "";
        }
      });
      if (!validate) {
        return;
      }
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize(),
      })
        .done(function () {
          inputs.forEach((i) => {
            modalNone(),
              (i.value = ""),
              ((shadowThank.style.display = "block"),
              (body.style.overflow = "hidden"));
          });
        })
        .fail(function () {
          alert("error");
        });
    });
  });

  document.querySelectorAll(".curtain").forEach((el, i) => {
    el.addEventListener("click", function () {
      this.nextElementSibling.classList.toggle("d-none");
      this.childNodes[3].classList.toggle("arrowDegree");
    });
  });

  hamburger.addEventListener("click", () => {
    if (hamburger.className === "hamburger") {
      hamburger.classList.toggle("hamburger_active");
      NavMenu.style.display = "block";
      body.style.overflow = "hidden";
    } else {
      hamburger.classList.remove("hamburger_active");
      NavMenu.style.display = "none";
      body.style.overflow = "";
    }
  });

  function res() {
    Object.values(li).forEach((li) => {
      li.addEventListener("click", () => {
        if (window.screen.width <= 767) {
          NavMenu.style.display = "none";
          body.style.overflow = "";
          hamburger.classList.remove("hamburger_active");
        }
      });
    });
  }
  res();

  function modalNoneTwo() {
    shadowThank.style.display = "none";
    body.style.overflow = "";
  }
  closeApplicationSent.addEventListener("click", modalNoneTwo);

  function modalNone() {
    shadow.style.display = "none";
    body.style.overflow = "";
  }

  function modal() {
    shadow.style.display = "block";
    body.style.overflow = "hidden";
  }

  function modalWrap() {
    Object.values(receive).forEach((x) => {
      x.addEventListener("click", modal);
    });

    modal();

    modalNone();

    closeApplicationSent.addEventListener("click", modalNone);
  }
  modalWrap();

});

const params = new URLSearchParams(document.location.search);
