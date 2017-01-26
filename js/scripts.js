//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

//user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var contact = new Contact(inputtedFirstName, inputtedLastName);
    $("ul#contacts").append("<li>" + contact.fullName() + "</li>");
  });
});
