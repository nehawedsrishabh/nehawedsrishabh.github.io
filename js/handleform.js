function sendemail() {
   
    
    $email = $('#email').val();
    $name = $('#email').val();
    $totalguest = $('#totalguests').val();
    console.log($email,$name,$totalguest)
    let token = "d0acfa13-b106-470c-874a-0eb0b1a8181f";
   Email.send({
    SecureToken : token,
    To : $email,
    From : "you@isp.com",
    Subject : "Response",
    Body : "Name:"+$name+"Email"+$email+"Guests Arriving"+$totalguest
}).then(
  message => alert(message)
);


}
   