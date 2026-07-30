# Feature 01 - User Access Management

## What does feature 01 do

feature 01 is a login history tracker for the whole system

when a user logs in a new row gets added to the AccessLog table in the database
when the same user logs out that same row gets updated with the logout time
the logs page lets users see their own login and logout history and filter it by date

thats it thats the whole feature


## The 4 files and what they do

![[Pasted image 20260514125437.png]]

## Login flow

![[Pasted image 20260514125458.png]]


## View logs flow

![[Pasted image 20260514125522.png]]


## Logout flow

![[Pasted image 20260514125536.png]]


## The AccessLog table
![[Pasted image 20260514125601.png]]
the LogoutTimestamp being nullable is important
it means a row can exist before the user logs out which is exactly what we need


## User stories

![[Pasted image 20260514125622.png]]


## Key things to remember for questions

**why is log_id stored in the session**
because when the user logs out the backend needs to know which specific row to update
if we just looked up the latest log by user id that could break if someone was logged in from two places at once
storing the log_id in the session ties the logout directly to the login that started this session

**why does logs.js use credentials include**
because without it the browser wont send the session cookie with the fetch request
if the cookie doesnt get sent the backend has no way to know who is asking for the logs

**why is the date filter done in python not sql**
because get_user_logs in db_crud just fetches all rows for the user
then get_user_access_logs in the controller loops through them and skips rows where the date doesnt match
if you get asked you can say this could be improved by doing the filter in sql instead

**what happens if someone closes the browser without logging out**
the LogoutTimestamp stays NULL for that row
this is fine because the column is nullable on purpose
the record still shows up in the logs page it just has no logout time

**how does the logs page stop other users from seeing your records**
the backend always gets the user id from the session not from the frontend
so even if someone tried to tamper with the request they would only ever get back rows for whoever is in the session
the WHERE UserID = ? clause is the actual enforcement