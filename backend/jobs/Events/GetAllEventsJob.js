const Event = require("../../models/event");
const HttpError = require("../../models/http-error");
const GetAllEventsJob = async (req, res, next) => {
  let allEvents;

  try {
    allEvents = await Event.find({});
  } catch (err) {
    return next(
      new HttpError("GetAllEventsJob - Could not get all events", 500),
    );
  }

  return allEvents;
};

module.exports = GetAllEventsJob;