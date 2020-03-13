<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title> {{$title}}</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <style>
        .table{
            background-color: #f8f8ff;
            margin: 10px;
            padding: 10px;
          /*  border: 22px solid darkturquoise;*/
            border: 22px solid #000000;
            box-shadow: inset 0 0 20px 0px black !important;

        }

        .header-border { border-bottom:5px solid #000000}
        .header-border img ,.header-border #header {float: left; padding: 5px }
        #header{font-size:1.8rem;font-family: serif; font-weight:bold; text-align: center;padding-left: 200px !important;; }

    </style>

</head>
<body>
<div class="table-responsive" style="">
<table  border="0" class="table  " style="">
    <thead>
    <tr>
        <th  colspan="2" align="center" class="header-border">
            <img src="{{url('http://user.biltrax.com/dash/img/logo/Pic3.png')}}" height="30" width="110">
            <span id="header">Reset Password </span>
         </th>
    </tr>
    </thead>
    <tbody>
    <tr><td>Hi, <b>{{$content['name']}}</b></td></tr>
    <tr>   <td> <br></td> </tr>
    <tr>   <td>You recently requested to reset your password for your Biltrax account. Click the link below to reset it.</td></tr><br/>
    <tr><td>Your Link: {{$content['link']}}</td></tr>
    <tr> <td> Expires in: <b>24 hours</b></td> </tr>
    <br/>
    <tr> <td> If you did not request a password reset, please ignore this email or reply to contact@biltrax.com to let us know. This password reset is only valid for the next 24 hours.</td> </tr>


    </tbody>
  <tfoot>
  <tr>   <td> <br></td> </tr>
  <td colspan="2">
      <p>Please do not reply to this message. Replies to this message are routed to an unmonitored mailbox. If you have questions please contact us at     <br/>
          contact@biltrax.com & we will get back to you at the earliest.
      </p><br/>
      <p>Best Regards,<br/>Team Biltrax</p>
  </td>
  </tfoot>
 </table>
    </div>
</body>
</html>