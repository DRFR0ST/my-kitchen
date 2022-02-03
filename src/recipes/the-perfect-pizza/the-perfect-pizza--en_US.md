# Reset Wordpress password with FTP

Did it ever happen to you? You've setup a blog for your friend, some time later they want to change something but they -- like all of us -- lost their admin account credentials. Lucky for you, we got a simple solution which requires you to have credentials to the FTP server where your WordPress instance is installed on. 

## Let's get started 
Without further ado, let's jump right into changing the default admin account password. 

First of all, connect to your server using FTP and navigate to the main WordPress directory. (How to connect? [Learn here.](https://www.wired.com/2010/02/ftp_for_beginners/)

### 1. Include a password reset script.

Make your keyboard ready for some code! 🔥

1. Navigate to `wp-content/` -- where the `` file is placed -- and open it in your favourite IDE.
2. Now place the script from below at the end of the file.
```php
<?php
   $something = "test";
?>
```
3. Save the file and upload to your server.

### 2. Trigger the pasted script.

Now to change the password, the sctipt has to be triggered. You can trigger it by loading the main page of your blog. It should display a `done` message after the password changes. 

### 3. Login and set new secure password.

The script has done it's work, now it has to be removed and you should be able to login with the following credentials: 
```
admin
mynewpassword
```

After login, remember to change your password to a more secure one.

PS. Stop loosing your passwords! 😐
