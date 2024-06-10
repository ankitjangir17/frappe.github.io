// Format SatSchedule
class scheduleEvent {
  constructor(title, start, end, track) {
    this.title = title;
    this.startTime = start;

    if (track == undefined) {
      this.end = null;
      this.track = end;
    } else {
      this.endTime = end;
      this.track = track;
    }
  }
}

var friday = [];
var saturday = [];

// track = {main, ws} where ws is workshop
friday.push(new scheduleEvent("Check-In Opens", "10:00", "main"));
friday.push(new scheduleEvent("Hacking Begins", "12:00", "main"));
friday.push(new scheduleEvent("Opening Ceremony", "11:00", "main"));
friday.push(
  new scheduleEvent("Introduction to Electronics", "12:15", "13:15", "ws")
);
friday.push(new scheduleEvent("LUNCH", "13:00", "main"));
friday.push(
  new scheduleEvent("Coding Challenge by BlackRock", "13:30", "14:30", "ws")
);
friday.push(
  new scheduleEvent(
    "Entreprenuership workshop by Edinburgh Innovations",
    "15:00",
    "16:00",
    "ws"
  )
);
friday.push(new scheduleEvent("Workshop by Nexmo", "17:00", "18:00", "ws"));
friday.push(new scheduleEvent("Dinner", "19:00", "main"));
friday.push(
  new scheduleEvent("Werewolf by MLH (Social)", "20:00", "21:00", "ws")
);
friday.push(new scheduleEvent("Sleep Drop-In Begins", "21:00", "main"));
saturday.push(new scheduleEvent("Pizza!!", "00:00", "main"));
saturday.push(new scheduleEvent("Hacking Ends", "12:00", "main"));
saturday.push(new scheduleEvent("Breakfast", "08:00", "main"));
saturday.push(new scheduleEvent("Lunch", "12:00", "main"));
saturday.push(new scheduleEvent("Judging Commences", "13:15", "14:30", "main"));
saturday.push(new scheduleEvent("Closing Ceremony", "15:00", "16:00", "main"));
saturday.push(new scheduleEvent("Venue closed", "17:00", "main"));
// sunday.push(new scheduleEvent("No workshops today", "00:00", "17:00", "ws"));

friday.sort((a, b) => (a.startTime >= b.startTime ? 1 : -1));
saturday.sort((a, b) => (a.startTime >= b.startTime ? 1 : -1));

var str = "<tbody>";
str += "<tr><th></th><th>Main track</th><th></th><th>Workshops</th></tr>";
friday.forEach(function (ev, index) {
  if (index == 0 || friday[index - 1].startTime != ev.startTime) {
    str += "<tr>";
    if (ev.track == "ws") {
      str += "<th></th>";
      str += "<td></td>";
    }

    str += "<th>";

    str += ev.startTime;
    if (ev.endTime) {
      str += "<br />|<br />" + ev.endTime;
    }
    str += "</th>";
    str += "<td>";
    str += ev.title + "";
    str += "</td>";

    if (ev.track == "main") {
      if (
        index != friday.length - 1 &&
        ev.startTime == friday[index + 1].startTime
      ) {
        str += "<th>";
        str += friday[index + 1].startTime;
        if (friday[index + 1].endTime) {
          str += "<br />|<br />" + friday[index + 1].endTime;
        }

        str += "</th>";
        str += "<td>" + friday[index + 1].title + "</td>";
      } else {
        str += "<th></th>";
        str += "<td></td>";
      }
    }

    str += "</tr>";
  }
});
str += "</tbody>";
window.document.getElementById("fridayContainer").innerHTML = str;

var str = "<tbody>";
str += "<tr><th></th><th>Main track</th><th></th><th>Workshops</th></tr>";
saturday.forEach(function (ev, index) {
  if (
    index == 0 ||
    saturday[index - 1].startTime != ev.startTime ||
    saturday[index - 1].track == ev.track
  ) {
    str += "<tr>";
    if (ev.track == "ws") {
      str += "<th></th>";
      str += "<td></td>";
    }

    str += "<th>";

    str += ev.startTime;
    if (ev.endTime) {
      str += "<br />|<br />" + ev.endTime;
    }
    str += "</th>";
    str += "<td>";
    str += ev.title + "";
    str += "</td>";

    if (ev.track == "main") {
      if (
        index != saturday.length - 1 &&
        ev.startTime == saturday[index + 1].startTime &&
        ev.track != saturday[index + 1].track
      ) {
        str += "<th>";
        str += saturday[index + 1].startTime;
        if (saturday[index + 1].endTime) {
          str += "<br />|<br />" + saturday[index + 1].endTime;
        }

        str += "</th>";
        str += "<td>" + saturday[index + 1].title + "</td>";
      } else {
        str += "<th></th>";
        str += "<td></td>";
      }
    }

    str += "</tr>";
  }
});
str += "</tbody>";
window.document.getElementById("saturdayContainer").innerHTML = str;
