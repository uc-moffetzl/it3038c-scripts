function getIP{
    (Get-NetIPAddress).IPv4Address | Select-String "192*"
}
$IP = getIP
$USER = $env:USERNAME
$COMP = $env:COMPUTERNAME
$PSV = $HOST.Version.Major
$DATE = Get-Date
$BODY = "This machine's IP is $IP. User is $USER. Hostname is $COMP. Powershell Version $PSV. Today's Date is $DATE."
Send-MailMessage -To "zmoffett26@gmail.com" -From "zmoffett26@gmail.com" -Subject "IT3038C Windows SysInfo" -Body $BODY -Credential (Get-Credential) -smtpserver "smtp.gmail.com" -port 587 -UseSSL