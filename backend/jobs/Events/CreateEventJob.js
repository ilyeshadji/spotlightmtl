const Event = require("../../models/event");
const HttpError = require("../../models/http-error");
const CreateEventJob = async (req, res, next) => {
  const event = new Event({
    ...req.body,
  });

  try {
    await event.save();
  } catch (err) {
    return next(
      new HttpError("CreateEventJob - Could not add a new event", 500),
    );
  }

  return event;
};

module.exports = CreateEventJob;