## demo-react-rxjs
### A live analytics dashboard displays data about a medical operating room to doctors and nurses.
  It receives its data from three independent monitoring systems:
####   Temperature
####   Air pressure
####   Humidity
  Each system sends randomly data every 100-2000ms.

## Setup

```bash
npm install
```

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### dependencies used

  Here, the Observable of the rxjs used for updating the latest value of all the three monitoring systems. which is being consumed to the dashboard.
  
  = It is set that when a system sends the new values it will be emmited to the display.<br />
  = If a value is not received from a specific system for more than 1000ms then the reading would `N/A`.<br />
  = Display value would not be emitted more often than every 100ms.
  
  Added a `service.js` for all the Observable for the monitoring systems that is having the separate data updating functions to return the random numbers.
  
### UI
  Basic designed UI component added to display the three monitoring systems readings.