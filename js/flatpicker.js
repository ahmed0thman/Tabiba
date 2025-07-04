const days = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

const flatpickers = Array.from(document.querySelectorAll(".flatpicker"));
const dir = document.documentElement.getAttribute("dir");
if (dir === "rtl") {
  flatpickr.localize(flatpickr.l10ns.ar);
}

if (flatpickers.length > 0) {
  flatpickers.map((ele) => {
    const dateInput = ele.querySelector(".flatpickerinput");
    if (dateInput) {
      const minDate = dateInput.dataset?.minDate;
      const daysRange = dateInput.dataset?.daysRange;
      const daysOff = dateInput.dataset?.daysOff?.split(",");
      const datesOff = dateInput.dataset?.datesOff?.split(",");

      flatpickr(dateInput, {
        appendTo: ele,
        disable: [
          function (date) {
            return daysOff.find((day) => date.getDay() === days[day]);
          },
          ...datesOff,
        ],
        minDate: minDate,
        maxDate: new Date().fp_incr(+daysRange), // 90 days from now
        locale: {
          firstDayOfWeek: 6, // start week on Saturday
        },
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
      });
    }
  });
}
