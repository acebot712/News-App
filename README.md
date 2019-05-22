# News-App 

This is a news app that shows world news of five countries: USA, India, France, Canada, Russia.
<img src="https://github.com/asterdan712/News-App/blob/master/screenshot.png" alt="Screenshot" title="Screenshot" width="50%" height="50%" />

## Installing APK
The release Android APK for the following file can be found [here](https://drive.google.com/file/d/1yRF4UR55LSJbzSiRaNaTY7seZ3L1H-aI/view?usp=sharing). Download and install the APK to your android device and the app is ready to run.

## Notes on Code
The API KEY used in [~/blob/master/src/components/NewsList.js](https://github.com/asterdan712/News-App/blob/master/src/components/NewsList.js) for accessing Google News is to be provided in place of `{API_KEY}` using your own API KEY obtained from [News API](https://newsapi.org/).

## Testing Build
To the test the build before installing the APK:
1. Clone Repository by running `git clone https://github.com/asterdan712/News-App.git` in your command line.
2. Install node modules. Type in your command line `npm install`.
3. Start your **Android/iOS** emulator.
4. To test build in run:
	* For **Android**: `react-native run-android`
	* For **iOS**: `react-native run-ios`
