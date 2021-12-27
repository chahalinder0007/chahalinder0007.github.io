---
title: Demo 
subtitle: Text generation Demo
---


<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        *{
            box-sizing: border-box;
        }
        .messageContainer{
            width: 100%;
            border: 1px solid #dddddd;
        }
        .messageForm{
            padding: 15px;
        }
        .messageForm label{
            display: block;
            margin-bottom: 5px;
        }
        .messageForm .messageField{
            display: block;
            width: 100%;
            margin-bottom: 5px;
            height: 80px;
            padding: 10px;
            border: 1px solid #cdcdcd;
        }
        .messageForm .messageField:focus{
            outline: none;
        }
        .messageForm .sendButton{
            padding: 8px 15px;
            background: #008b2a;
            border: 1px solid #016b21;
            color: #ffffff;
            font-weight: bold;
            font-size: 14px;
            border-radius: 5px;
            cursor: pointer;
            display: flex;
        }
        .messageForm .sendButton i{
            display: none;
            margin-right: 5px;
        }
        .messageForm .sendButton:hover, .messageForm .sendButton:hover{
            outline: none;
        }
        .messageForm .error{
            color: red;
            padding-bottom: 5px;
        }
        .messageForm .success{
            background: #d4ffbb;
            color: #000000;
            padding: 5px 10px;
            margin-bottom: 5px;
            display: none;
            border: 1px solid #b5c1af;
        }
    </style>
</head>
<body>
    <div class="messageContainer">
        <div class="messageForm">
            <label>Type some starting Text: e.g "India is"</label>
            <textarea class="messageField" id="message"></textarea>
            <div class="error" id="error"></div>
            <div class="success" id="success"></div>
            <button class="sendButton" id="sendButton" onclick="sendMessage()"><i id="loadingIcon" class="fa fa-spinner fa-spin"></i> <span id="buttonText">Send</span></button>
        </div>
    </div>
    </body>
    <script>
        function sendMessage() {
            let text = document.getElementById('message').value;
            let sendBtn = document.getElementById('buttonText');
            let loadingIcon = document.getElementById('loadingIcon');
            loadingIcon.style.display = 'block';
            sendBtn.innerText = 'The demo is currently offline';
            if(text){
                text = text.trim();
                let xhttp = new XMLHttpRequest();
                const params = {
                    starting_text: text
                }
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        let successNode = document.getElementById("success");
                        let responseText = JSON.parse(this.responseText);
                        console.log("responseText: ", responseText);
                        if(responseText.length && responseText[0] && responseText[0].generated_text){
                            successNode.innerHTML = responseText[0].generated_text;
                            successNode.style.display = 'block';
                        }
                        loadingIcon.style.display = 'none';
                        sendBtn.innerText = 'Send';
                    }
                };
                xhttp.open("POST", ` https://text-demo.inderjit.in/`, true);
                xhttp.setRequestHeader("Content-Type", "application/json");
                xhttp.send(JSON.stringify(params));
            } else {
                document.getElementById("error").innerHTML = 'Message required.';
            }
        }
    </script>
</html>