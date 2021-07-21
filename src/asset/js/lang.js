const lang = {
    "fr": {
        "roles": ["Chef de projet chez<br>Junior Conseil Taker"],
        "student": ["Etudiant à Epitech"]
    },
    "en": {
        "roles": ["Project manager at<br>Junior Conseil Taker"],
        "student": ["Epitech's student"]
    }
}

let student;
let roles;

let rls = $(".roles")
let std = $(".student")

function clearStatusAndRoles() {
    rls.empty()
    std.empty()
}

function printStatusFr() {
    if(student && student.constructor === Typed) {
        student.destroy();
    }
    if(roles && roles.constructor === Typed) {
        roles.destroy();
    }
    student = new Typed('.student', {
      strings: lang.fr.student,
      typeSpeed: 30,
      showCursor: false,
      onbegin: clearStatusAndRoles,
      onComplete: printRolesFr
    });
  }

  function printRolesFr() {
    roles = new Typed('.roles', {
      strings: lang.fr["roles"],
      typeSpeed: 30,
      showCursor: false
    });
  }

  function printStatusEn() {
    if(student && student.constructor === Typed) {
        student.destroy();
    }
    if(roles && roles.constructor === Typed) {
        roles.destroy();
    }
    student = new Typed('.student', {
      strings: lang.en.student,
      typeSpeed: 30,
      showCursor: false,
      onbegin: clearStatusAndRoles,
      onComplete: printRolesEn
    });
  }

  function printRolesEn() {
    roles = new Typed('.roles', {
      strings: lang.en.roles,
      typeSpeed: 30,
      showCursor: false
    });
  }