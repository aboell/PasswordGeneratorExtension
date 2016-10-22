# Password Mnemonic Generator Extension

## Prologue

Name: Andy Boell

Date - 10/22/16

Module 9 - Password.html

## Purpose

Password Generator Extension is a simple tool that end users can use in developing a strong password and using it in a webpage.  This is developed as a Chrome Browser extension.

## Usage

Download four files and place them in a dedicated directory.  The files to download are:
* icon.png
* manifest.json
* popup.html
* popup.js
Once the files are downloaded and placed in a dedicated directory, within Chrome go to Settings icon (3 dots in the top right corner of your browser), click on More Tools, then Extensions.  At the Extensions page, make sure the Developer checkbox is checked.  Once checked, a row of buttons will be displayed.  Click the button "Load unpacked extension..." and navigate to the folder containing the files and click Ok.  The extension will be loaded in your browser and will appear as a little padlock icon next to the Settings icon.

## Algorithm

The algorithm is very simple; extract the first letter from the phrase to create a password.  Then modify the password with character substitutions to show the user variations and how it impacts the strength of the password.

## Strength Scale
**Default Password Strength Scale**

Length
* Weak < 8
* OK 8 or 9
* Strong 10 or 11
* Very Strong > 11

Character Classifications
* List of Character Classifications
	* Lower Case - a, b, c, etc.
	* Upper Case - A, B, C, etc.
	* Numbers - 1, 2, 3, etc.
	* Special Characters - ~ ` ! # $ % \ ^ & * + = - [ ] ' ; , / { } | " : < > ?
* Weak - 1 character classification
* OK - 2 character classifications
* Strong - 3 character classifications
* Very Strong - 4 character classifications

![Password Strength Matrix](/PasswordStrengthMatrix.JPG)

###Substitution Performed
The following substitution on a per-letter basis is performed: l=1, E=3, o=0, O=0, B=8, i=!, a=@, s=$, S=$

## Usage Example

### Input phrase
`This password is better than your last password by a long shot`

### Click Generate password
When the Generate Password button is clicked, the phrase entered above is parsed and a password is generated using the algorithm identified above.  If the password is considered Ok, Strong and Very Strong, the password is placed into password textbox and the password is copied to the clipboard (the user is informed that the password was copied to the clipboard).  If the password is considered Weak then the password is not copied to the clipboard and the user is informed that it was not copied to the clipboard.

### View button
When the View button is clicked, the password generated is displayed.  If the view button is pressed again, the password is replaced by stars.

### Output generated
Suggested Password|Password Strength
`Tp!bty1pb@1$`|**Very Strong**

## Other

The default password strength scale is not based upon any recommended scale.  Rather it is currently designed as a proof of concept.

The character substitutions are arbitrarily selected on substitutions I have previously used in passwords. 

This page was created as an all-inclusive page with no calls outside itself.  This is keep the code review simple and provide a "piece of mind" that the passwords entered are not extracted and collected.

## Future Work

*Modify this extension to allow the user to customize the substitution and strength scale of the password.
*Publish this extension to the Chrome extension store
