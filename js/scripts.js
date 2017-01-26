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
    $("ul#contacts").append("<li><span class='contact'>" + contact.fullName() + "</span></li>");

  //inputs are now blank
   $("input#new-first-name").val("");
   $("input#new-last-name").val("");

   $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(contact.fullName());
      $(".first-name").text(contact.firstName);
      $(".last-name").text(contact.lastName);
    });
  });
});
