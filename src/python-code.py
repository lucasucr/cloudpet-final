import os
import smtplib, ssl
import time
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

cred = credentials.Certificate('cloudpet_firebase_sdk.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

emp_ref = db.collection('auth')
docs = emp_ref.stream()

for doc in docs:
    print('{} => {} '.format(doc.id, doc.to_dict()))

name = doc.to_dict()
email = name["email"]


hostname = "192.168.0.2"

port = 465  # For SSL
smtp_server = "smtp.gmail.com"
sender_email = "cloudpett@gmail.com"  # Enter your address
receiver_email = email  # Enter receiver address
password = "CloudPet2020"
message = MIMEMultipart("alternative")
message["Subject"] = "Advertencia Cloudpet!"
message["From"] = sender_email
message["To"] = receiver_email

text = """\
Subject: CloudPet

Tu mascota se escapo!!! 


This message is sent from CloudPet. """

html = """\
<html>
<body>
    <h2>Hola!</h2>
    <h3 style="color:green;">Tu mascota se perdio!</h3>
    <img width="400px" height="350px" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Golden_Retriever_with_tennis_ball.jpg">
</body>
</html>
"""

message2 = """\
Subject: Cloupdet

Tu mascota volvio a tu casa


This message is sent from CloudPet.
"""

# Turn these into plain/html MIMEText objects
part1 = MIMEText(text, "plain")
part2 = MIMEText(html, "html")

# Add HTML/plain-text parts to MIMEMultipart message
# The email client will try to render the last part first
message.attach(part1)
message.attach(part2)

isDown = False
isUp = False
emailSent = False


while 1 == 1:
    response = os.system("ping -c 1 -w2 " + hostname + " > /dev/null 2>&1")
    if response == 0 and isDown is False:
        isUp = True
        print(hostname, 'is up!')
        time.sleep(10)
    else:
        isDown = True
        print(hostname, 'is down!')
        time.sleep(5)
        if not emailSent:
            emailSent = True
            context = ssl.create_default_context()
            with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
                server.login(sender_email, password)
                server.sendmail(sender_email, receiver_email, message.as_string())
        if response == 0 and isDown == True:
            isDown = False
            emailSent = False
            print(hostname, 'is back!')
            with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
                server.login(sender_email, password)
                server.sendmail(sender_email, receiver_email, message2)