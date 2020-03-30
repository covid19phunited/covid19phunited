# covid19phunited
Web and mobile app for covid-19 PH https://covid19phunited.web.app/

# Want to contribute?
1. Install nodejs https://nodejs.org/en/
2. Install git https://git-scm.com/
3. Install Expo CLI
```
npm install -g expo-cli
```
4. Download this project
```
git clone git@github.com:covid19phunited/covid19phunited.git
```
5. Install project dependencies
```
cd covid19phunited
npm install
```
6. Start Web app
```
npm run web
```
This will open 2 Browser tabs: Metro Bundler and the Web app something like http://localhost:[port_number]

7. View the Web app using Chrome mobile view:
    1. Right click web page
    2. Select Inspect element
    3. Select "Toggle device toolbar" the 2nd icon from upper-left of Devtools
    4. Select iPhone 5/SE at the top of the web page. It's safer to use this screen size since it's one of the smallest.
8. To start fixing bugs or implementing new features, create a new branch.
```
git checkout -b add-awesome-feature
```
9. Update the codes. The Web app should reload automatically.
10. Once done, commit your codes then push to github.
```
git status                                            # double check changes
gitk                                                  # double check changes
git add .
git commit -m "add awesome feature etc etc"
git push --set-upstream origin add-sample-feature     # for succeeding, just git push
```
11. Visit the project in Github https://github.com/covid19phunited/covid19phunited then create a pull request from your branch to master.
