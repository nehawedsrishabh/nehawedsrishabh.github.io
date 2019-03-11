function sendemail() {
   $email = $('#email').val();
    $name = $('#email').val();
    $totalguest = $('#totalguests').val();
    console.log($email,$name,$totalguest)
    let token = "99b7b319-fa71-4ec1-a934-4a52128d03e8";
   Email.send({
    SecureToken : token,
    To : $email,
    From : "sk9331657@gmail.com",
    Subject : "Response",
    Body : "Name:"+$name+"Email"+$email+"Guests Arriving"+$totalguest
}).then(
  message => alert(message)
);


}
   